import { template, templateSettings } from 'lodash-es';

templateSettings.interpolate = /{([\s\S]+?)}/g;

export const bindParams = (uri: string, params: object) => {
  console.log(template(uri)(params));
  return template(uri)(params);
};
