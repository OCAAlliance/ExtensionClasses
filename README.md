# OCA Alliance Extension Classes

## Legal Notices

### License for Use

This project is licensed under the 0BSD License - the file [LICENSE.txt](LICENSE.txt) contains a copy of it.

### Indemnification

Software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

### OCA Alliance Open Source Guidelines

Full guidelines for use of and contribution to OCA Alliance open-source software projects are here: [https://ocaalliance.github.io/opensource.html](https://ocaalliance.github.io/opensource.html).

## Technical Information

### Structure of this repository

This repository has the following structure:
```
Folder or File                        Contents
----------------------------------------------------------
contributions                         Contribution folders
contributions/[contributorName(1)]    Contribution folder
   ...	 	
contributions/[contributorName(n)]    Contribution folder 				 
 					
LICENSE.txt           Copy of software license	
README.md             Readme file
schema                Directory containing schema utilities
schema/schema.json    JSON Schema for the class descriptor
----------------------------------------------------------
```
### Contribution folders

Each contributor has their own folder.  The folder's name is the name of the entity that owns the content - an organization or an individual - or a reasonable short form of that name.

Contribution folder contents should be as follows:
```
Folder or File                 Contents
---------------------------------------------------------------------------
File(1)                        Class Descriptor or other file or subfolder
...
File(n)                        Class Descriptor or other file or subfolder

README.md                      Readme file - see below
--------------------------------------------------------------------------
```
In general, the contents of a contribution folder may be structured in whatever way is appropriate for the contributed material.  Content may include Class Descriptors, the README file, other files, and subfolders.

### Class Descriptors

A class Descriptor is a file in JSON format that describes one or more AES70 classes or datatypes.  A JSON schema that defines this format is on this repository's home page, **[here](schema/schema.json)**.

### README File

Each contribution README file should begin with information that appropriately identifies the contribution's owner and submitter. Suggested information items include:

- Name of contributor (organization or individual)
- Name of submitter, if different from above
- Contact information - email, phone, etcetera
- Website URL(s), if applicable

The file should describe the contributed content in appropriate detail and/or point to detailed online documentation.

### Other Files
The contribution folder can contain other relevant files - documentation, data, whatever. However, the inclusion of large files - videos, for example - is discouraged.  Please provide links to such files instead.

### Subfolders
The contribution folder may contain subfolders as required.

## How To Contribute
Contributions are welcomed and encouraged.  Anyone may contribute to this project by submitting a Git Pull Request to the project's repository.  No prior authorization is required.  

### Developer Certificate of Origin 

The comments field of every submitted Pull Request must contain a brief text that certifies the contributed content complies with the terms of the Developer's Certificate of Origin (DCO), a simple document written by the Linux Foundation that attests the contributor has sufficient rights to make the contribution.  A copy of it is in the file [DCO.txt](DCO.txt).

Pull Requests without DCO certifications will not be accepted by the Repository Manager, and should be resubmitted with certification included.

The required Pull Request text is as follows:	

	The entire content of this Pull Request complies with 	the Linux Developer Certificate of Origin, the text of which is at 	https://developercertificate.org/. <Full name> <email>

### Submission Contents
For your first submission, you'll need to create your submission folder.  Please build it in the format described above.  Otherwise, the submission should simply contain the material to be included in your contribution folder.  

Don't forget to include the Developer's Certificate of Origin in your Pull Request comments.

Thanks for your support of the OCA Ecosystem.