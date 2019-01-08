// TODO - create client object for Google API connection which can be exported
export const googleMapsClient = require('@google/maps').createClient({
    key: 'process.env.API_KEY'
  });