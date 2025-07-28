"use client";
import { AvatarUser } from "../AvatarUser";
import { Contact } from "@/types/contacts";

interface Props {
  contacts: Contact[];
  onSelect: (contact: Contact) => void;
}
function UserSliders({ contacts, onSelect }: Props) {
  if (!contacts) return null;

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-6 pb-4 scrollbar-hide">
        {" "}
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            onClick={() => onSelect(contact)}
          >
            <AvatarUser
              url={contact.picture.medium}
              name={`${contact.name.first}`}
              size="md"
              orientation="vertical"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export { UserSliders };
