import { AzureFunction, Context } from '@azure/functions';

const activityFunction: AzureFunction = async function (context: Context): Promise<string> {
  const msg = `user name is ${context.bindingData.input.name}`;
  return msg;
};

export default activityFunction;
