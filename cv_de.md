---
lang: de
---

```
{{ site.data.contact.name}}
{{ site.data.contact.address}}

{{ site.data.contact.phone}}
{{ site.data.contact.email}}
```
{% for content in site.data.hero %}
{% if content.lang == page.lang %}
<img src="{{ content.banner_image_source }}" alt="drawing" width="100"/>
# {{content.name}} 
## {{content.profession}}

{% capture my_include %}{% include {{content.description_filename}} %}{% endcapture %}

{{ my_include | markdownify }}


## Erfahrung

{% capture my_include %}{% include experience_text.md %}{% endcapture %}
{{ my_include | markdownify }}

### Berufliche Laufbahn

{% for timeline in site.data.timelines %}
{% if  timeline.type == 'Experience' and timeline.lang == page.lang %}

- {{ timeline.year }}: **{{ timeline.title}}**, *{{ timeline.institute}}*   
  {{timeline.description}}

{% endif %}
{% endfor %}

### Ausbildung

{% for timeline in site.data.timelines %}
{% if  timeline.type == 'Education' and timeline.lang == page.lang %}

- {{ timeline.year }}: **{{ timeline.title}}**, *{{ timeline.institute}}*   
  {{timeline.description}}


{% endif %}
{% endfor %}

{% endif %}
{% endfor %}


## Projekte

{% for project in site.data.projects %}
{% if project.lang == page.lang %}

### {{ project.title }}

Zeitraum: {{ project.year }}
{% if project.institute %}

Auftraggeber: {{ project.institute}}
{% endif %}

*{{ project.description }}*

{{ project.description_long }}

{% if project.tasks %}
Aufgaben:
{% for task in project.tasks %}
  * {{ task }}  
{% endfor %}
{% endif %}

{% if project.tools %}
Werkzeuge:
{% for tool in project.tools %}
  * {{ tool }}  
{% endfor %}
{% endif %}

  


{% endif %}

{% endfor %}



