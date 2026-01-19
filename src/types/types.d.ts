type HelloWorldFunc = () => string;

type ServerError = {
  message?: string;
};

const isServerErrorResponse = (x: any): x is CustomError => x &&
  typeof x === "object" &&
  false === Array.isArray(x) &&
  Object.keys(x).includes("message");

type CustomError = {
  error?: string;
};

const isCustomErrorResponse = (x: any): x is CustomError => x &&
  typeof x === "object" &&
  false === Array.isArray(x) &&
  Object.keys(x).includes("error");

type RegisterUserServiceParams = {
  firstName: string;
  lastName: string;
  dob: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

type LoginUserServiceParams = {
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
  isTest: boolean;
  isAdmin: boolean;
  dob: string;
};

type RegisterResponse = {
  user: UserResponse;
};

type LoginResponse = {
  data: {
    authToken: string;
    user: UserResponse;
  }
};

type LogoutResponse = {
  message: string; 
};

type Path = string;

type Item = { [key: string]: any, } | undefined;

type TokenID = string;

type RequestOptions = {
  method: string;
  headers: { [key: string]: any };
  data?: Item;
  Authorization?: string;
};

type HelloFromServerResponse = {
  message?: string;
};

type Loading = boolean;

type GetHelloFromServer = () => Promise<void>;

type StorageResponse = {};