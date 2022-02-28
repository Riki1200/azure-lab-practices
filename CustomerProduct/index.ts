import { AzureFunction, Context } from '@azure/functions';

const activityFunction: AzureFunction = async function (context: Context): Promise<string> {
  const { name, price } = context.bindings.input.product;
  const msg = `The user that bought the product ${context.bindings.input.name}
  The product is ${name} and the price is ${price}`;
  return msg;
};

export default activityFunction;
