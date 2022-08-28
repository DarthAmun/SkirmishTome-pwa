export const makeEnumSelectable = (e: any) => {
  let options: string[] = [];
  for (const value in e) {
    if (isNaN(Number(value))) {
      options.push(value);
    }
  }
  return options;
};
