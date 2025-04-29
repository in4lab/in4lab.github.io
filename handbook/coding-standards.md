---
title: Coding Standards
---
{% include breadcrumbs.html %}

# {% include icon.html icon="fa-solid fa-code" %}Coding standards


### Python

New projects should be started in Python 3 (unless there are noncompatible dependencies)
Use Flake 8 for good coding style

We typically allow for relaxed “max-line-length” restriction (default is 79). You can
use this in your “flake8” settings:

```
[flake8]
max-line-length = 160
```

You can find the information here about [where to put this “flake8” config file](http://flake8.pycqa.org/en/latest/user/configuration.html#configuration-locations).


