export type PaginatedInfo = {
  seed: string;
  results: number;
  page: number;
  version: string;
};

export type PaginatedResponse<T> = {
  results: T[];
  info: PaginatedInfo;
};

export type Login = {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
};

export type Picture = {
  large: string;
  medium: string;
  thumbnail: string;
};

export type Name = {
  title: string;
  first: string;
  last: string;
};

export type Street = {
  number: number;
  name: string;
};

export type Location = {
  street: Street;
  city: string;
  state: string;
  country: string;
};

export type Id = {
  name: string;
  value: string;
};
