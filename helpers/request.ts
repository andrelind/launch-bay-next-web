import { getSession } from 'next-auth/react';

export const baseURL = 'https://api.launchbaynext.app';
console.log({ baseURL });

export interface ResponseError extends Error {
  status?: number;
}

const getHeaders = async () => {
  const session = await getSession();

  return {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      //@ts-ignore
      Authorization: `Bearer ${session?.user.jwt}`,
    },
  };
};

const createRequest = async <T>(
  url: string,
  method: string,
  request?: any
): Promise<T> => {
  const headers = await getHeaders();
  const fullUrl = `${baseURL}${url}`;
  console.log(fullUrl, method);

  const r = await fetch(fullUrl, {
    ...headers,
    method,
    body: request ? JSON.stringify(request) : undefined,
  });

  if (r.status >= 200 && r.status < 300) {
    const contentType = r.headers.get('content-type');
    if (contentType && contentType.indexOf('application/json') !== -1) {
      return r.json();
    }
    // @ts-ignore
    return r.text();
  } else {
    try {
      const json = await r.json();
      const error = new Error(json.message || r.statusText) as ResponseError;
      error.status = r.status;
      throw error;
    } catch (e) {
      const error = new Error(
        (e as Error)?.message || r.statusText
      ) as ResponseError;
      error.status = r.status;
      throw error;
    }
  }
};

export const get = async <T>(url: string): Promise<T> =>
  createRequest(url, 'GET');

export const post = async <T>(url: string, request?: any): Promise<T> =>
  createRequest(url, 'POST', request);

export const put = async <T>(url: string, request?: any): Promise<T> =>
  createRequest(url, 'PUT', request);

export const del = async <T>(url: string): Promise<T> =>
  createRequest(url, 'DELETE');
