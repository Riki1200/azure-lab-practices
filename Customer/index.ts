import * as df from 'durable-functions';
import { Task } from 'durable-functions/lib/src/classes';
const orchestrator = df.orchestrator(function* (context) {
  const outputs: Array<Task> = [];
  outputs.push(yield context.df.callActivity('CustomerName', context.df.getInput()));
  outputs.push(yield context.df.callActivity('CustomerEmail', context.df.getInput()));
  outputs.push(yield context.df.callActivity('CustomerProduct', context.df.getInput()));
  //const result = yield context.df.Task.any(outputs);
  context.log(outputs);
  return outputs;
});

export default orchestrator;
