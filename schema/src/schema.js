import { z } from 'zod/v4';

export const IdentifierSchema = z.string().regex(/^[a-zA-Z0-9]+$/);
export const CommentSchema = z.string().optional();
export const Uint8Schema = z.int().min(0).max(255);
export const Uint16Schema = z.int().min(0).max(0xffff);
// Note: Types can be expressions of the form
// OcaMap<OcaUint8,OcaString>[3]
// This is not possible to express in a regexp but
// the following gets close.
export const TypeSchema = z.string().regex(/^[a-zA-Z0-9<>,[\]]+$/)

export function makeObject(o) {
    return z.object(Object.assign({
        comment: CommentSchema,
    }, o));
}

export const PropertySchema = makeObject({
    name: IdentifierSchema,
    type: TypeSchema,
});

function makeEnum(name, valueType) {
    return makeObject({
        type: z.literal(name),
        name: IdentifierSchema,
        enumerators: z.array(makeObject({
            name: IdentifierSchema,
            value: valueType,
        })),
        extension_base: valueType.optional(),
    });
}

export const Enum8Schema = makeEnum('enum8', Uint8Schema);
export const Enum16Schema = makeEnum('enum16', Uint16Schema);

export const StructSchema = makeObject({
    type: z.literal('struct'),
    name: IdentifierSchema,
    properties: z.array(PropertySchema)
});

export const TypeDefSchema = makeObject({
    type: z.literal('typedef'),
    name: IdentifierSchema,
    target: TypeSchema,
});

export const LevelAndIndexSchema = makeObject({
    level: Uint16Schema,
    index: Uint16Schema,
});

export const ClassIdSchema = z.string().regex(/^\d+(\.\d+)*$/);
export const CIDSchema = z.string().regex(/^[a-fA-F0-9]{6}$/)

export const ControlClassSchema = makeObject({
    type: z.literal('control_class'),
    name: IdentifierSchema,
    parent: IdentifierSchema,
    classid: z.union([
        ClassIdSchema,
        makeObject({
            cid: CIDSchema.optional(),
            suffix: ClassIdSchema
        }),
    ]),
    properties: z.array(makeObject({
        name: IdentifierSchema,
        type: TypeSchema,
        id: LevelAndIndexSchema,
    })).optional(),
    methods: z.array(makeObject({
        name: IdentifierSchema,
        id: LevelAndIndexSchema,
        arguments: z.array(PropertySchema),
        return_values: z.array(PropertySchema),
    })).optional(),
    events: z.array(makeObject({
        name: IdentifierSchema,
        id: LevelAndIndexSchema,
        argument: PropertySchema,
    })).optional(),
});

export const Schema = z.discriminatedUnion("type", [
    Enum8Schema,
    Enum16Schema,
    StructSchema,
    TypeDefSchema,
    ControlClassSchema,
]);