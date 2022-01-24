import { plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';

import { ArgumentInvalidException } from '../common/argument-invalid.exception';
import { validationErrorsToString } from '../utils';
import { EmailServiceEnv } from './email-service.env';

export function EmailServiceValidateConfig(
  config: Record<string, unknown>,
): EmailServiceEnv {
  const validatedConfig = plainToClass(EmailServiceEnv, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new ArgumentInvalidException(validationErrorsToString(errors));
  }

  return validatedConfig;
}
