const github = require('@actions/github');
const chalk = require('chalk');
const core = require('@actions/core');

const context = github.context;

async function run() {
  try {
    core.info(`[github]: ${JSON.stringify(github)}`);
    console.log(chalk.green('🎉 Done!'));
    const a = core.getInput('a');
    console.log(`a is ${JSON.stringify(a)}`);
    console.log(`a l is ${a.length}`);
    console.log(`a type is ${typeof(a)}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
