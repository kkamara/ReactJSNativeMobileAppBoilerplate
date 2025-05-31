import {
  PropsWithChildren, 
  createContext, 
  useContext,
  useState,
} from "react";
import {
  ErrorResponse,
  GetHelloFromServer,
  HelloFromServerResponse,
  Loading,
} from "@/types";
import HttpService from "@/services/HttpService";
import axios from "axios";

type HelloFromServerType = {
  helloFromServer: HelloFromServerResponse|ErrorResponse;
  loading: Loading;
  getHelloFromServer: GetHelloFromServer;
};

const defaultErrorResponse = { error: "Not implemented." };

const HelloFromServerContext = createContext<HelloFromServerType>({
  helloFromServer: defaultErrorResponse,
  loading: false,
  getHelloFromServer: () => Promise.resolve(),
});

const HelloFromServerProvider = ({ children, }: PropsWithChildren) => {
  const [helloFromServer, setHelloFromServer] = useState<HelloFromServerResponse|ErrorResponse>(defaultErrorResponse);
  const [loading, setLoading] = useState(false)

  const getHelloFromServer = async (): Promise<void> => {
    setLoading(true);
    try {
      // const tokenId = "user-token";
      // const storageRes = await storage.load<StorageResponse>({
      //   key: tokenId,
      // });
      const http = new HttpService();
      const response = await http.getData<HelloFromServerResponse>(
        "/hello",
      )
        .then(res => res)
        .catch((err: Error) => err);
      if (response instanceof Error) {
        if (axios.isAxiosError<ErrorResponse>(response)) {
          if ("ERR_NETWORK" === response.code) {
            setLoading(false);
            setHelloFromServer({ error: "Server unavailable.", });
          } else {
            setLoading(false);
            setHelloFromServer({ error: response.response?.data?.error, });
          }
        } else {
          setLoading(false);
          setHelloFromServer({ error: response.message, });
        }
      } else {
        setLoading(false);
        setHelloFromServer(response?.data);
      }
    } catch (err) {
      setLoading(false);
      if (err instanceof Error) {
        setHelloFromServer({ error: err.message });
      }
    }
  };

  return (
    <HelloFromServerContext.Provider 
      value={{
        helloFromServer,
        getHelloFromServer,
        loading,
      }}
    >
      {children}
    </HelloFromServerContext.Provider>
  );
};

export default HelloFromServerProvider;

export const useHelloFromServer = () => useContext(HelloFromServerContext);