import { toast } from 'react-toastify';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
const API_PREFIX = 'https://api.culero.com/api';
import { setAuthToken, setDummyReviewData, setTotalDummyReviewCount, setUser } from './status';
import { ApiError, DummyReviewDataRequest, DummyReviewDataResponse, LoginRequest, LoginResponse, ReviewRequest } from './interface';

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
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (creds) => ({
        body: creds,
        method: 'POST',
        url: '/auth/login',
        headers: getHeadersFromToken('', true),
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const {
            data: {
              user,
              jwtToken
            }
          } = await queryFulfilled;
          dispatch(setAuthToken(jwtToken));
          dispatch(setUser(user));

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
    getDummyReviewData: builder.mutation<DummyReviewDataResponse, { payload: DummyReviewDataRequest, token: string }>({
      query: ({payload, token}) => ({
        body: payload,
        method: 'POST',
        url: '/review/getRecentReview',
        headers: getHeadersFromToken(token, true),
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const {
            data: {
              data,
              count
            }
          } = await queryFulfilled;
          dispatch(setDummyReviewData(data));
          dispatch(setTotalDummyReviewCount(count));
        } catch (e: any) {
          displayError(e, 'Error while logging in');
        }
      },
      transformErrorResponse(err) {
        return err.data;
      },
    }),
    addReview: builder.mutation<boolean, { payload: ReviewRequest, token: string }>({
      query: ({ payload, token }) => ({
        body: payload,
        method: 'POST',
        url: '/review/addReview',
        headers: getHeadersFromToken(token, true),
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;

          toast('Added review successfully', {
            position: 'top-right',
            closeButton: false,
          });
        } catch (e: any) {
          displayError(e, 'Error while adding your review');
        }
      },
      transformErrorResponse(err) {
        return err.data;
      },
    }),
  })
})


