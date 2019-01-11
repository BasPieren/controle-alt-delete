var controller = new ScrollMagic.Controller()

function homeOpacityAni() {
  var sceneHome = new ScrollMagic.Scene({
    offset: 10,
    duration: 500
  })
    .setTween('#cad-page-1', { opacity: 0 })
    .addTo(controller)
}

function homeTopAni() {
  var timelineHome = new TimelineMax()

  var tween1 = TweenMax.to('#cad-page-1 > header', 2, {
    position: 'relative',
    bottom: 100
  })

  var tween2 = TweenMax.to('#cad-page-1 > p', 2, {
    position: 'relative',
    bottom: 100
  })

  var sceneHome2 = new ScrollMagic.Scene({
    offset: 30,
    duration: 300
  })

  timelineHome.add(tween1).add(tween2)
  sceneHome2
    .setTween(timelineHome)
    .addIndicators({ name: 'loop' })
    .addTo(controller)
}

function page2OpacityAni() {
  var scene2 = new ScrollMagic.Scene({
    offset: 100,
    duration: 500
  })
    .setTween('#cad-page-2', { opacity: 1 })
    .addTo(controller)
}

homeOpacityAni()
homeTopAni()
page2OpacityAni()
