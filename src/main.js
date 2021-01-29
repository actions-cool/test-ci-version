const core = require('@actions/core');

async function run() {
  try {
    console.log('v1.0.0');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
