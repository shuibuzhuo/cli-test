#!/usr/bin/env node

(async () => {
  const Spinner = require("cli-spinner").Spinner;
  
  const spinner = new Spinner("processing.. %s");
  spinner.setSpinnerString("|/-\\");
  spinner.start();
  await new Promise((resolve) => setTimeout(resolve, 1000))
  spinner.stop()
})()
