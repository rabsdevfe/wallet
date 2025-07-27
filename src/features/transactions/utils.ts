import type { Transaction } from "./types";

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

export { buildTransactionName, buildTransactionAmount };
