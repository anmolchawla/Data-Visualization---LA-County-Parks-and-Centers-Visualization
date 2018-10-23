
var maps = function(files){
	 var data = files[0];
	 var countries_pop = files[1];

	var margin = {top: 50,left: 50, right:50,bottom: 50},
				 height = 400 - margin.top - margin.bottom,
				 width = 800 - margin.left - margin.right;


		

	var svg = d3.select("#canva")
				.append("svg")
				.attr("height",height + margin.top + margin.bottom)
				.attr("width",width + margin.left + margin.right)
				.append('g')
				.attr("transform","translate(" + margin.left + "," + margin.top + ")");
		
	 
	var countries = topojson.feature(data, data.objects.countries).features

	//console.log(countries);

	var projection = d3.geoMercator()
					   .translate([width/2,height/2])
					   .scale(110)
	

	var path = d3.geoPath()
	             .projection(projection)
	

	svg.selectAll(".country")
	   .data(countries)
	   .enter()
	   .append("path")
	   .attr("class","country")
	   .attr("d", path);

	//console.log(countries_pop);

	svg.selectAll(".city_circles")
	   .data(countries_pop)
	   .enter()
	   .append("circle")
	   .attr("r", function(d){
		   return d.Rural_Population*0.1;
	   })
	   .attr("cx",function(d){
		   var cords = projection([d.Long, d.lat]);
		   //console.log(cords);
		   return cords[0];
	   })
	   .attr("cy",function(d){
		var cords = projection([d.Long, d.lat]);
		   return cords[1];
	   });


	//    svg.selectAll(".city-labels")
	// 	  .data(countries_pop)
	// 	  .enter()
	// 	  .append("text")
	// 	  .attr("class","city-labels")
	// 	  .attr("x",function(d){
	// 		var cords = projection([d.Long, d.lat]);
	// 		console.log(cords);
	// 		return cords[0];
	// 		})
	// 		.attr("y",function(d){
	// 		var cords = projection([d.Long, d.lat]);
	// 			return cords[1];
	// 		})
	// 		.text(function(d){
	// 			return d.Country_Name;
	// 		});
 



	  
			//  var cities=[
			// 	  {"code":"ZNZ", "city":"ZANZIBAR", "country":"TANZANIA", "lat":-6.13, "lon":39.31},
			// 	  {"code":"TYO", "city":"TOKYO", "country":"JAPAN", "lat":35.68, "lon":139.76},
			// 	  {"code":"AKL", "city":"AUCKLAND", "country":"NEW ZEALAND", "lat":-36.85, "lon":174.78},
			// 	  {"code":"BKK", "city":"BANGKOK", "country":"THAILAND", "lat":13.75, "lon":100.48},
			// 	  {"code":"DEL", "city":"DELHI", "country":"INDIA", "lat":29.01, "lon":77.38},
			// 	  {"code":"SIN", "city":"SINGAPORE", "country":"SINGAPOR", "lat":1.36, "lon":103.75},
			// 	  {"code":"BSB", "city":"BRASILIA", "country":"BRAZIL", "lat":-15.67, "lon":-47.43},
			// 	  {"code":"RIO", "city":"RIO DE JANEIRO", "country":"BRAZIL", "lat":-22.9, "lon":-43.24},
			// 	  {"code":"YTO", "city":"TORONTO", "country":"CANADA", "lat":43.64, "lon":-79.4},
			// 	  {"code":"IPC", "city":"EASTER ISLAND", "country":"CHILE", "lat":-27.11, "lon":-109.36},
			// 	  {"code":"SEA", "city":"SEATTLE", "country":"USA", "lat":47.61, "lon":-122.33},
			// 	  {"code":"LON", "city":"LONDON", "country":"UK", "lat":51.5072, "lon":-0.1275}
			// 	]; 
				
			
				
				

					
			   
				
			// 	var path = d3.geoPath().projection(projection);
				
			// 	var g = svg.append("g");

               
				
			
				
			// 	var world = g.selectAll("path")
			// 					.data(data.objects.countries.geometries)
			// 					.enter()
			// 					.append("path")
			// 					.attr("d", path)
				
			// 	console.log("here");
			// 	// // add city location circles
			// 	var locations = g.selectAll("circle")
			// 					   .data(cities)
			// 					   .enter()
			// 					   .append("circle")
			// 					   .attr("cx", function(d) {return projection([d.lon, d.lat])[0];})
			// 					   .attr("cy", function(d) {return projection([d.lon, d.lat])[1];})
			// 					   .attr("r", 5)
			// 					   .style("fill", "red")
			// 					   .style("opacity", 0.6);
					
		
				  
				
				
			// 	// //zoom and pan functionality
			// 	// var zoom = d3.behavior.zoom()
			// 	// 	.on("zoom",function() {
			// 	// 		g.attr("transform","translate("+ 
			// 	// 			d3.event.translate.join(",")+")scale("+d3.event.scale+")");
			// 	// 		g.selectAll("path")  
			// 	// 			.attr("d", path.projection(projection)); 
			// 	//   });
			// 	// svg.call(zoom);





return ;
}

var maps1 = function(files){
	var data = files[0];
	var countries_pop = files[1];

   var margin = {top: 50,left: 50, right:50,bottom: 50},
				height = 400 - margin.top - margin.bottom,
				width = 800 - margin.left - margin.right;


	   

   var svg = d3.select("#canva1")
			   .append("svg")
			   .attr("height",height + margin.top + margin.bottom)
			   .attr("width",width + margin.left + margin.right)
			   .append('g')
			   .attr("transform","translate(" + margin.left + "," + margin.top + ")");
	   
	
   var countries = topojson.feature(data, data.objects.countries).features

   console.log(countries);

   var projection = d3.geoMercator()
					  .translate([width/2,height/2])
					  .scale(110)
   

   var path = d3.geoPath()
				.projection(projection)
   

   svg.selectAll(".country")
	  .data(countries)
	  .enter()
	  .append("path")
	  .attr("class","country")
	  //.attr("fill", d => console.log(color[0]))
	  .attr("d", path);
	//   .attr("fill", d => color(data.get(d.id)))
	//   .append("title")
	//   .text(d => format(data.get(d.id)));


	// svg.append("g")
	//   .selectAll("path")
	//   .data(topojson.feature(us, us.objects.counties).features)
	//   .enter().append("path")
	// 	.attr("fill", d => color(data.get(d.id)))
	// 	.attr("d", path)
	//   .append("title")
	// 	.text(d => format(data.get(d.id)));
  



   var format = d3.format("")
   var color = d3.scaleQuantize()
                 .domain([1, 10])
                 .range(d3.schemeBlues[9])
   var x = d3.scaleLinear()
             .domain(d3.extent(color.domain()))
             .rangeRound([600, 860]);

 

   var g = svg.append("g").attr("transform", "translate(-650,300)");

  g.selectAll("rect")
    .data(color.range().map(d => color.invertExtent(d)))
    .enter().append("rect")
	.attr("height", 8)
	.attr("x", d => x(d[0]))
	.attr("width", d => x(d[1]) - x(d[0]))
	.attr("fill", d => color(d[0]));
	  

  g.append("text")
      .attr("class", "caption")
      .attr("x", x.range()[0])
      .attr("y", -6)
      .attr("fill", "#000")
      .attr("text-anchor", "start")
      .attr("font-weight", "bold")
      .text("Rurla Population %");

  g.call(d3.axisBottom(x)
      .tickSize(13)
      .tickFormat(format)
      .tickValues(color.range().slice(1).map(d => color.invertExtent(d)[0])))
      .select(".domain")
      .remove();

   




return ;
}


var maps2 = function(files){
	var data = files[2];

   var margin = {top: 50,left: 50, right:50,bottom: 50},
				height = 400 - margin.top - margin.bottom,
				width = 800 - margin.left - margin.right;


	   

   var svg = d3.select("#canva2")
			   .append("svg")
			   .attr("height",height + margin.top + margin.bottom)
			   .attr("width",width + margin.left + margin.right)
			   .append('g')
			   .attr("transform","translate(" + margin.left + "," + margin.top + ")");

			   

	
   var countries = topojson.feature(data, data.objects['City Boundaries']).features

  console.log(countries);

   var projection = d3.geoMercator()
					  .translate([width/2,height/2])
					  .scale(150);
   

   var path = d3.geoPath()
				.projection(projection)
   

   svg.selectAll(".county")
	  .data(countries)
	  .enter()
	  .append("path")
	  .attr("class","county")
	  .attr("d", path);
return ;
}

Promise.all([
	d3.json("world.topojson"),
	d3.csv("world.csv"),
	d3.json("LA.topojson")
]).then(function (files) { 
  //console.log(data);
  maps(files);
  maps1(files);
  maps2(files);
});

