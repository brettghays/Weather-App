App.js - Search
    -This should do the get from the weather api
    -pass the array of data as a prop (this.state) to the forecast component
    -pass the array of searches to the results component
        -filter that array of searches using .push(whatever).pop(whatever)
    -City field should look like employee manager/editor
Forecast.js - Five Day forecast (pass in props)
     - Use axios.post to post the search array (do i need to make a copy first?) -> This will need to be in components will receive props
        - Hide the initial "Enter City" - use css display: none
    - Render each array index as a separate div -> map it
Results.js - Last 3 searches (pass in props)
    - Get the array from the api (or I could just pass the array from app.js as props)
    - Render the array (should only have 3 results)