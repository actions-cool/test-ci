
const fs = require('fs');

async function run() {
  try {
    const package = JSON.parse(fs.readFileSync('./package.json'));
    console.log(package.version)


  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
