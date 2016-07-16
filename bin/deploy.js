const path = require('path')
const client = require('firebase-tools')
require('dotenv').config()

client.deploy({
  project: process.env.FIRBASE_PROJECT_ID,
  token: process.env.FIREBASE_AUTH_TOKEN,
  cwd: path.join(__dirname, '..')
}).then(function() {
  console.log('Success : deploy')
  process.exit(0)
}).catch(function(err) {
  console.error(err)
  process.exit(1)
})
