---
---

# Welcome to InfoLab!

InfoLab is a research group pushing the boundaries of **security** and **machine learning**, with a particular focus on their applications in **bioinformatics** and **biomedical discovery**. We specialize in both developing and applying state-of-the-art computational tools to solve complex, real-world problems.
We are part of the [College of Computing and Informatics](https://sw.skku.edu/eng_sw/index.do) at [Sungkyunkwan University (SKKU)](https://www.skku.edu/eng/). Lab members lead cutting-edge research across a range of disciplines, including **biomedical informatics**, **information security**, and **AI-powered analytics**.

{% include section.html %}

## Our Projects
{% include project-carousel.html %}

{% include section.html %}

{% capture col1 %}
## Our news

  {% assign sorted_news = site.data.news | sort: "date" | reverse %}
    {% for post in sorted_news limit:5 %}
    
  <div class="news-card">
    <div class="news-header">
        <span class="news-title">{{ post.title }}</span>
        <span class="news-date">{% include icon.html icon="fa-regular fa-calendar" %} {{ post.date | date: "%B %d, %Y" }} </span>
    </div>
    <div class="news-description">
        {{ post.description }} 
            {% if post.url %}
            <a href="{{ post.url }}" target="_blank">More...</a>
            {% endif %}
    </div>
  </div>

    {% endfor %}  
  
{%
  include button.html
  link="news"
  text="Read all news"
  icon="fa-solid fa-arrow-right"
  flip=true
  align=left
%}

{% endcapture %}

{% include cols.html col1=col1 %}

{% include section.html %}

{% capture text %}

A great way to explore our work is through our publications. Browse or search our full list of research outputs to learn more about what we do.

{%
  include button.html
  link="pubs"
  text="See our publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/gallery/AR402001.jpg"
  link="pubs"
  title="Our Publications"
  flip=true
  text=text
%}

{% capture text %}

Our team includes graduate students, postdoctoral researchers, programmers, and staff, with diverse backgrounds in experimental biology, computer science, and bioinformatics. Come meet the people behind the research!

{%
  include button.html
  link="team"
  text="Meet the team"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/gallery/2025/WhatsApp Image 2025-04-24 at 7.24.29 PM.jpeg"
  link="team"
  title="Our Team"
  text=text
%}

{% include section.html %}

<center>
<!-- Generated from https://shiny.rcg.sfu.ca/u/rdmorin/pubmedcloud3/ -->
<img src="../images/gallery/amir-graduation.jpeg" alt="A word cloud of publication titles" style="width:100%"/>
</center>
{%
  include button.html
  icon="fa-solid fa-door-open"
  text="Join us"
  link="/team/join"
%}
{% include section.html %}

#### Our funders


{% capture col1 %}
<img src="images/skku-logo.png">
{% endcapture %}

{% capture col2 %}
<img src="images/msit-logo.png">
{% endcapture %}

{% capture col3 %}
<img src="images/nrf-logo2.png">
{% endcapture %}


{% include cols.html col1=col1 col2=col2 col3=col3%}