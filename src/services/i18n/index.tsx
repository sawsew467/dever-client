export let i18nTranslator: (key: string) => string;

export const setI18nTranslator = (t: any) => {
  i18nTranslator = t;
};
