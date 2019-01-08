// TODO: Add Google API key here - first hardcoded, then as environment variable.

const dotenv = require('dotenv')
dontenv.config()

export const config = { googleAPI : process.env.API_KEY};
