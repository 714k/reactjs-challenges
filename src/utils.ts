const getClassNames = (props: any): string => {
  return [...props].toString().split(',').join(' ');
};

const getClassNamesFromBoolean = (attr: any) => {
  const [key] = Object.keys(attr);
  const [value] = Object.values(attr);
  const isCamelCase = /[A-Z]/.test(key);
  const attrKebabCase = key
    .toString()
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
  const classname = isCamelCase ? attrKebabCase : key;

  return value === true ? classname : '';
};

export { getClassNames, getClassNamesFromBoolean };
