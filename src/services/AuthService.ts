import storage from '@/storage';
import HttpService from './HttpService';

export const RegisterUserService = (
  credentials: RegisterUserServiceParams,
): Promise<RegisterResponse> => {
  const http = new HttpService();
  
  return new Promise<RegisterResponse>(async (resolve, reject) => {
    await http.postData<RegisterResponse>(
      '/accounts',
      {
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        email: credentials.email,
        dob: credentials.dob,
        password: credentials.password,
        passwordConfirmation: credentials.passwordConfirmation,
      },
    )
      .then(async response => {
        return resolve(response.data);
      })
      .catch((err: Error) => reject(err));
  });
};

export const LoginUserService = (
  credentials: LoginUserServiceParams,
): Promise<LoginResponse> => {
  const http = new HttpService();
  
  return new Promise<LoginResponse>(async (resolve, reject) => {
    await http.postData<LoginResponse>('/auth/login', credentials)
      .then(async response => {
        await storage.save({
          key: "user-token",
          data: {
            authToken: response.data.data?.authToken,
            user: {
              id: response.data.data?.user?.id,
              email: response.data.data?.user?.email,
              firstName: response.data.data?.user?.firstName,
              lastName: response.data.data?.user?.lastName,
              isTest: response.data.data?.user?.isTest,
              isAdmin: response.data.data?.user?.isAdmin,
              dob: response.data.data?.user?.dob,
            },
          }
        });
        return resolve(response.data);
      })
      .catch((err: Error) => reject(err));
  });
};

export const LogoutUserService= (
): Promise<LogoutResponse|Boolean> => {
  const http = new HttpService();

  return new Promise<LogoutResponse|Boolean>(async (resolve, reject) => {
    let res = null;
    try {
      res = await storage.load({ key: "user-token" });
    } catch (err) {
      return resolve(false);
    }
    if (!res.authToken) {
      return resolve(false);
    }
    await http.deleteData<LogoutResponse>('/auth/logout', "user-token")
      .then(async response => {
        try {
          await storage.remove({
            key: "user-token",
          });
        } catch (err) {
          return reject(err);
        }
        return resolve(response.data);
      })
      .catch(async (err: Error) => {
        try {
          await storage.remove({
            key: "user-token",
          });
        } catch (err) {
          return reject(err);
        }
    });
  });
};
