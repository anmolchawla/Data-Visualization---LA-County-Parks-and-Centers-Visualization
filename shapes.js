function values(id){
	var hold = [];
	if (id == 76){
		hold=["Brazil",13.828]
		return hold;
	}
	else if(id == 356){
		hold=["India",66.465]
		return hold;
	}
	else if(id == 380){
		hold=["Italy",30.723]
		return hold;
	}
	else if(id == 156){
		hold=["China",42.097]
		return hold;
	}
	else if(id == 643){
		hold=["Russia",25.797]
		return hold;
	}
	else if(id == 724){
		hold=["Spain",19.976]
		return hold;
	}
	else if(id == 752){
		hold=["Switzerland",25.923]
		return hold;
	}
	else if(id == 840){
		hold=["U.S",18.04]
		return hold;
	}
	else if(id == 250){
		hold=["France",20.022]
		return hold;
	}
	else if(id == 566){
		hold=['Nigeria',50.597]
		return hold;
	}
	else{
		hold=[0,0]
		return hold;
	}

}
var maps = function(files){
	 
	 var data = files[0];
	 var countries_pop = files[1];

	var margin = {top: 50,left: 50, right:50,bottom: 50},
				 height = 600 - margin.top - margin.bottom,
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
					   .scale(120)
	

	var path = d3.geoPath().projection(projection)
	

	svg.selectAll(".country")
	   .data(countries)
	   .enter()
	   .append("path")
	   .attr("stroke-width", "1")
	   .attr("stroke","black")
	   .attr("class","country")
	   .attr("fill","#BC7920")
	   .attr("d", path);

       
	svg.selectAll(".city_circles")
	   .data(countries)
	   .enter()
	   .append("circle")
	   .attr("fill","red")
	   .attr("opacity","0.5")
	   .attr("r",function(d){return (values(d.id)[1]*0.5)} )
	   .attr('transform', function(d) { return 'translate(' + path.centroid(d) + ')'; })
	   .on("mouseover",function(d){
		d3.select(this)
		.transition()
		.attr("opacity","1")
		console.log(d.id)
		svg.append("title")
		   .text( (values(d.id))[0] + ' : ' + (values(d.id)[1]) )
		
	})
	.on("mouseout", function(d) {

		d3.select(this)
		  .transition()
		  .attr("opacity","0.5")


		  svg.select("title").remove()
	});




  svg.append("g")
     .attr("class","title")
	 .append("text")
	 .attr("y",225)
	 .attr("x",0)
	 .text("% Rural Population")

	circles = [0,20,40,60,80,100]


	svg.selectAll(".legends")
	   .data(circles)
	   .enter()
	   .append("circle")
	   .attr("r",function(d){return d*0.5;})
	   .attr("cx",function(d,i){return 20})
	   .attr("cy",function(d,i){return 200+(4*(d*0.5))})
	   .attr("fill","red")
	   .attr("opacity","0.5")

	   svg.selectAll(".legends")
	   .data(circles)
	   .enter()
	   .append("text")
	   .attr("x",function(d,i){return 9})
	   .attr("y",function(d,i){return 205+(4*(d*0.5))})
	   .text(function(d){return d})



   
	  

return ;
}

var maps1 = function(files){
	var data = files[0];
	var countries_pop = files[1];
	var format = d3.format("")
	var color = d3.scaleQuantize()
				  .domain([1, 10])
				  .range(d3.schemeBlues[9])
	var x = d3.scaleLinear()
			  .domain(d3.extent(color.domain()))
			  .rangeRound([600, 860]);



   var margin = {top: 50,left: 50, right:50,bottom: 50},
				height = 600 - margin.top - margin.bottom,
				width = 800 - margin.left - margin.right;


	   

   var svg = d3.select("#canva1")
			   .append("svg")
			   .attr("height",height + margin.top + margin.bottom)
			   .attr("width",width + margin.left + margin.right)
			   .append('g')
			   .attr("transform","translate(" + margin.left + "," + margin.top + ")");
	   
	
   var countries = topojson.feature(data, data.objects.countries).features
   //console.log("below for world");
   //console.log(countries);

   var projection = d3.geoMercator()
					  .translate([width/2,height/2])
					  .scale(110)
   

   var path = d3.geoPath()
				.projection(projection)
   
//console.log(countries);

   svg.selectAll(".country")
	  .data(countries)
	  .enter()
	  .append("path")
	  .attr("class","country")
	  .attr("d", path)
	  .attr("stroke-width", "1")
	  .attr("stroke","black")
	  .attr("fill","white")


	  svg.selectAll(".country")
		  .data(countries)
		  .attr("fill",function(d,i){return color(values(d.id)[1]*0.1)     })
	       .on("mouseover",function(d){
			   if (values(d.id)[1] != 0){
				svg.append("title")
				.text( (values(d.id))[0] + ' : ' + (values(d.id)[1]) )
				// svg.append("g")
				// .attr("class","names")
				// .append('text')
				// .style("fill","red")
				// .style("font-weight", "bold")
				// .attr('transform', 'translate(' + path.centroid(d) + ')')
				// .attr('dy', '.35em')
				// .text(values(d.id)[0] + ' : ' + values(d.id)[1] );
			   }
			})
			.on("mouseout", function(d) {
					svg.select("title").remove()
			});
		

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
      .text("Rurla Population %: Scale(*10)");

  g.call(d3.axisBottom(x)
      .tickSize(13)
      .tickFormat(format)
      .tickValues(color.range().slice(1).map(d => color.invertExtent(d)[0])))
      .select(".domain")
      .remove();

   




return ;
}


var maps2 = function(files){
	
	var maps = files[3];
	var data = files[2];
	//console.log(maps);


	const width = 800;
    const height = 600;
    const svg = d3.select('#canva2').append('svg')
      .attr('height', width+00)
	  .attr('width', height+100);
	  
	  


      // Create a unit projection.
      const laProjection = d3.geoAlbers().scale(1).translate([0, 0]);

      // Create a path generator                              
      var path = d3.geoPath().projection(laProjection);

      // Compute the bounds of a feature of interest, 
      // then derive scale & translate.
      const laBounds = path.bounds(maps);
      const laScale = 0.95 / Math.max(
                (laBounds[1][0] - laBounds[0][0]) / width,
                (laBounds[1][1] - laBounds[0][1]) / height
              );
      const laTranslate = [
        (width - laScale * (laBounds[1][0] + laBounds[0][0])) / 2, 
        (height - laScale * (laBounds[1][1] + laBounds[0][1])) / 2
      ];

      // Update the projection to use computed scale & translate.
      //console.log(laBounds);
      //console.log(laScale, laTranslate)
      laProjection.scale(laScale)
                  .translate(laTranslate);

      svg.append('path')
          .datum(maps)
		  .attr('d', path)
		  .attr("stroke-width","1")
		  .attr("stroke","black")
		  .attr("fill","#C6DBEF");
	
		  //console.log("park",data)
var parks = topojson.feature(data, data.objects.Parks_and_Gardens).features



// d3.map(parks, function(d) {
// 	// show all the properties of each feature:
// 	d3.map(d3.keys(d.properties), function(name) {
// 		console.log(name + " : " + d.properties[name]);
// 	})
// });

console.log("parksss",parks[0].properties.name) 

 svg.selectAll(".parks")
    .data(parks)
	.enter()
	.append("path")
	.attr("stroke-width", "1")
	.attr("stroke","red")
	.attr("class","parks")
	.attr("fill","#BC7920")
	.attr("d", path)
	.on("mouseover",function(d){
		console.log(d.properties.name)

		svg.append("title")
		   .text( d.properties.name )
	//   svg.append("g")
	// 	 .attr("class","names")
	// 	 .append('text')
	// 	 .style("fill","black")
	// 	 .style("font-weight", "bold")
	// 	 .attr('transform', 'translate(' + path.centroid(d) + ')')
	// 	 .attr('dy', '.35em')
	// 	 .text(d.properties.name);


	 })
	 .on("mouseout", function(d) {
			svg.select("title").remove()
	 });;

return ;
}

Promise.all([
	d3.json("world.topojson"),
	d3.csv("world.csv"),
	d3.json("Parks_and_Gardens.topojson"),
	d3.json("la.json"),
]).then(function (files) { 
  //console.log(data);
  maps(files);
  maps1(files);
  maps2(files);
});

