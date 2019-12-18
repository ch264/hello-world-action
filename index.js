// GitHub Actions provide context information about the webhook event, Git refs, workflow, action, and the person who triggered the workflow. To access the context information, you can use the github package. The action you'll write will print the webhook event payload the log.

const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hi there ${nameToGreet}!`);
  
  const time = (new Date()).toTimeString();
  
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify
  
  (github.context.payload, undefined, 2)
  
  // console.log(`The event payload: ${payload}`);

  console.log(`/////////////////here is the end of try`);
} catch (error) {
  // If an error is thrown, core.setFailed(error.message); uses the actions toolkit @actions/core package to log a message and set a failing exit code.
  core.setFailed(error.message);
}