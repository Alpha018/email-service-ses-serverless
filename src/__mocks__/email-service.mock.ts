export const emailServiceEnvMock = {
  NODE_ENV: 'test',
  AWS_SES_ACCESS_KEY: 'this_is_a_key',
  AWS_SES_SECRET_ACCESS_KEY: 'this_is_a_secret_key',
  AWS_SES_REGION: 'us-east-1',
  AWS_EMAIL_SENDER_LIST: '{"default": "test@test.cl"}',
};

export const configServiceMock = {
  get(key: string): string {
    return emailServiceEnvMock[key];
  },
};
