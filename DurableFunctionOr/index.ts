/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an HTTP starter function.
 *
 * Before running this sample, please:
 * - create a Durable activity function (default name is "Hello")
 * - create a Durable HTTP starter function
 * - run 'npm install durable-functions' from the wwwroot folder of your
 *    function app in Kudu
 */

import * as df from 'durable-functions';

const orchestrator = df.orchestrator(function* (context) {
  const outputs = [];
  let i = 0;
  outputs.push(yield context.df.callActivity('DurableFn', 'Hello'));
  // while (i < 10) {
  //   const c = context.df.createTimer(new Date(Date.now() + i * 1000));
  //   console.log(i);
  //   outputs.push(
  //     yield context.df.callActivityWithRetry('DurableFn', new df.RetryOptions(1000, i), 'Init'),
  //   );

  //   if (i === 5) {
  //     yield context.df.callActivity('DurableFn', 'Algo mas');
  //   }
  //   i++;
  // }

  outputs.push(yield context.df.callActivity('DurableFn', 'London'));

  return outputs;
});

export default orchestrator;
