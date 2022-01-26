import * as sanitizeHtml from 'sanitize-html';

export function sanitizeClass(obj: unknown) {
  Object.keys(obj).forEach(function (k) {
    if (obj[k] && typeof obj[k] === 'object') {
      sanitizeClass(obj[k]);
      return;
    }
    if (typeof obj[k] === 'string') {
      obj[k] = sanitizeHtml(obj[k]);
    }
  });
}
