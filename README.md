<style>
	li{margin:0 0 0 0;}
	h1{font-size:14pt; border-top: 1px solid #A0A0A0;}
	h2{font-size:11pt; border:none;}
</style>

# Legal Notices

## License for Use

The file(s) in this repository are licensed under the Apache License, Version 2.0 (the "License"); 
you may not use these files except in compliance with the License. 
The text of the License is at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0) .

## Indemnification

Unless required by applicable law or agreed to in writing, 
software distributed under the License is distributed on an "AS IS" BASIS, 
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
See the License for the specific language governing permissions and limitations under the License.

## OCA Alliance Open Source Guidelines

Full guidelines for use of and contribution to OCA Alliance open-source software projects are here: [https://ocaalliance.github.io/opensource.html](https://ocaalliance.github.io/opensource.html).

# Technical Information

## Structure of this repository

This repository has the following structure:
```
Folder or File                        Contents
--------------------------------------------------------------
[contributorName(1)]-Contribution     Contributed files
...	 	
[contributorName(n)]-Contribution     Contributed files 				 
 					
License/                              Copy of Apache 2.0 license	
ClassDescriptorSchema.json            JSON Schema for the class descriptor
README.md                             Readme file 
--------------------------------------------------------------
```
## Contribution folders

Each contributor has their own folder.  The folder's name is the name of the entity that owns the content - an organization or an individual - or a reasonable short form of that name, followed by the text '-Contribution', e.g. **AES-Contribution**.

Folder contents should be as follows:
```
Folder or File                        Contents
---------------------------------------------------------------------------
File(1)                               Class Descriptor or other file
...
File(n)                               Class Descriptor or other file	

README.md                             Readme file - see below
--------------------------------------------------------------------------
```

## Class Descriptors

A class Descriptor is a file in JSON format that describes one or more AES70 classes or datatypes.  
A JSON schema that defines this format is on this repository's home page, **[here](../ClassDescriptorSchema.json)**.

## README File
Each contribution README file should begin with information that appropriately identifies the contribution's owner and submitter.
Suggested information items include:

- Name of contributor (organization or individual)
- Name of submitter, if different from above
- Contact information - email, phone, etcetera
- Website URL(s), if applicable

The file should describe the contributed content in appropriate detail and/or point to detailed online documentation.

## Other Files
The contribution folder can contain other relevant files - documentation, data, whatever. However, the inclusion of large files - videos, for example - is discouraged.  Please provide links to such files instead.

# How To Contribute
Anyone may contribute this project by submitting a Git Pull Request
to the project's repository.  No prior authorization is required. 

## Developer Certificate of Origin 

The comments field of every submitted Pull Request 
must contain a brief text that certifies the contributed content complies with the terms of the 
[Developer's Certificate of Origin (DCO)](https://developercertificate.org/)
a simple document written by the Linux Foundation that attests the contributor
has sufficient rights to make the contribution.

Pull Requests without DCO certifications will not be accepted by the Repository Manager,
and should be resubmitted with certification included.

The required Pull Request text is as follows:	

	The entire content of this Pull Request complies with
	the Linux Developer Certificate of Origin, the text of which is at
	https://developercertificate.org/. <Full name> <email>

## Submission Contents
For your first submission, you'll need to create your submission folder.  Please build it in the format described above.  Otherwise, the submission should simply contain the material to be included in your contribution folder.