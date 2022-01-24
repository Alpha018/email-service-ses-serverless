import * as winston from 'winston';

import { utilities as nestWinstonModuleUtilities } from 'nest-winston/dist/winston.utilities';

export const loggerOptions = {
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        nestWinstonModuleUtilities.format.nestLike(),
      ),
    }),
  ],
};

export function createContextWinston(
  constructorName: string,
  functionName: string,
) {
  return {
    context: constructorName,
    function: functionName,
  };
}
