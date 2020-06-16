
am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_spiritedaway);
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

    chart.data = [{
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
    }];

    //connects data to chart
    var series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "dollars";
    series.dataFields.category = "category";

    //creates shape of pie chart
    chart.radius = am4core.percent(60);
    chart.innerRadius = am4core.percent(30);
    chart.startAngle = 180;
    chart.endAngle = 361;

    //creates radial gradient
    var rgm = new am4core.RadialGradientModifier();
    rgm.brightnesses.push(-0.8, -0.8, -0.5, 0, - 0.5);
    series.slices.template.fillModifier = rgm;


    //creates rounded corner raidius
    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;

    //mouse interactivity
    series.slices.template.draggable = true;
    series.slices.template.inert = true;

    //aligns labels in columns
    series.alignLabels = "align";
    series.labels.template.fontSize = 18;




    // series.slices.template.propertyFields.fill = "color";
    series.slices.template.stroke = am4core.color("#fff");
    series.slices.template.strokeWidth = 2;
    series.slices.template.strokeOpacity = 1;



    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;



}); // end am4core.ready()

let smoothScroll = (target, duration) => {
    var target = document.querySelector(target)
    let targetPosition = target.getBoundingClientRect().top
    let startPosition = window.pageYOffset
    let distance = targetPosition - startPosition
    let startTime =  null

    let ease = (t, b, c, d) => {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    }

    let animation = (currentTime) => {
        if(startTime === null) startTime = currentTime
        let timeElapsed = currentTime - startTime 
        let run = ease(timeElapsed, startPosition, distance,  duration)
        window.scrollTo(0, run)
        console.log("working")
        if(timeElapsed < duration) requestAnimationFrame(animation)
        
   } 

  

   requestAnimationFrame(animation)

}

let toggleCostTable = () => {
    console.log("working")
    let element = document.getElementById("toggleContainer")
    if (element.classList[2] === 'invisible') {
        element.classList.remove('invisible')
        smoothScroll('.cost-container', 1000)
    }
    else {
        element.classList.add('invisible')
    }
}




