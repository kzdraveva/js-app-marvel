import { apiEndpoint } from '../constants/global';
import md5 from 'md5';

export const fetcher = async (url: string, args?: object) => {
  const publickey = '9b0d08ff4212f0dc2553f1cade091f4f';
  const privatekey = 'b92a930f299cb35ed0c39b046a286214331c43e5';
  const ts = new Date().getTime();
  const stringToHash = ts + privatekey + publickey;
  const hash = md5(stringToHash);

  const additionalInfo = 'ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;

  const res = await fetch(apiEndpoint + url + additionalInfo, args);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text);
  }

  if (res.status === 204) {
    return null;
  }

  return await res.json();
};
