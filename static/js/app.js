/* The following is an example on how you might structure your code.
This is not the only way to complete this assignment.
Feel free to disregard and create your own code */

// Define function that will run on page load
function init() {

    // Read json data
    //read the json data
  let data = fetch("./samples.json")
    .then(response => {
       return response.json();
    })
    .then(data => console.log(data));

        // Parse and filter data to get sample names
        let sample_data = JSON.parse(data);
        let sample_names = sample_data.names;
        console.log(sample_names);

        // Add dropdown option for each sample
        Plotly.newPlot("plot", data);


    // Call functions below using the first sample to build metadata and initial plots
function updatePlotly() {

let dropdownMenu = d3.select('#selDataset');

}
}

// Define a function that will create metadata for given sample
function buildMetadata(sample) {

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

    // Update metadata with newly selected sample

    // Update charts with newly selected sample

}

// Initialize dashboard on page load
init();

