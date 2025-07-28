import type { Transaction } from "./types";
import { Contact } from "@/types/contacts";

function buildTransactionName(
  transactionType: Transaction["type"],
  serviceName: Transaction["service_name"]
) {
  switch (transactionType) {
    case "payment":
      return serviceName || "Payment";
    case "deposit":
      return "CashIn";
    case "transfer":
    default:
      return "Transfer";
  }
}

function buildTransactionAmount(
  transactionType: Transaction["type"],
  amount: Transaction["amount"]
) {
  switch (transactionType) {
    case "payment":
    case "transfer":
      return `-$${amount}`;
    case "deposit":
      return `$${amount}`;
  }
}

type buildProcessTransferPayload = {
  contact: Contact | null;
  amount: number;
  description: string;
};
function buildProcessTransferPayload({
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

export {
  buildTransactionName,
  buildTransactionAmount,
  buildProcessTransferPayload,
};
