import { AzureFunction, Context, HttpRequest } from '@azure/functions';

(String.prototype as any).isNotEmpty = function (): Boolean {
  return this.trim().length > 0;
};

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest,
): Promise<void> {
  const name = req.query.name || (req.body && req.body.name);
  if ((name as String).length > 0) {
    context.res = {
      body: {
        name: name,
        date: Date.now(),
      },
    };
  }
};

export default httpTrigger;
