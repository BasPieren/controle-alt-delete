var controller = new ScrollMagic.Controller()

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
