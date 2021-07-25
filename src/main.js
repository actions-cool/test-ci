const github = require('@actions/github');
const core = require('@actions/core');

const context = github.context;

async function run() {
  try {
    core.info(`[context]: ${context}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
