# Class Descriptors

A Class Descriptor is a file containing a JSON object   
that defines the signature of an AES70 Control Class or Datatype.  This document
explains the format of the Class Descriptor and associated Datatypes.

## Submitting Class Descriptors to this repository

Please see **How To Contribute** in the [main README](./README.md).

## Schema

All Class Descriptors conform to the **AES70 ExtensionClasses Schema**, located in
the [**schema**](./schema) folder of this repository, in the file [**schema.json**](./schema/schema.json). 
It's a standard JSON schema, compliant with 
[version 2020-12 of the JSON schema standard](https://json-schema.org/draft/2020-12).  

This file is usable with any of the standard JSON schema validators. 
Contributors are strongly urged to validate their contributions before submitting them.

As the schema's README describes, the schema has been generated using 
the free [Zod schema generator](https://marketplace.visualstudio.com/items?itemName=psulek-solo.zodschema-generator).  This 
detail doesn't matter unless it becomes necessary to construct an alternate version of the schema.  Normally, 
contributors and users will just use [schema.json](./schema/schema.json) as is.

## Class Descriptors and their associated datatypes

A Class Descriptor is either a `Control Class Descriptor` or a `Datatype Descriptor`.  This section
defines the formats of each of these and a few associated datatypes.

### `Control Class Descriptor`

| Property Name 	|  Property Type		| Description	| 
| :-------------- | :---------------- | :-----------|
| `name`					| string     				| name of Control Class	|
| `type`	  			| string constant   | "control_class" 				|
| `parent`				| string 		| Name of AES70 class (standard or custom) from which this class is subclassed |
| `comment`   		| string 												| (optional) descriptive comment 	|
| `classid`     	| `ClassID`     		| see below	|
| `properties`		| `Property Descriptor` 	| Array. One element for each Control Class property	|
| `methods`				| `Method Descriptor` 		| Array. One element for each Control Class method		|
| `events`				| `Event Descriptor`    	| Array. One element for each Control Class event		|

The property, method, and event descriptor arrays only need to describe native elements, not inherited ones.
	   
### `Datatype Descriptor`

| Property Name 	|	 Property Type	| Description	|
| :--------------	|	:--------------	| :---------- |
| `name`					|	string   				| name of Datatype								|
| `type`	  			|	string constant	| "struct" 												|
| `comment`   		|	string					| (optional) descriptive comment 	|
| `properties`		| `Property Descriptor` 	| Array. One element for each Datatype property |

### Associated Datatypes

The following datatypes are used by Class Descriptors.

#### `ClassID` 

This object specifies the custom part of the custom class's ID.  For details, see 
the **Class Identification** and the **Lineage Keys of Nonstandard Classes** clauses 
in the AES70-1 standard.

When a `CID` is used to derive a nonstandard class identifier, form the full ClassID as:

`<parent classid words> + 0xFFFF + <cid_hi16> + <cid_lo16> + <suffix>`

This matches `OcaClassID` representation as a list of 16-bit words, so the 24-bit CID is split across two words.
For CID `0x00BBCC`, use `cid_hi16 = 0x0000` and `cid_lo16 = 0xBBCC`.

Example standards text (AES70-21 draft, page 14):

> "Aes67OcaMediaTransportApplication, Class ID 1.2.20.A.2100  
>  Aes67OcaMediaTransportSessionAgent, Class ID 1.2.20.A.2101  
>  Where A is the Authority ID that identifies the Authority responsible for defining the nonstandard classes used in this Standard. A shall be as follows: 0xFFFF00.0x000B5E."

Explicit worked example (AES70-20 lineage):

- Parent classid words (from `1.2.20`): `[0x0001, 0x0002, 0x0014]`
- Nonstandard marker word: `0xFFFF`
- `cid = 0x000B5E` as words: `[0x0000, 0x0B5E]`
- `suffix = 2101 = 0x0835`
- Full `OcaClassID` word list:
  `[0x0001, 0x0002, 0x0014, 0xFFFF, 0x0000, 0x0B5E, 0x0835]`

In dot-style notation this corresponds to `1.2.20.A.2101` with `A = 0xFFFF00.0x000B5E`.

| Property Name 	| Property Type		| Description	|
| :-------------- | :--------------	| :----------	|
| cid							|	String					| Six hexadecimal digits. Contributor's IEEE CID or OUI |
| suffix					|	Number					| Range 0..32767.  Class index of the custom class 				|

#### `Property Descriptor`

| Property Name 	|	Property Type		| Description	|
| :-------------	|	:--------------	| :----------	|
| `id`						|`ElementID`  		| Property ID		|
| `name`					|	string					| Property name	|
| `type`					|	string					| Datatype name	|
		
#### `Method Descriptor`

| Property Name 	| Property Type		| Description	|
| :-------------	|	:--------------	| :----------	|
| `id`					 	|	`ElementID` 		| Method ID		|
| `arguments`		 	|	`Argument Descriptor` array 	| one item for each supplied method argument	|
| `return_values`	|	`Argument Descriptor` array 	| one item for each returned method argument	|
  
#### `Event Descriptor` 

**TBD:  like method without return values**

#### `ElementID`  

This object specifies an AES70 Property ID, Method ID, or Event ID.  
For details, see the **Element IDs** clause in the AES70-1 standard.

| Property Name 	| Property Type		| Description	|
| :-------------- | :--------------	| :----------	|
| level						|	Number					| Range 1..99.  Level of the class tree at which the class is defined 	|
| suffix					|	Number					| Range 1..99.  Class index of the custom class within the given level 	|

#### `Argument Descriptor` 

This object specifies the name and datatype of a method or event argument, 
either supplied or returned.

| Property Name 	| Property Type		| Description	|
| :-------------- | :--------------	| :----------	|
| name						|	String					| Name of the variable 	|
| type						|	String					| Type of the variable 	|

The value of the `type` property may be the name of a standard AES70 datatype, 
or the name of a custom datatype defined elsewhere in the contribution.

  
