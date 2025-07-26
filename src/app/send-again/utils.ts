import { Contact } from "@/types/contacts";

type buildProcessTransferPayload = {
  contact: Contact | null;
  amount: number;
  description: string;
};
export function buildProcessTransferPayload({
  contact,
  amount,
  description,
}: buildProcessTransferPayload) {
  if (!contact) {
    return undefined;
  }
  return {
    amount,
    description,
    user_name: contact.name.first,
    user_id: contact.id.value,
    picture_path: contact.picture.thumbnail,
  };
}
