// import { PLATFORM_TYPE } from "@/helpers/constants.helpers";

export type Nullable<T> = T | null;

export type ApiError = {
    success: false;
    message?: string;
    errors?: {
      message: string;
    }[];
};

export type ApiSuccess = {
    success: true;
};

export type ApiResponse<TPayload = unknown, TAttrName extends string = 'data'> = Record<
  TAttrName,
  TPayload
> &
  ApiSuccess;

export type IUser = {
    email: string;
    firstname: string;
    lastname: string;
    name: string;
    picture: string;
    github?: string;
    linkedin?: string;
}
export type IReviewDetail = {
    content: string;
    score: number;
    reviewer_id: string;
    reviewer_info: {
        picture: string;
        username: string;
    }
}

export type IReview = {
    username: string;
    picture: string;
    platform: string;
    link: string;
    avgscore: number;
    reviews: Array<IReviewDetail>;
    createdAt: string;
}

export type LoginRequest = {
    email: string;
    firstname: string;
    lastname: string;
    name: string;
    picture: string;
    type: string;
    token: string;
};
  
export type LoginResponse = ApiResponse<IUser, 'user'> & {
    jwtToken: string;
};

export type DummyReviewDataResponse = {
    data: Array<IReview>,
    count: number;
}

export type ReviewRequest = {
    platform: string;
    text: string;
    link: string;
    score: number;
};

export type DummyReviewDataRequest = {
    skip: number;
    index: number;
    searchText: string;
}