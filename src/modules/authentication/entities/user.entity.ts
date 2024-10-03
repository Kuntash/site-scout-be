export type LoginUserPayload = {
  email: string;
  password: string;
};

export type AuthJWTPayload = {
  userId: string;
};
