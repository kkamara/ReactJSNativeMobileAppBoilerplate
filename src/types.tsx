export type HelloWorldFunc = () => string;

export type ErrorResponse = {
  error?: string;
};

export const isErrorResponse = (x: any): x is ErrorResponse => x &&
  typeof x === "object" &&
  false === Array.isArray(x) &&
  Object.keys(x).includes("error");

export type RegisterUserServiceParams = {
  firstName: string;
  lastName: string;
  dob: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type LoginUserServiceParams = {
  email: string;
  password: string;
};

type UserResponse = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
};

export type RegisterResponse = {
  user: UserResponse;
};

export type LoginResponse = {
  data: {
    authToken: string;
    user: UserResponse;
  }
};

export type LogoutResponse = {
  message: string; 
};

export type Path = string;

export type Item = { [key: string]: any, } | undefined;

export type TokenID = string;

export type RequestOptions = {
  method: string;
  headers: { [key: string]: any };
  data?: Item;
  Authorization?: string;
};

export type HelloFromServer = string;

export type HelloFromServerResponse = {
  message?: HelloFromServer;
};

export type Loading = boolean;

export type GetHelloFromServer = () => Promise<void>;

export type StorageResponse = {};