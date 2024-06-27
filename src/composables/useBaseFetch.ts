export interface SearchParameters {
  [key: string]: any;
}
export interface FetchBaseOption {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: RequestInit["body"] | Record<string, any>;
  params?: SearchParameters;
  query?: SearchParameters;
  headers?: HeadersInit;
}

export interface IResultApi {
  statusCode: number;
  message: string;
}

export const useBaseFetch = async (
  url: string,
  option: FetchBaseOption
): Promise<any> => {
  const config = useRuntimeConfig();
  try {
    const res = await $fetch(url, {
      baseURL: config.public.apiBase,
      headers: {
        "Content-type": "application/json",
      },
      ...option,
    });
    return [res, null];
  } catch (error: any) {
    const errorData = error.response?._data as IResultApi;
    return [null, errorData.message];
  }
};

export const sendGet = async (link: string, option?: FetchBaseOption) => {
  const res = await useBaseFetch(link, {
    method: "GET",
    ...option,
  });
  return res;
};

export const sendPost = async (
  link: string,
  body: RequestInit["body"] | Record<string, any>,
  option?: FetchBaseOption
) => {
  return await useBaseFetch(link, {
    method: "POST",
    body,
    ...option,
  });
};

export const sendPut = async (
  link: string,
  body: RequestInit["body"] | Record<string, any>,
  option?: FetchBaseOption
) => {
  return await useBaseFetch(link, {
    method: "PUT",
    body,
    ...option,
  });
};

export const sendPatch = async (
  link: string,
  body: RequestInit["body"] | Record<string, any>,
  option?: FetchBaseOption
) => {
  return await useBaseFetch(link, {
    method: "PATCH",
    body,
    ...option,
  });
};

export const sendDelete = async (link: string, option?: FetchBaseOption) => {
  return await useBaseFetch(link, {
    method: "DELETE",
    ...option,
  });
};
