// Define function that will run on page load
function init() {
    var selector = d3.select("#selDataset");
    // Read json data
    //read the json data
    d3.json("./samples.json").then((response) => {
        var dataNames = response.names;
        dataNames.forEach((data) => {
            selector.append("option")
                .text(data)
                .property("value", data);

        });

        var firstSample = dataNames[0];

        // Call functions below using the first sample to build metadata and initial plots

        buildMetadata(firstSample);
        // 
        buildCharts(firstSample);

    });
}

// Define a function that will create metadata for given sample
function buildMetadata(sample) {

    d3.json("./samples.json").then((response) => {
        var metaData = response.metadata;
        var results = metaData.filter(x => x.id == sample)
        // console.log(results);
        var result = results[0]
        // console.log(result);

        var PANEL = d3.select("#sample-metadata");
        PANEL.html("");
        Object.entries(result).forEach(([key, value]) => {
            PANEL.append("h5").text(`${key}:${value}`);


        });

    });

}
// Define a function that will create charts for given sample
function buildCharts(sample) {

    d3.json("./samples.json").then((response) => {
        var samples = response.samples;
        var results = samples.filter(x => x.id == sample);
        var result = results[0];
        console.log(result);

        var otuIds = result.otu_ids;
        var otuLabels = result.otu_labels;
        var sampleValues = result.sample_values;


        //graph top 10 otu ids for y-ticks,
        var topTen =  sampleValues.sort().slice(0,10).reverse();
        console.log(topTen)

        //pull corresponding data from top 10 id's
        var idPlots = topTen.map(d => "OTU " + d);
            //create variable for bar data
        let trace1= {
            x: topTen,
            y: idPlots,
            type: "bar",
            orientation: "h"
        }
        let layout = {
            title: ""
        };

        let data = [trace1]

        

        Plotly.newPlot("bar", data, layout);




        // Create bubble chart in correct location
    });
}


function optionChanged(sample) {
    // The parameter being passed in this function is new sample id from dropdown menu
    buildMetadata(sample);
    // Update metadata with newly selected sample
    buildCharts(sample);
    // Update charts with newly selected sample

}

// Initialize dashboard on page load
init();

