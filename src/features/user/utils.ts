import { Person } from "@/types/Person";

function buildUserProfileData(user?: Person | null) {
  if (!user) return [];
  return [
    {
      key: "City",
      value: user.location.city,
    },
    {
      key: "State",
      value: user.location.state,
    },
    {
      key: "Street",
      value: user.location.street.name,
    },
    {
      key: "Email",
      value: user.email,
    },
    {
      key: "Phone",
      value: user.phone,
    },
  ];
}

export { buildUserProfileData };
