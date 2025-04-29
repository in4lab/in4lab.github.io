---
title: Contact
nav:
  order: 7
  tooltip: Contact information
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

InfoLab is a part of the College of Computing and Informatics, Sungkyunkwan University (SKKU), and members of the Lab are leading research activities in several areas of biomedical and information security.

    
{%
  include figure.html
  image="images/gallery/AR401894.jpg"
  width="300px"

%}

{%
  include button.html
  type="email"
  text="tamer AT skku DOT edu"
  link="tamer@skku.edu"
%}
<!--
{%
  include button.html
  type="phone"
  text="(555) 867-5309"
  link="+1-555-867-5309"
%}
-->
{%
  include button.html
  type="address"
  tooltip="Our location on Google Maps for easy navigation"
  link="https://maps.app.goo.gl/q38WE96JXtx5wSny9"
%}


{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/scripps_skaggs.jpg"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/1600w_la_jolla_campus_09.jpg"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% capture col3 %}

{%
  include figure.html
  image="images/1000014768.jpg"
%}

{% endcapture %}

{% capture col4 %}

{%
  include figure.html
  image="images/skku.jpg"
%}

{% endcapture %}


{% include cols.html col1=col3 col2=col4 %}
