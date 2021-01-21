export const matchPartialString = (
  sources: string[],
  match: string
): string[] => sources.filter((source) => source.toLowerCase().includes(match));

export const isFalsy = (value: any): boolean => (value === 0 ? false : !value);
export const cleanObject = (object: any): any => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
