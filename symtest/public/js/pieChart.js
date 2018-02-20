/** Class implementing the tileChart. */
class PieChart {

    /**
     * initializa pie chart
     */
    constructor(){

        let pChart = d3.select("#pieChart").classed("content", true);
        this.margin = {top: 30, right: 20, bottom: 30, left: 50};
        //Gets access to the div element created for this chart and legend element from HTML
        let svgBounds = pChart.node().getBoundingClientRect();
        this.svgWidth = svgBounds.width - this.margin.left - this.margin.right;
        this.svgHeight = this.svgWidth;

        this.radius = this.svgWidth/3;
        this.svg = pChart.append("svg")
                            .attr("width",this.svgWidth)
                            .attr("height",this.svgHeight)
                            .attr("transform", "translate(" + this.margin.left + ",0)");


    };

    /**
     * update pie chart with data
     */
    update (data){

            let ColorScale = d3.scaleLinear()
            .domain([1, d3.max(data, function(d) {return +d["Page Views"];})])
            .range(['#ece2f0', '#016450']);

            //let cscale = d3.scaleOrdinal(d3[schemeCategory20b]);

            let pie = d3.pie().sort(null)
                              .value((d)=>{
                                return +d["Page Views"];
                              });

            let path = d3.arc()
                .outerRadius(this.radius)
                .innerRadius(0);

            let label = d3.arc()
                .outerRadius(this.radius - 40)
                .innerRadius(this.radius - 40);

                  
            let arc = this.svg.selectAll('.arc')
                        .data(pie(data));

            arc.exit().remove();
            arc.selectAll('g').remove();
            
            let arcg = arc.enter().append('g')
                       .attr('class','arc');

            arcg.append("path")
                       .attr("d", path)
                       .attr('transform', 'translate(' +this.svgWidth/2 +"," +this.svgHeight/2 + ')') 
                        .attr("fill", function(d) { return ColorScale(d.data["Page Views"]); });           

            arcg.append("text")
                .attr("transform", (d)=> {
                let c =  label.centroid(d);
                    let shiftx = c[0]+this.svgWidth/2;
                    let shifty = c[1]+this.svgHeight/2;
                    return 'translate(' + shiftx +',' +shifty +')' 
                })
                .attr("dy", "0.35em")
                .text(function(d) { return d.data["Username"]; });            
            
            
    
    };


}
