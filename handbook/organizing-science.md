---
title: Organizing Science Projects
---

{% include breadcrumbs.html %}

# {% include icon.html icon="fa-solid fa-sitemap" %}Organizing Science Projects

Reproducibility of published scientific findings is key.  Andrew will “audit” code, figures and data files before we submit for publication, so best to get started on the right foot.

Every project (no matter how small) should have its own directory.  Minimally, the root directory should contain a README file containing basic information on the project, as well as subdirectories for :

> `/src` — source code
> 
> `/data` — input data files (directly from the source, never to be changed)
> 
> `/results` — resulting output files

Additional suggested directories include:

> `/docs` — documentation
> 
> `/figures`
>
> `/temp` — temporary files

More suggestions on how to organize bioinformatics projects can be found at:

* [A Quick Guide to Organizing Computational Biology Projects](http://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1000424)
* [How Do You Manage Your Files & Directories For Your Projects?](https://www.biostars.org/p/821/)

All code should be versioned using git and regularly checked in at [Github/sulab](https://github.com/SuLab/) (or related repo). Ask Andrew to be added to the team/organization.

Use of [Jupyter](https://jupyter.org/) and/or [R](https://bookdown.org/yihui/rmarkdown/notebook.html) notebooks is encouraged.
