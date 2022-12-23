import { OptionsItem } from '/#/utils';

export function selectEnumProps(
  entries: [string, any][],
  processor?: (item: OptionsItem, value: number) => OptionsItem | void,
) {
  return ({ formModel, schema }) => {
    const options: OptionsItem[] = [];
    entries.forEach(([key, value]) => {
      if (Number.isNaN(Number(value)) || value <= 0) {
        return;
      }
      let option: OptionsItem | void = { label: key, value: key };
      if (processor) {
        option = processor(option, value);
      }
      if (option) {
        options.push(option);
      }
    });
    schema.defaultValue = options[0].value;
    formModel.status = options[0].value;
    return {
      options,
    };
  };
}
