// JavaScript Document


window.onload = function(){
	var doughnutChart = document.getElementById("doughnut-chart").getContext("2d");
		window.myDoughnut = new Chart(doughnutChart).Doughnut(doughnutData, {
			segmentStrokeColor : "#fff",
			tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label		
			percentageInnerCutout : 50,
			animationSteps : 15,
			segmentStrokeWidth : 4,
			animateScale: true,
			percentageInnerCutout : 60,
			responsive : true
		});

};


var doughnutData = [
	{
		value: 100,
		color:"#F7464A",
		highlight: "#FF5A5E",
		label: "Weed"
	},
	{
		value: 50,
		color: "#46BFBD",
		highlight: "#5AD3D1",
		label: "Pest"
	},
	{
		value: 200,
		color: "#FDB45C",
		highlight: "#FFC870",
		label: "Disease"
	}

];
