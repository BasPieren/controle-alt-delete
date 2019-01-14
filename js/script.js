const minWindowSize = window.matchMedia('(min-width:1024px)')

if (minWindowSize.matches) {
  var controller = new ScrollMagic.Controller()

  var sceneHome = new ScrollMagic.Scene({
    offset: 10,
    duration: 500
  })
    .setTween('#cad-page-1', { opacity: 0 })
    .addTo(controller)

  var timelineHome = new TimelineMax()

  var tween1 = TweenMax.to('#cad-page-1 > header', 2, {
    position: 'relative',
    bottom: 100
  })

  var tween2 = TweenMax.to('#cad-page-1 > h3', 2, {
    position: 'relative',
    bottom: 100
  })

  var tween3 = TweenMax.to('#cad-page-1 > p', 2, {
    position: 'relative',
    bottom: 100
  })

  var sceneHome2 = new ScrollMagic.Scene({
    offset: 30,
    duration: 300
  })

  timelineHome.add(tween1).add(tween2).add(tween3)
  sceneHome2
    .setTween(timelineHome)
    .addTo(controller)
}
