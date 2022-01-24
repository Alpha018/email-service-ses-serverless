export const emailServiceEnvMock = {
  NODE_ENV: 'test',
};

export const configServiceMock = {
  get(key: string): string {
    return emailServiceEnvMock[key];
  },
};
