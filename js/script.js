var controller = new ScrollMagic.Controller()

// INTRO
var sceneIntro = new ScrollMagic.Scene({
  offset: 50,
  duration: 200
})
  .setTween('#cad-intro-page *', { opacity: 0})
  .addTo(controller)

// PAGE 1
var scenePage1 = new ScrollMagic.Scene({
  offset: 225,
  duration: 200
})
  .setTween('#cad-page-1 > *', { opacity: 1 })
  .addTo(controller)

var scenePage1Out = new ScrollMagic.Scene({
  offset: 650,
  duration: 200
})
  .setTween('#cad-page-1 > *', { opacity: 0 })
  .addTo(controller)

// PAGE 2
var scenePage1 = new ScrollMagic.Scene({
  offset: 825,
  duration: 200
})
  .setTween('#cad-page-2 > *', { opacity: 1 })
  .addTo(controller)

var scenePage1Out = new ScrollMagic.Scene({
  offset: 1150,
  duration: 200
})
  .setTween('#cad-page-2 > *', { opacity: 0 })
  .addTo(controller)
