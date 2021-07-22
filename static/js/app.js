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
    // Read the json data

        // Parse and filter the data to get the sample's metadata
    // var sample = [];
    // //selection will refer to the 
    // let selection = selector.property("value");
    // dataNames.forEach((selection) => {




    

        // Specify the location of the metadata and update it

}
// Define a function that will create charts for given sample
function buildCharts(sample) {

    d3.json("./samples.json").then((response) => {
        var samples = response.samples;
        var results = samples.filter(x => x.id == sample);
        var result = results[0];
        console.log(result);

        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;


    // Read the json data

    // Parse and filter the data to get the sample's OTU data
    // Pay attention to what data is required for each chart

    // Create bar chart in correct location

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

