# AES70-21 Draft vs JSON Review Notes

This note compares `AES70-21-2024-260312.txt` (text extraction of the draft PDF) against the JSON files in `contributions/AES/AES70-21-2024/`.

## A) Issues likely in the PDF draft text

- In the session chapter, `AdaptionData` appears multiple times (e.g., "Aes67OcaMediaTransportSession.AdaptionData's SIP Parameter Record") while elsewhere it is `AdaptationData`.
  - Suggestion: normalize to `AdaptationData` everywhere, and prefer fully-qualified references such as `Aes67OcaMediaTransportSession.AdaptationData`.

- In the SDP chapter, there are references to `Aes67OcaMediaStreamEndpoint.AdaptationParameters` when context clearly indicates `AdaptationData`.
  - Suggestion: replace `AdaptationParameters` with `Aes67OcaMediaStreamEndpoint.AdaptationData` (fully qualified to avoid ambiguity with session adaptation data).

- One table title uses `Aes67OcaEndpointAdaptationData` (Table 13 heading), while the datatype is otherwise `Aes67EndpointAdaptationData`.
  - Suggestion: normalize table heading datatype name.

- A broken cross-reference appears in text: "See Clause 0 and especially Table 7."
  - Suggestion: update to the intended clause number.

- In Table 1 near `NetworkInterfaceAssignments`, the property/type columns appear garbled as `OcaNetworkInterfaceAssignment   OcaNetworkInterfaceAssignment` (same token repeated), conflicting with clause text that clearly names property `NetworkInterfaceAssignments`.
  - Suggestion: fix table row formatting/content so property name is unambiguous.

- Naming mismatch/ambiguity for stream mode capabilities:
  - Draft table text refers to `StreamModeCapabilities`.
  - Base OCC model property is `MediaStreamModeCapabilities` in `OcaMediaTransportApplication`.
  - Suggestion: explicitly state whether adaptation intends (a) to reuse/inherit `MediaStreamModeCapabilities`, or (b) to define a distinct adaptation-specific property with a new identifier.

- Method signature type consistency should be checked:
  - Presentation-time methods use `OcaMediaStreamEndpointID` in one place.
  - SDP methods are shown with `OcaID32 EndpointID` in pseudocode.
  - Suggestion: choose one canonical endpoint identifier type and use it consistently.

- Session AdaptationData typing should be clarified editorially:
  - Text says datatype of `Aes67OcaMediaTransportSession.AdaptationData` "shall be OcaParameterRecord".
  - For the JSON model, `OcaTypedBlob<OcaParameterRecord>` is the intended representation (type-erasure wrapper consistent with base-class blob semantics). The draft text should be adjusted to reflect this explicitly.
  - Recommendation: always reference `AdaptationData` with full owner qualification (for example `Aes67OcaMediaStreamEndpoint.AdaptationData` vs `Aes67OcaMediaTransportSession.AdaptationData`) to avoid ambiguity, since both structures contain a field with that name.

## B) Issues in the JSON rendition

- `Aes67OcaAvailableStreamAgent.json` (**fixed**)
  - Original class name typo was corrected.
  - Current note: class ID suffix reuse across different parents is not necessarily a collision in OCC semantics; treat as a modeling/toolchain policy decision.

- `Aes67OcaMediaTransportApplication.json` (**reviewed**)
  - `NetworkInterfaceAssignments` is inherited from `OcaNetworkApplication` and should not be duplicated in the adaptation class file.
  - Core endpoint/mode capability management already exists in `OcaMediaTransportApplication`; adaptation JSON should only repeat members when type/semantics are explicitly narrowed or changed.
  - In particular, base OCC uses the property name `MediaStreamModeCapabilities` (not `StreamModeCapabilities`).

- `Aes67OcaMediaTransportApplication.json` method signatures (**fixed**)
  - Placeholder signatures have been replaced with concrete arguments/return values from the draft text.
  - Endpoint ID usage was normalized in JSON to `OcaMediaStreamEndpointID`.
  - Remaining item is editorial in the PDF draft (mixed `OcaID32` vs `OcaMediaStreamEndpointID` in prose/pseudocode).

- `Aes67OcaMediaStreamEndpoint.json` (**fixed**)
  - `UserLabel` type typo was fixed (`OcaStribg` -> `OcaString`).

- `Aes67OcaMediaTransportSessionAgent.json` (**fixed**)
  - Mismatches were corrected:
    - property `Session` -> `Sessions`
    - `GetSessions` now returns `OcaList<Aes67OcaMediaTransportSession>` named `Sessions`.

- `Aes67OcaMediaTransportSession.json` (**fixed / intentional**)
  - `AdaptationData: OcaTypedBlob<OcaParameterRecord>`.
  - This is intentional and correct for the JSON model: subtype-specific record carried in a typed blob wrapper.
  - Remaining action is in the draft text: update wording that currently implies plain `OcaParameterRecord`.

- `Aes67AvailableStreamDescriptor.json` and `Aes67OcaAvailableStreamAgent.json` (**intentional proposal, not in current draft PDF**)
  - These are intentionally out-of-PDF proposal artifacts at this stage.
  - Keep them documented as proposal extensions until corresponding draft clauses are added.

## C) Priority fix order (recommended)

1. Confirm in draft wording which inherited members are only "notable" vs actually redefined by adaptation.
2. Update draft wording for session `AdaptationData` typing to match intended `OcaTypedBlob<OcaParameterRecord>` representation.
3. Add draft clauses for the available-stream proposal artifacts when they are promoted into the adaptation document.

