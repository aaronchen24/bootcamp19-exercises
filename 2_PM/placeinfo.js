/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */
const placeInfo = require('@google/maps')

// Create client with a Promise constructor
const googleMapsClient = require('@google/maps').createClient({
    key: 'process.env.API_KEY'
    Promise: Promise // 'Promise' is the native constructor.
  });
  
  // Geocode an address.
googleMapsClient.geocode({
    address: '1600 Amphitheatre Parkway, Mountain View, CA'
  }, function(err, response) {
    if (!err) {
      console.log(response.json.results);
    }
  });
  