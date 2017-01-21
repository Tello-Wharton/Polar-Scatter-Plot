



var svg = d3.select("#plot")
	.append("svg")
	.attr("width", 900)
	.attr("height", 900);

var centerX = 400;
var centerY = 400;
var radius = 400;

var points = [[100,30],[100,40]]

for (var angle = 0; angle < 360; angle+=30){

	var theta = (angle * Math.PI)/180;

	svg.append("line")
		.attr("x1", centerX)
		.attr("y1", centerY)
		.attr("x2", centerX + radius * Math.cos(theta))
		.attr("y2", centerY + radius * Math.sin(theta))
		.style("stroke","black")
		.style("stroke-width","1");

	svg.append("text")
		.text(angle + "°")
		.attr("x",20)
		.attr("y",20)
		.attr("transform", "translate(700,370) rotate(-" + angle + " -300 30)")
		.attr('fill', '#000');

}

points.forEach(function(point){

	svg.append("circle")
		.attr("cx", centerX + point[0] * Math.cos(point[1]))
		.attr("cy", centerY + point[0] * Math.sin(point[1]))
		.attr("r", 2)
		.style("stroke","blue");

});