import { Test, TestingModule } from '@nestjs/testing';
import { WinstonModule } from 'nest-winston';
import { loggerOptions } from '../../utils/logger';
import { TemplateName, TemplateService } from './template.service';
import * as fs from 'fs';

describe('Template Service', () => {
  let templateService: TemplateService;

  const templateStringMock = '<h2>this is a simple ejs, <%= test %></h2>';
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [WinstonModule.forRoot({ ...loggerOptions, silent: true })],
      providers: [TemplateService],
    }).compile();

    templateService = module.get<TemplateService>(TemplateService);
  });

  it('should be defined', () => {
    expect(templateService).toBeDefined();
  });

  describe('Get Template String', () => {
    it('Should get a string with html', async () => {
      templateService._getTemplate = jest
        .fn()
        .mockReturnValueOnce(templateStringMock);

      const result = templateService.getTemplateString(TemplateName.TEST, {
        test: 'test',
      });
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
      expect(result.includes('test')).toBe(true);
    });

    it('Should get a error in generate template', async () => {
      templateService._getTemplate = jest.fn().mockImplementation(() => {
        throw new Error();
      });

      try {
        templateService.getTemplateString(TemplateName.TEST, { test: 'test' });
      } catch (error) {
        expect(error).toBeDefined();
        expect(error.message).toBe('Create html Error');
      }
    });
  });

  describe('Get Template private function', () => {
    it('Should get a string with html', async () => {
      const spy = jest
        .spyOn(fs, 'readFileSync')
        .mockImplementation(() => templateStringMock);
      const result = templateService._getTemplate(TemplateName.TEST);

      expect(spy).toHaveBeenCalledTimes(1);
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
      expect(result.includes('test')).toBe(true);
    });

    it('Should get a error in get template private method', async () => {
      jest.spyOn(fs, 'readFileSync').mockImplementation(() => {
        throw new Error();
      });

      try {
        templateService._getTemplate(TemplateName.TEST);
      } catch (error) {
        expect(error).toBeDefined();
        expect(error.message).toBe('No file found');
      }
    });
  });

  describe('Get Template URI private function', () => {
    it('Should get a string with URI', async () => {
      const result = TemplateService._getTemplateUri(TemplateName.TEST);

      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
      expect(result.includes('/assets/template/')).toBe(true);
    });
  });
});
