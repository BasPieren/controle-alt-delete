# Controle Alt Delete | Buiten je Boekje 👮

This is the repo for the Controle Alt Delete project.

![Controle Alt Delete Screenshot](images/frontend-data-screenshot.png)

## Table of Contents 🗃
* [To Do](#to-do-)
* [Description](#description-)
* [Installing](#installing-)
  * [Packages and technologies](#packages-and-technologies)
* [Javascript explanation](#javascript-explanation-)
* [Sources](#sources-)
  * [Honourable mentions](#honourable-mentions)
* [Licence](#licence-)

## To Do 📌
This is a list of things in want to do in this project:
- [X] Use ScrollMagic to create a cool scrolling effects.
- [X] Use Typed to create typing animations.
- [ ] Create all data visualisations using D3.
- [ ] Optimize the webpage for both mobile and desktop.

## Description 📝
During this project I made a mobile first scrollytelling webpage using D3.js, ScrollMagic.js and Typed.js. The webpage focuses on telling the story of excessive police brutality in the Netherlands to the user using data provided by the police and Controle Alt Delete.

## Installing 🔍
To install this application enter the following into your terminal:
```
git clone https://github.com/BasPieren/controle-alt-delete.git

cd controle-alt-delete
```

### Packages and technologies
This project makes use of the following packages and technologies:

* [D3](https://d3js.org/)
* [ScrollMagic](http://scrollmagic.io/)
* [Typed](https://mattboldt.com/demos/typed-js/)
* [Prettier](https://www.npmjs.com/package/prettier)

## Javascript explanation ⚙️
Here I will explain some of the key elements used in creation of some of the animations.

### ScrollMagic
ScrollMagic allows you to trigger animations when the user reaches a certain part of the screen. Here I use it to fade in every section when the user reaches a `.cad-fade-in` section.

We loop through all the `.cad-fade-in` classes and tell the animation tween that that the div goes from an opacity of 0 to 1 which is the default value.

Then we also use the classes as trigger elements so that the animation plays when the user reaches each section on the page.

```js
const classFadeIn = document.getElementsByClassName('cad-fade-in')

for (var i = 0; i < classFadeIn.length; i++) {
  var tween = TweenMax.from(classFadeIn[i], 0.5, {
    opacity: 0,
    ease: Linear.easeNone
  })

  var scene = new ScrollMagic.Scene({
    triggerElement: classFadeIn[i]
  })
    .setTween(tween)
    .addTo(controller)
}
```

### Typed

```js
var scene = new ScrollMagic.Scene({
  triggerElement: '#cad-page-2',
  reverse: false
})
  // START USE OF SOURCE: http://lucidworks.com/darkdata/
  .on('start', function() {
    var typed = new Typed('.cad-typed', {
      strings: ['17.291.396'],
      typeSpeed: 125,
      showCursor: false
    })
  })
  // END USE OF SOURCE: http://lucidworks.com/darkdata/
  .addTo(controller)
```

## Sources 📚
* [Lucidworks: The Data That Lies Beneath](http://lucidworks.com/darkdata/)
* [D3 multi line chart](https://beta.observablehq.com/@mbostock/d3-bar-chart)

### Honourable mentions
* [Help from Jesse Dijkman](https://github.com/jesseDijkman1)

## Licence 🔓
MIT © [Bas Pieren](https://github.com/BasPieren)
