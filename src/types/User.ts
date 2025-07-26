import { PaginatedResponse } from "./types";
import { Person } from "./Person";

export type User = Person;
export type UserResponse = PaginatedResponse<User>;
