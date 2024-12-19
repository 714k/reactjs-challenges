const getClassNames = (props: any): string => {
  return [...props].toString().split(',').join(' ');
};

export { getClassNames };
