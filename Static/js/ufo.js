
const tableData = data; // import the data from data.js
var tbody = d3.select("tbody"); // Reference the HTML table using d3


function buildTable(data) { // dynamic table building func
    tbody.html(""); // First, clear out any existing data
    data.forEach((dataRow) => { // loop, appending each cell in every row
        
        let row = tbody.append("tr");// Append a row to the table body
        Object.values(dataRow).forEach((val) => { // Loop through each field in the dataRow and add
            let cell = row.append("td");// each value as a table cell (td)
            cell.text(val);
        });
    });
}


function handleClick() {
    const filters = [ d3.select("#datetime").property("value"), d3.select("#city").property("value"),
    d3.select("#state").property("value"), d3.select("#country").property("value"), d3.select("#shape").property("value")];

    let filteredData = tableData;

    if (filters[0]) {filteredData = filteredData.filter(row => row.datetime === filters[0]);};
    if (filters[1]) {filteredData = filteredData.filter(row => row.city === filters[1]);}; 
    if (filters[2]) {filteredData = filteredData.filter(row => row.state === filters[2]);};  
    if (filters[3]) {filteredData = filteredData.filter(row => row.country === filters[3]);};            
    if (filters[4]) {filteredData = filteredData.filter(row => row.shape === filters[4]);};   
    buildTable(filteredData);
};

d3.selectAll("#filter-btn").on("click", handleClick); // Attach an event to listen for the form button
buildTable(tableData); // Build the table when the page loads   

