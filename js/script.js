/* ------ SOURCES
https://beta.observablehq.com/@mbostock/d3-bar-chart
------ */

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
    duration: 250
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
    triggerElement: '#cad-page-8',
    duration: 250
  })
    .setTween(tween)
    .addTo(controller)
}
populationUnit()

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

  var svg = d3.select('#cad-incidents-chart').append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height);

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
      .attr('color', '#e63b23')

  var y = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([height - margin.bottom, margin.top])

  svg
    .append('g')
    .attr('fill', '#ffd00a')
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
    .attr('fill', 'white')
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

function incidentsYearsAni() {
  var tween = TweenMax.from('#cad-incidents-chart > svg > g > rect', 1, {
    height: 0,
    ease: Linear.easeNone
  })

  var scene = new ScrollMagic.Scene({
    triggerElement: '#cad-page-12',
    duration: 300
  })
    .setTween(tween)
    .addTo(controller)
}
incidentsYearsAni()
