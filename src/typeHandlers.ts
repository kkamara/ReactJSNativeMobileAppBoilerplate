export const isServerErrorResponse = (x: any): x is CustomError => x &&
  typeof x === "object" &&
  false === Array.isArray(x) &&
  Object.keys(x).includes("message");

export const isCustomErrorResponse = (x: any): x is CustomError => x &&
  typeof x === "object" &&
  false === Array.isArray(x) &&
  Object.keys(x).includes("error");