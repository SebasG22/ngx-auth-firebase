import { Action } from '@ngrx/store';

export const SIGN_UP_USER = '[ AUTH ] -  Sign up user';
export const SIGN_UP_USER_SUCCESS = '[ AUTH ] - Sign up user success';
export const SIGN_UP_USER_ERROR = '[ AUTH ] - Sign up user error';

export const LOGIN_USER = '[ AUTH ] - Login user';
export const LOGIN_USER_SUCCESS = '[ AUTH ] - Login User Success';
export const LOGIN_USER_ERROR = '[ AUTH ] - Login User Error';

export class signup_user implements Action {
  public readonly type = SIGN_UP_USER;
  public constructor() { }
}

export class signup_user_success implements Action {
  public readonly type = SIGN_UP_USER_SUCCESS;
  public constructor() { }
}

export class signup_user_error implements Action {
  public readonly type = SIGN_UP_USER_ERROR;
  public constructor() { }
}

export class loginUser implements Action {
  public readonly type = LOGIN_USER;
  public constructor() { }
}

export class loginUser_success implements Action {
  public readonly type = LOGIN_USER_SUCCESS;
}

export class loginUser_error implements Action {
  public readonly type = LOGIN_USER_ERROR;
}

export type All =
  signup_user |
  signup_user_success |
  signup_user_error |
  loginUser |
  loginUser_success |
  loginUser_error;