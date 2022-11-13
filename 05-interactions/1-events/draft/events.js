async function createEvent() {
  const rectColors = [
    "yellowgreen",
    "cornflowerblue",
    "seagreen",
    "slateblue",
  ]

  // create and bind data to our rects
  const rects = d3.select("#svg")
    .selectAll(".rect")
    .data(rectColors)
    .enter().append("rect")
      .attr("height", 100)
      .attr("width", 100)
      .attr("x", (d,i) => i * 110)
      .attr("fill", "lightgrey")

  rects.on("mouseenter", function (e, datum) {
    d3.select(e.target).style("fill", datum);
  })
    .on("mouseleave", function (e) {
      d3.select(e.target).style("fill", "lightgrey")
    })

  setTimeout(() => {
    rects
      .dispatch("mouseleave")
      .on("mouseenter", null)
      .on("mouseleave", null)
  }, 3000)

}
createEvent()
