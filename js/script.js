var controller = new ScrollMagic.Controller()

$('.cad-fade-in').each(function() {

  var tween = TweenMax.from($(this), 0.6, {
    opacity: 0,
    ease: Linear.easeNone
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: this
  })
  .setTween(tween)
  .addTo(controller);

});
