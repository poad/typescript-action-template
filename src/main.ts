import { wait } from './wait.js';
import * as core from '@actions/core';

async function run(): Promise<void> {
  try {
    const ms: string = core.getInput('milliseconds');

    // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
    core.debug(`Waiting ${ms} milliseconds ...`);

    core.debug(new Date().toTimeString());
    await wait(Number.parseInt(ms, 10));
    core.debug(new Date().toTimeString());

    core.setOutput('time', new Date().toTimeString());
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
