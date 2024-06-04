export const createUrlQuery = (object: Record<string, unknown>): string => {
  const entries = Object.entries(object);
  const queryString = `?${entries
    .map(([key, value]) => {
      return `${key}=${value}`;
    })
    .join("&")}`;
  return queryString;
};
