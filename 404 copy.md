---
title: 404
permalink: /404.html
---

## {% include icon.html icon="fa-solid fa-heart-crack" %} Page Not Found

<p id="requested-url"></p>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    var path = window.location.pathname;
    var baseURL = 'https://archive.sulab.org';

    if (path.startsWith("/wp-content")) {
      // redirect to archive.sulab.org
      var newUrl = baseURL + path;
      window.location.href = newUrl;
    } else {
      // display a suggested link to archive.sulab.org
      var requestedURL = baseURL + path;
      document.getElementById('requested-url').innerHTML = 'Perhaps check this link on our archive site?: <a href="' + requestedURL + '">' + requestedURL + '</a>';
    }
  });
</script>

Or try searching the whole site for the content you want:
{:.center}

{% include site-search.html %}
