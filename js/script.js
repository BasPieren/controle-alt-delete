var controller = new ScrollMagic.Controller()

function sectionFadeIn() {
  const classFadeIn = document.getElementsByClassName('cad-fade-in')

  for (var i = 0; i < classFadeIn.length; i++) {
    var tweenFadeIn = TweenMax.from(classFadeIn[i], 0.5, {
      opacity: 0,
      ease: Linear.easeNone
    })

    var sceneFadeIn = new ScrollMagic.Scene({
      triggerElement: classFadeIn[i]
    })
      .setTween(tweenFadeIn)
      .addTo(controller)
  }
}

sectionFadeIn()

var tween = TweenMax.from('.cad-population-icon', 1, {
  scale: 0,
  ease: Linear.easeNone
})

var scene = new ScrollMagic.Scene({
  triggerElement: "#cad-page-2",
  duration: 300
})
	.setTween(tween)
	.addTo(controller);
