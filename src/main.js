const github = require('@actions/github');
const chalk = require('chalk');
const core = require('@actions/core');

const context = github.context;

async function run() {
  try {
    core.info(`[github]: ${JSON.stringify(github)}`);
    console.log(chalk.green('🎉 Done!'));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
