am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartdiv", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
      
    let currentBudget = 63821448
    let efc = 64332327
    let overage = efc - currentBudget
    let totalExposure = 957948
    let exposure = totalExposure - overage
    let budgetDouble = currentBudget * 2
    let nonOverage = budgetDouble - efc
    
    
    console.log("Overage", overage)
    console.log("Exposure", exposure)
    
    chart.data = [ {
      "category": "Total Commited",
      "dollars": 60712420,
      "color": am4core.color("#749D98"),
      "align": false,
    }, {
      "category": "Pending",
      "dollars": 2662869,
      "color": am4core.color("#AF805E"),
      "align": true,
    }, {
      "category": "Exposure",
      "dollars": exposure,
      "color": am4core.color("#F35033"),
      "align": true,
    }, {
       "category": "Exposure Overage",
      "dollars": overage,
      "color": am4core.color("#AA445B"),
      "align": true,
    } ];
      
    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(30);
    chart.startAngle = 180;
    chart.endAngle = 361; 
     
    
    var series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "dollars";
    series.dataFields.category = "category";
    
    // series.slices.template.cornerRadius = 10;
    // series.slices.template.innerCornerRadius = 7;
    series.slices.template.draggable = true;
    series.slices.template.inert = true;
    
    series.alignLabels = "align";
    
    series.labels.template.fontSize = 20;
    
    
    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;
    series.slices.template.propertyFields.fill = "color";
    series.slices.template.stroke = am4core.color("#fff");
    series.slices.template.strokeWidth = 2;
    series.slices.template.strokeOpacity = 1;
    
    
      
    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;
    
    // chart.legend = new am4charts.Legend();
    
    }); // end am4core.ready()