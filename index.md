---
---
<section class="hero" style="position: relative; background-image: url('images/hero.jpg'); background-size: cover; background-position: center; width: 100%; height: 100vh; overflow: hidden;">
  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5);"></div>
  
  <div class="container" style="position: relative; z-index: 1; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; color: #fff; padding: 0 20px;">
    <h1 style="font-size: 3.5rem; margin-bottom: 20px; font-weight: 700;">Welcome to InfoLab!</h1>
    <p class="lead" style="font-size: 1.3rem; max-width: 800px; margin-bottom: 20px;">
      InfoLab is a research group pushing the boundaries of <strong>security</strong> and <strong>machine learning</strong>, 
      especially in <strong>bioinformatics</strong> and <strong>biomedical discovery</strong>.
    </p>
    <p style="font-size: 1rem; margin-bottom: 30px;">
      Part of the 
      <a href="https://sw.skku.edu/eng_sw/index.do" style="color: #fff; text-decoration: underline;">College of Computing and Informatics</a> at 
      <a href="https://www.skku.edu/eng/" style="color: #fff; text-decoration: underline;">Sungkyunkwan University (SKKU)</a>.
    </p>
    <a href="#our-projects" class="button primary" style="background-color: transparent; color: white; border: 2px solid white; padding: 12px 30px; text-decoration: none; font-weight: bold; border-radius: 5px; transition: background-color 0.3s, color 0.3s;">
      Explore Our Work
    </a>
  </div>
</section>

<style>
  .hero .button.primary:hover {
    background-color: white;
    color: black;
  }

  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2.2rem;
    }

    .hero .lead {
      font-size: 1.1rem;
    }

    .hero .button.primary {
      padding: 10px 20px;
    }
  }
</style>


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
