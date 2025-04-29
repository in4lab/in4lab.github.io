---
title: Contact
nav:
  order: 7
  tooltip: Contact information
---

# {% include icon.html icon="fa-regular fa-envelope" %} Contact

InfoLab is a part of the College of Computing and Informatics, Sungkyunkwan University (SKKU), and members of the Lab are leading research activities in several areas of biomedical and information security.

---

## Contact Information

### Email
{%
  include button.html
  type="email"
  text="tamer AT skku DOT edu"
  link="tamer@skku.edu"
%}

<!-- Uncomment the following block if you want to include phone contact -->
<!--
### Phone
{%
  include button.html
  type="phone"
  text="(555) 867-5309"
  link="+1-555-867-5309"
%}
-->

---

## Location

<div style="width: 100%">
  <iframe 
    width="100%" 
    height="600" 
    frameborder="0" 
    scrolling="no" 
    marginheight="0" 
    marginwidth="0" 
    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Hwasan-ro,%20Yulcheon-dong,%20Jangan-gu,%20Suwon-si,%20Gyeonggi-do+(Infolab)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
    <a href="https://www.gps.ie/collections/personal-trackers/">gps trackers</a>
  </iframe>
</div>

---

## Gallery

### Campus and Research Facilities

{% include section.html %}

#### Row 1
{% capture col1 %}
{%
  include figure.html
  image="images/gallery/AR401894.jpg"
  width="300px"
%}
{% endcapture %}

{% capture col2 %}
{%
  include figure.html
  image="images/scripps_skaggs.jpg"
%}
{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

#### Row 2
{% capture col3 %}
{%
  include figure.html
  image="images/1600w_la_jolla_campus_09.jpg"
%}
{% endcapture %}

{% capture col4 %}
{%
  include figure.html
  image="images/skku.jpg"
%}
{% endcapture %}

{% include cols.html col1=col3 col2=col4 %}
