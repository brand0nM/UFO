# UFO Dashboard
## Overview
Store scraped UFO data in an interactive dashboard 

### Purpose
Use HTML to create containers that hold data, then Javascript to update and filter based on the user input.

## Analysis
To make the website active, first create the buildTable function, creating the unfiltered-table and dynamically update if parameters are filtered. Then use the handleClick function- or the filter function- to store the location of the input boxes. By default their values will be false (since they are empty) but, if the text box is filled it's value will be true (and a new table will be built). Finally, add an event listener, these activate the handleClick function on a button click.

## Results
These results were filtered by date and city. <br />
<img width="1440" alt="Screen Shot 2022-06-06 at 5 33 56 PM" src="https://user-images.githubusercontent.com/79609464/172267292-b5fed50a-3eae-469c-a7ae-c7fcb326fecb.png">

## Summary
We've created a dashboard that displays 'small' amounts of data and filters based on user inputs.

### Further Improvements 
Storing and retrieving data in this format can be quite tedious, one would first have to create dictionaries in another language used to scrape the data (like python), then export to a .js file. In real life, we should read data from .JSON files, but that would require a local server hosted from our terminal. Additionally the .CS is quite dull we could add animations or something to make the page less 2000.
