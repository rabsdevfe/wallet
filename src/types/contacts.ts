import { Person } from "./Person";
import { PaginatedResponse } from "./types";

export type Contact = Pick<Person, "name" | "login" | "picture">;

export type ContactsResponse = PaginatedResponse<Contact>;
