function timedText() {
    var x = document.getElementById("txt");
    for(var i=0;i<10;i++){
    	setTimeout(function(){
        	console.log(i);
        }, 1000);
    }
}

timedText();

        let pieChart = new PieChart();
        let tChart = new TableChart(pieChart);
        
