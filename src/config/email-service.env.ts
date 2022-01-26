import { IsJSON, IsOptional, IsString } from 'class-validator';

export class EmailServiceEnv {
  @IsString()
  @IsOptional()
  NODE_ENV: string;

  @IsString()
  @IsOptional()
  // @IsNotEmpty() uncomment this when launch in dev
  AWS_ACCESS_KEY: string;

  @IsString()
  @IsOptional()
  // @IsNotEmpty() uncomment this when launch in dev
  AWS_SECRET_ACCESS_KEY: string;

  @IsString()
  @IsOptional()
  // @IsNotEmpty() uncomment this when launch in dev
  AWS_REGION: string;

  @IsString()
  @IsOptional()
  @IsJSON()
  // @IsNotEmpty() uncomment this when launch in dev
  AWS_EMAIL_SENDER_OBJECT: string;
}
