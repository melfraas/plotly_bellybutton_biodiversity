// Define function that will run on page load
function init() {
    var selector = d3.select("#selDataset");
    // Read json data
    //read the json data
    d3.json("./samples.json").then((response) => {
        var dataNames = response.names;
        dataNames.forEach((data)=>{
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
    var panel = d3.select("#sample-metadata");
    

    // Read the json data

        // Parse and filter the data to get the sample's metadata

        // Specify the location of the metadata and update it

}
// Define a function that will create charts for given sample
function buildCharts(sample) {

    // Read the json data

        // Parse and filter the data to get the sample's OTU data
        // Pay attention to what data is required for each chart

        // Create bar chart in correct location

        // Create bubble chart in correct location
    
}


function optionChanged(sample){
    // The parameter being passed in this function is new sample id from dropdown menu
    buildMetadata(sample);
    // Update metadata with newly selected sample
    buildCharts(sample);
    // Update charts with newly selected sample

}

// Initialize dashboard on page load
init();

