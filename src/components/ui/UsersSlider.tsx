import { AvatarUser } from "./AvatarUser";
import { Contact } from "@/types/contacts";

interface Props {
  contacts: Contact[];
}
export function UserSliders({ contacts }: Props) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-6 pb-4">
        {" "}
        {contacts.map((contact, index) => (
          <div key={index} className="flex-shrink-0">
            <AvatarUser
              url={contact.picture.thumbnail}
              name={`${contact.name.first}`}
              size="sm"
              orientation="vertical"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
