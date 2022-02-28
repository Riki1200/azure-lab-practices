import * as df from 'durable-functions';
import { Task } from 'durable-functions/lib/src/classes';

const orchestrator = df.orchestrator(function* (context) {
  const outputs: Task[] = [];
  const getCustomerP = context.bindingData.input.customers;

  context.log(getCustomerP);
  if (getCustomerP) {
    for (const customer of getCustomerP) {
      const childId = context.df.instanceId;
      context.log(customer);
      const oboardingCustomer = context.df.callSubOrchestrator('Customer', customer, childId);
      outputs.push(oboardingCustomer);
    }
  }

  return outputs;
});

export default orchestrator;
