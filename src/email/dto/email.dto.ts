import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsString,
  ValidateIf,
} from 'class-validator';
import { TemplateName } from '../service/template.service';
import { Transform } from 'class-transformer';

export class EmailRequestDto {
  @IsNotEmpty()
  @ValidateIf((o) => Array.isArray(o.email))
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  @ValidateIf((o) => typeof o.email === 'string')
  @IsString()
  email: string | string[];

  @IsNotEmpty()
  @IsString()
  @IsEnum(TemplateName)
  templateName: TemplateName;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  sender: string;

  @IsNotEmpty()
  @IsObject()
  data: unknown;

  @IsNotEmpty()
  @IsString()
  subject: string;
}
