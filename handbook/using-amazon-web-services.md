---
title: Using Amazon web services
---
{% include breadcrumbs.html %}

# {% include icon.html icon="fa-brands fa-aws" %}Using Amazon Web Services

### Should I use AWS?

We typically use AWS for production servers (need to be accessible anytime by others from outside). If you just need a development server, consider using our existing internal servers within the intranet (ping others on slack if you need more assistance).

If you do have a non-production servers up-running on AWS, and typically used by you only, please stop the instance when you are not using it. You can do that in either AWS management console or using a script.

### How to request a new instance

Send Andrew and/or Chunlei the following information

* your public SSH key (If you don’t have your ssh key yet, follow [this guide](https://www.siteground.com/kb/generate_ssh_key_in_linux/) to create one first. This guide applies to terminals under Linux, Mac OS and Window Linux subsystem (WSL). Keep your private key, but send your public key only.)

* your desired OS (need to justify if it’s something other than the latest Ubuntu Server LTS release)

### Notes for Andrew and Chunlei

#### Which region I should start a new instance?
Here is a general project distribution for several commonly used AWS EC2 regions:
* us-west-1/N. California
    * BioGPS only (do not create new instances there)
* us-west-2/Oregon
    * BioThings, SmartAPI
    * Mark2cure
* us-east-2/Ohio
    * GeneWiki
    * ChlamBase
* us-east-1/N. Virginia (default region for new projects)
    * Drug repurposing
    * CVISB
    * Scientific Games
    * other projects


#### Default OS
Unless specifically needed, we default to use the latest 64bit Ubuntu server LTS AMI image (currently “Ubuntu Server 18.04 LTS (HVM)”)

#### Tagging

“Name” (required) – in a pattern like “<name>_<project>*” (e.g. “asu_cvisb”, “asu_cvisb_web”, “asu_cvisb_data” etc)
“Description” (recommended) – add more descriptive text for what is this instance used for

#### Security Group:

Recommend to create a specific or project-wide security group policy (naming is as “<project>_sg”)
Can combine multiple security groups (e.g. both “<project>_sg” and generic ones like (“open_22_port”, “scripps_ssh_access_sg” etc)

#### VPC

Always recommend launching instances within a VPC
A large project (requires >3 instances, often with between instance communications) should create its own VPC
The other projects can launch in an existing general-purpose VPC

#### Key

Recommend to create project-specific key files (“smartapi.pem” or “smartapi_prod.pem”-“smartapi_dev.pem” pairs)
The generated key file (the private key) should be stored in LastPass shared between Andrew and Chunlei