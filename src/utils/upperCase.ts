const upperCase = <T extends string | string[] | undefined>(
  data: T
): T => {
  if (typeof data === 'string') {
    return (data.toUpperCase() as unknown) as T;
  }
  if (Array.isArray(data)) {
    return (data.map((item) =>
      typeof item === 'string' ? (item.toUpperCase() as unknown) : item
    ) as unknown) as T;
  }
  return data;
};

export default upperCase;