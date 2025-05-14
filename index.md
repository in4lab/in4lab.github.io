---
title: Home
---

<!-- Hero Section -->
<section id="hero" class="hero section dark-background">

  <div id="hero-carousel" data-bs-interval="5000" class="container carousel carousel-fade" data-bs-ride="carousel">

  <!-- Slide 1 -->
  <div class="carousel-item active">
    <div class="carousel-container">
      <h2 class="animate__animated animate__fadeInDown">Welcome to <span>Selecao</span></h2>
      <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
      <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
    </div>
  </div>

  <!-- Slide 2 -->
  <div class="carousel-item">
    <div class="carousel-container">
      <h2 class="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
      <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
      <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
    </div>
  </div>

  <!-- Slide 3 -->
  <div class="carousel-item">
    <div class="carousel-container">
      <h2 class="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
      <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
      <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
    </div>
  </div>

  <a class="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
  </a>

  <a class="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
  </a>

  </div>

  <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
    <defs>
      <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
    </defs>
    <g class="wave1">
      <use xlink:href="#wave-path" x="50" y="3"></use>
    </g>
    <g class="wave2">
      <use xlink:href="#wave-path" x="50" y="0"></use>
    </g>
    <g class="wave3">
      <use xlink:href="#wave-path" x="50" y="9"></use>
    </g>
  </svg>

</section><!-- /Hero Section -->


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
<img src="../images/team2.jpeg" alt="A word cloud of publication titles" style="width:100%"/>
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
