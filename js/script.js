/* ------ SOURCES
http://lucidworks.com/darkdata/
https://beta.observablehq.com/@mbostock/d3-bar-chart
Jesse Dijkman
------ */

;(function() {
  var controller = new ScrollMagic.Controller()

  /* --------------------- SECTION FADE IN --------------------- */

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

  /* --------------------- TYPE ANIMATION --------------------- */

  function typedAnimation() {
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
  }
  typedAnimation()

  /* --------------------- TOTAL POPULATION ANIMATION --------------------- */

  function populationTotal() {
    var tween = TweenMax.from('.cad-population-icon', 1, {
      scale: 0,
      ease: Linear.easeNone
    })

    var scene = new ScrollMagic.Scene({
      triggerElement: '#cad-page-2',
      duration: 250
    })
      .setTween(tween)
      .addTo(controller)
  }
  populationTotal()

  /* --------------------- HORIZONTAL BAR ANIMATION --------------------- */

  function horizontalBar() {
    const horizontalBar = document.getElementsByClassName(
      'cad-horizontal-container'
    )

    for (var i = 0; i < horizontalBar.length; i++) {
      // START USE OF SOURCE: Jesse Dijkman
      for (let c in horizontalBar[i].children) {
        if (horizontalBar[i].children[c].nodeName === 'DIV') {
          var tween = TweenMax.from(horizontalBar[i].children[c], 1, {
            width: 0,
            ease: Linear.easeNone
          })

          var scene = new ScrollMagic.Scene({
            triggerElement: horizontalBar[i],
            offset: -100,
            duration: 250
          })
            .setTween(tween)
            .addTo(controller)
        }
        // END USE OF SOURCE: Jesse Dijkman
      }
    }
  }
  horizontalBar()

  /* --------------------- INCIDENTS PER YEAR CHART (D3) --------------------- */

  function incidentsYears() {
    const dataArrayIncidents = [
      {
        name: 2014,
        value: 10.924
      },
      {
        name: 2015,
        value: 12.321
      },
      {
        name: 2016,
        value: 9.671
      },
      {
        name: 2017,
        value: 8.886
      }
    ]

    // START USE OF SOURCE: https://beta.observablehq.com/@mbostock/d3-bar-chart
    var data = dataArrayIncidents
      .slice()
      .map(({ name, value }) => ({ name: name, value: value }))

    var height = 450
    var width = 272
    var margin = { top: 20, right: 0, bottom: 30, left: 0 }

    var svg = d3
      .select('#cad-incidents-chart')
      .append('svg')
      .attr('width', width + margin.right + margin.left)
      .attr('height', height)

    var x = d3
      .scaleBand()
      .domain(data.map(d => d.name))
      .range([margin.left, width - margin.right])
      .padding(0.4)

    var xAxis = g =>
      g
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0))
        .attr('font-family', 'Staatliches', 'sans-serif')
        .attr('font-size', '1.3em')
        .attr('color', '#d32422')

    var y = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([height - margin.bottom, margin.top])

    svg
      .append('g')
      .attr('fill', '#fff33d')
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => x(d.name))
      .attr('y', d => y(d.value))
      .attr('height', d => y(0) - y(d.value))
      .attr('width', x.bandwidth())

    svg
      .append('g')
      .attr('fill', '#ffffff')
      .attr('text-align', 'center')
      .style('font', '0.8em Open Sans')
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('x', d => x(d.name))
      .attr('y', d => y(d.value) - 10)
      .attr('dy', '0.35em')
      .text(d => d.value)

    svg.append('g').call(xAxis)
    // END USE OF SOURCE: https://beta.observablehq.com/@mbostock/d3-bar-chart
  }
  incidentsYears()

  /* --------------------- INCIDENTS PER YEAR ANIMATION --------------------- */

  function incidentsYearsAni() {
    var tween = TweenMax.from('#cad-incidents-chart > svg > g > rect', 1, {
      height: 0,
      ease: Linear.easeNone
    })

    var scene = new ScrollMagic.Scene({
      triggerElement: '#cad-page-17',
      duration: 300
    })
      .setTween(tween)
      .addTo(controller)
  }
  incidentsYearsAni()
})()
