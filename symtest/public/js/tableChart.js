
class TableChart {

    /**
     * Constructor for the Year Chart
     *
     * @param electoralVoteChart instance of ElectoralVoteChart
     * @param tileChart instance of TileChart
     * @param votePercentageChart instance of Vote Percentage Chart
     * @param electionInfo instance of ElectionInfo
     * @param electionWinners data corresponding to the winning parties over mutiple election years
     */
    constructor (pieChart) {
        this.pChart= pieChart;
        this.name = "sorting log";
        this.map = new Map();
        this.list= [];
        let divyearChart = d3.select("#loadfile").classed("fullView", true);
        this.selectFile = document.getElementById('myFile');
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            
            this.selectFile.addEventListener('change', (e)=>{
                let fileTobeRead = e.target.files[0];

                //let self = this;
                //console.log(self.name);

                let fileReader = new FileReader(); 
                fileReader.addEventListener("load",(e)=>{

                let text = e.target.result;

                let lines = text.split(/[\r\n]+/g);

                 //Parse String
                 lines.forEach( (element,index)=> {
                     if(index>5){ 
                        let words = element.split(" ");
                        //console.log(words[6]);
                        let value = this.map.get(words[6]);
                        if(value == undefined)
                            this.map.set(words[6],+1);
                        else
                            this.map.set(words[6],value+1);
                     }
                     
                 });

                this.update();
             });
            
             fileReader.readAsText(fileTobeRead); 
            });
        }
        else{
            alert("Files are not supported"); 
        }

       
    };

    /**
     * Creates a chart with circles representing each election year, populates text content and other required elements for the Year Chart
     */
    update () {

        let fileContents = document.getElementById('vsChart');

        this.map.forEach( (value, key)=> {
            let name = key.charAt(0).toUpperCase()+key.slice(1);
            this.list.push(
            {
              "Username": name,
               "Page Views": value
            }
            );
        });

        this.list.sort((a,b)=>{
            if(a["Page Views"]!=b["Page Views"]){

                return b["Page Views"]-a["Page Views"]; 
            }
            else{
                if (a["Username"] > b["Username"]) {
                        return 1;
                } 
                else
                    return -1;
                
            }
        });

        let tbody = document.getElementById('tablebody');

        tbody.innerHTML= '';
        this.list.forEach( function(e){
            let tr = document.createElement('tr');
        
            let tdName = document.createElement('td');
            let tdView = document.createElement('td');
            tdName.textContent = e["Username"];
            tdView.textContent = e["Page Views"];

            tr.appendChild(tdName);
            tr.appendChild(tdView);

            tbody.appendChild(tr);
        }
        )
        
        this.pChart.update(this.list);
        //fileContents.innerText = lines[5]; 
    }
        

};