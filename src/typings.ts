export enum ResponseStatusEnum {
  SUCCESS = 200,
  ERROR = 500,
  UNAUTHORIZED = 401,
  RESOURCE_CREATED_SUCCESS = 201,
  RESOURCE_CREATED_ERROR = 409,
}

export enum ErrorStatusMessage {
  NO_LOGIN = '尚未登录，请先登录！',
}
