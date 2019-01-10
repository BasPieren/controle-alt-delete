var controller = new ScrollMagic.Controller();

var sceneHome = new ScrollMagic.Scene({
  offset: 70,
  duration: 500
})
.setTween('#cad-page-1', {opacity: 0})
.addTo(controller);

var scene2 = new ScrollMagic.Scene({
  offset: 100,
  duration: 500
})
.setTween('#cad-page-2', {opacity: 1})
.addTo(controller);
