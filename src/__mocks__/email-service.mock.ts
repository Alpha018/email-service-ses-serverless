export const emailServiceEnvMock = {
  NODE_ENV: 'test',
  AWS_ACCESS_KEY: 'this_is_a_key',
  AWS_SECRET_ACCESS_KEY: 'this_is_a_secret_key',
  AWS_REGION: 'us-east-1',
  AWS_EMAIL_SENDER_OBJECT: '{"default": "test@test.cl"}',
};

export const configServiceMock = {
  get(key: string): string {
    return emailServiceEnvMock[key];
  },
};
