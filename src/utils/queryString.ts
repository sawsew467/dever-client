export const createQueryString = (name: string, value: string) => {
  const params = new URLSearchParams(window?.location?.search);

  value ? params.set(name, value) : params.delete(name);

  return "?" + params.toString();
};
