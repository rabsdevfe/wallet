import { Login, Location, Name, Picture } from "./types";

export type Person = {
  name: Name;
  location: Location;
  email: string;
  login: Login;
  picture: Picture;
  phone: string;
};
