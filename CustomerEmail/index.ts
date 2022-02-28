import { AzureFunction, Context } from '@azure/functions';

const activityFunction: AzureFunction = async function (context: Context): Promise<string> {
  const msg = `Your email is ${context.bindings.input.email}`;
  return msg;
};

export default activityFunction;
