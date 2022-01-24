import { IsOptional, IsString } from 'class-validator';

export class EmailServiceEnv {
  @IsString()
  @IsOptional()
  NODE_ENV: string;
}
