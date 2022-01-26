import { Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { compile } from 'ejs';
import { createContextWinston } from '../../utils/logger';
import * as fs from 'fs';
import * as path from 'path';
import { sanitizeClass } from '../../utils';

export enum TemplateName {
  TEST = 'test',
}

@Injectable()
export class TemplateService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  getTemplateString(name: TemplateName, data: unknown): string {
    const meta = createContextWinston(
      this.constructor.name,
      this.getTemplateString.name,
    );

    try {
      const str = this._getTemplate(name);
      const templateEngine = compile(str, {
        filename: name,
      });

      sanitizeClass(data);
      return templateEngine(data);
    } catch (e) {
      this.logger.error(e, { ...meta });
      throw new Error('Create html Error');
    }
  }

  _getTemplate(name: TemplateName): string {
    const meta = createContextWinston(
      this.constructor.name,
      this._getTemplate.name,
    );

    try {
      return fs.readFileSync(TemplateService._getTemplateUri(name), 'utf-8');
    } catch (e) {
      this.logger.error(e, { ...meta });
      throw new Error('No file found');
    }
  }

  static _getTemplateUri(name: TemplateName): string {
    return path.resolve(`${__dirname}/assets/template/${name}.ejs`);
  }
}
