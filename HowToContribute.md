# How to Construct Class Descriptors

A Class Descriptor is a file containing a single JSON object 
that defines the signature of an AES70 Control Class or Datatype.  

This note explains how to construct Class Descriptors and contribute them to this repository.

## Files and folders

In this repository, Class Descriptors reside in subfolders 
of the folder [**contributions**](contributions). Basically, 
each person or organization making contributions has their own folder(s) for each edition of each standard 
to which they contribute. Details are in the **Contribution Folders** section 
of the [main README file](./README.md).

## Schema

All Class Descriptors conform to the **AES70 ExtensionClasses Schema**, located in
the [**schema**](./schema) folder of this repository, in the file [**schema.json**](./schema/schema.json). 
It's a standard JSON schema, compliant with 
[version 2020-12 of the JSON schema standard](https://json-schema.org/draft/2020-12).  

This file is usable with any of the standard JSON schema validators. 
Contributors are urged to validate their contributions before submitting them.

As the schema README describes, the schema has been generated using 
the free [Zod schema generator](https://marketplace.visualstudio.com/items?itemName=psulek-solo.zodschema-generator).  This 
detail doesn't matter unless it becomes necessary to construct an alternate version of the schema.  Normally, 
contributors and users can just use [schema.json](./schema/schema.json) as is.

## Contribution Procedure

To add a Class Descriptor to this repository:

1. Code a JSON Class Descriptor - either a `Control Class Descriptor` or a `Datatype Descriptor`. 
 
1. Working in your local copy of this repository, put the JSON code into a file whose name 
is of the form **\<YourExtensionClassName\>.json**.

1. Using any of the available JSON schema validators and the schema in [schema.json](./schema/schema.json), 
		validate your JSON code.
		
1. Put the file into the appropriate contribution folder (creating the folder if necessary). 
 
1. Submit a Git pull request to this repository. 
 
We'll review your contribution. If there are issues, we'll get back to you via GitHub.
When all is OK, we'll merge it into the repository. 

If your Class Descriptor uses special datatypes, remember to submit Class Descriptors for them as well.

## Class Descriptors and their associated datatypes

A Class Descriptor is either a `Control Class Descriptor` or a `Datatype Descriptor`.

### `Control Class Descriptor`

| Property Name 	|  Property Type		| Description	| 
| :-------------- | :---------------- | :-----------|
| `name`					| string     				| name of Control Class	|
| `type`	  			| string constant   | "ControlClass" 				|
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

### `ClassID` 

This object specifies the custom part of the custom class's ID.  For details, see 
the **Class Identification** and the **Lineage Keys of Nonstandard Classes** clauses 
in the AES70-1 standard.

| Property Name 	| Property Type		| Description	|
| :-------------- | :--------------	| :----------	|
| cid							|	String					| Six hexadecimal digits. Contributor's IEEE CID or OUI |
| suffix					|	Number					| Range 0..32767.  Class index of the custom class 				|

### `Property Descriptor`

| Property Name 	|	Property Type		| Description	|
| :-------------	|	:--------------	| :----------	|
| `id`						|`ElementID`  		| Property ID		|
| `name`					|	string					| Property name	|
| `type`					|	string					| Datatype name	|
		
### `Method Descriptor`

| Property Name 	| Property Type		| Description	|
| :-------------	|	:--------------	| :----------	|
| `id`					 	|	`ElementID` 		| Method ID		|
| `arguments`		 	|	`Argument Descriptor` array 	| one item for each supplied method argument	|
| `return_values`	|	`Argument Descriptor` array 	| one item for each returned method argument	|
  
### `Event Descriptor` 

** TBD **

### `ElementID`  

This object specifies an AES70 Property ID, Method ID, or Event ID.  
For details, see the **Element IDs** clause in the AES70-1 standard.

| Property Name 	| Property Type		| Description	|
| :-------------- | :--------------	| :----------	|
| level						|	Number					| Range 1..99.  Level of the class tree at which the class is defined 	|
| suffix					|	Number					| Range 1..99.  Class index of the custom class within the given level 	|

### `Argument Descriptor` 

This object specifies the name and datatype of a method or event argument, 
either supplied or returned.

| Property Name 	| Property Type		| Description	|
| :-------------- | :--------------	| :----------	|
| name						|	String					| Name of the variable 	|
| type						|	String					| Type of the variable 	|

The value of the **type** property may be the name of a standard AES70 datatype, 
or the name of a custom datatype defined elsewhere in the contribution.

  
