import { formatDate } from "@/utils/dateFormatter";
import { formatTime } from "@/utils/dateFormatter";
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
    user_last_name: contact.name.last,
  };
}

function buildTransactionDetails(transaction?: Transaction | null) {
  if (!transaction) {
    return [];
  }
  const details = [
    { key: "Payment", value: `$${transaction.amount}` },
    { key: "Date", value: formatDate(transaction.createdAt) },
    { key: "Time", value: formatTime(transaction.createdAt) },
    { key: "Type", value: transaction.type },
    { key: "Reference Number", value: `#${transaction.reference_number}` },
  ];

  if (transaction.description) {
    details.splice(1, 0, {
      key: "Description",
      value: transaction.description,
    });
  }
  return details;
}

const generateReferenceNumber = (): string => {
  return Math.floor(1000000 + Math.random() * 9000000).toString();
};

export {
  buildTransactionName,
  buildTransactionAmount,
  buildProcessTransferPayload,
  buildTransactionDetails,
  generateReferenceNumber,
};
