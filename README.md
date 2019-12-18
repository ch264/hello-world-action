# hello-world-action in JavaScript

I am writin an action from scratch

A readme for a Github Action should contain the following:
A detailed description of what the action does.
Required input and output arguments.
Optional input and output arguments.
Secrets the action uses.
Environment variables the action uses.
An example of how to use your action in a workflow.

## Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

uses: actions/hello-world-action@v1
with:
  who-to-greet: 'Mona the Octocat'
