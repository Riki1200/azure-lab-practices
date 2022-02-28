import { AzureFunction, Context } from '@azure/functions';

const activityFunction: AzureFunction = async function (context: Context): Promise<string> {
  //const
  const prices = context.bindingData.input.prices;
  if (prices) {
    const highestPrices = prices.reduce((acc, curr) => {
      if (curr.price > acc.price) {
        return curr;
      }
      return acc;
    });
    return `The highest price is ${highestPrices.price}`;
  }
};

export default activityFunction;
