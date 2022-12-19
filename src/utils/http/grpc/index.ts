import { Interceptor, createPromiseClient, createConnectTransport } from '@bufbuild/connect-web';
import { ServiceType } from '@bufbuild/protobuf';
import { useGlobSetting } from '/@/hooks/setting';

const globSetting = useGlobSetting();

function createTransport() {
  const logger: Interceptor = (next) => async (req) => {
    console.log(`sending message to ${req.url}`);
    const res = await next(req);

    if (res.stream) {
      // to intercept streaming response messages, we override
      // the read() method of the response
      return {
        ...res,
        async read() {
          console.log('message received');
          return await res.read();
        },
      };
    }

    console.log('message:', res.message);
    return res;
  };

  return createConnectTransport({
    baseUrl: globSetting.apiUrl,
    interceptors: [logger],
  });
}

function createClient<T extends ServiceType>(service: T) {
  return createPromiseClient(service, createTransport());
}

export const initClient = createClient;
