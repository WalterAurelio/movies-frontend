export type LogInResponse = {
  accessToken: string;
  roles: number[];
}

export type ApiResponse<T> = {
  success: boolean;
  data: T
};
