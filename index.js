// GitHub Actions provide context information about the webhook event, Git refs, workflow, action, and the person who triggered the workflow. To access the context information, you can use the github package. The action you'll write will print the webhook event payload the log.

const core = require('@actions/core');
const github = require('@actions/github');

// try {
//   // `who-to-greet` input defined in action metadata file
//   const nameToGreet = core.getInput('who-to-greet');
//   console.log(`Hi there ${nameToGreet}!`);
  
//   const time = (new Date()).toTimeString();
  
//   core.setOutput("time", time);
//   // Get the JSON webhook payload for the event that triggered the workflow
//   // const payload = JSON.stringify
  
//   // (github.context.payload, undefined, 2)
  
//   // console.log(`The event payload: ${payload}`);

//   console.log(`/////////////////here is the end of try`);
// } catch (error) {
//   // If an error is thrown, core.setFailed(error.message); uses the actions toolkit @actions/core package to log a message and set a failing exit code.
//   core.setFailed(error.message);
// }

try {
  var proxyUrl = "https://cors-anywhere.herokuapp.com/";
  var url="https://learning.getpostman.com/"

  function urlExists(url, callback) {
    var sameOriginURL = proxyUrl + url;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        callback(xhr.status < 400);
      }
    };
    xhr.open('HEAD', sameOriginURL);
    xhr.send();
  }

  urlExists(someUrl, function(exists) {
    console.log('"%s" exists?', someUrl, exists);
  })
} catch (error) {
  //   // If an error is thrown, core.setFailed(error.message); uses the actions toolkit @actions/core package to log a message and set a failing exit code.
    core.setFailed(error.message);
  }








// ///////////////////////Markdown-linl-checker//////////////////////////////////
// 'use strict';

// var markdownLinkCheck = require('markdown-link-check');

// markdownLinkCheck('[example](http://example.com)', function (err, results) {
//     if (err) {
//         console.error('Error//////////', err);
//         return;
//     }
//     results.forEach(function (result) {
//         console.log('%s is %s //////////////', result.link, result.status);
//     });
// });