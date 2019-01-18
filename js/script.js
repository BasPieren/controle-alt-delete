var controller = new ScrollMagic.Controller()

function sectionFadeIn() {
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
}

sectionFadeIn()

function populationTotal() {
  var tween = TweenMax.from('.cad-population-icon', 1, {
    scale: 0,
    ease: Linear.easeNone
  })

  var scene = new ScrollMagic.Scene({
    triggerElement: '#cad-page-2',
    duration: 300
  })
    .setTween(tween)
    .addTo(controller)
}

populationTotal()

function populationUnit() {
  var tween = TweenMax.from('.cad-horizontal-population', 1, {
    width: 0,
    ease: Linear.easeNone
  })

  var scene = new ScrollMagic.Scene({
    triggerElement: '#cad-page-7',
    duration: 300
  })
    .setTween(tween)
    .addTo(controller)
}

populationUnit()
