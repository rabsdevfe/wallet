import { Login, Name, PaginatedResponse, Picture } from "./types";

export type Contact = {
  name: Name;
  login: Login;
  picture: Picture;
};

export type ContactsResponse = PaginatedResponse<Contact>;
