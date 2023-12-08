import { toast } from 'react-toastify';
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const API_PREFIX = 'http://localhost:3001/api';
import { setUserName } from './status';

export type ApiError = {
  success: false;
  message?: string;
  errors?: {
    message: string;
  }[];
}

export const displayError = (
    err: ApiError | undefined,
    defaultMessage = 'Error while sending the request',
  ) => {
    if (err?.errors?.length) {
      toast(err.errors[0].message, {
        type: 'error',
      });
    } else if (err?.message) {
      toast(err.message, {
        type: 'error',
      });
    } else if ((err as any)?.error?.message) {
      toast((err as any).error.message, {
        type: 'error',
      });
    } else {
      toast(defaultMessage, {
        type: 'error',
      });
    }
};

function getHeadersFromToken(token: string, json?: boolean) {
    const headers: Record<string, string> = {};
    if (json) headers['Content-Type'] = 'application/json';
    if (token) headers['Authorization'] = `Bearer ${token}`;
    return headers;
}

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: API_PREFIX }),
    tagTypes: ['auth'],
    endpoints: (builder) => ({
        login: builder.mutation<boolean, string>({
            query: (creds) => ({
              body: creds,
              method: 'POST',
              url: '/auth/login',
              headers: getHeadersFromToken('', true),
            }),
            async onQueryStarted(_, { queryFulfilled, dispatch }) {
              try {
                await queryFulfilled;
                // dispatch(setToken(token));
                dispatch(setUserName("Test"));
                toast('Logged in successfully', {
                  position: 'top-right',
                  closeButton: false,
                });
              } catch (e: any) {
                displayError(e, 'Error while logging in');
              }
            },
            transformErrorResponse(err) {
              return err.data;
            },
          }),
    })
})


