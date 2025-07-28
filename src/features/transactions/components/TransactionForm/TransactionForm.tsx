import { useForm, useWatch } from "react-hook-form";
import { FormData } from "./types";
import { FORM_NAMES } from "./contants";
import { buildProcessTransferPayload } from "../../utils";
import { useProcessTransfer } from "../../hooks/useProcessTransfer";
import { useBalanceStore } from "@/features/balance";
import { useContactsStore } from "@/features/contacts";
import { Button } from "@/components/ui";
import styles from "./styles.module.css";
import { useState } from "react";

function TransactionForm() {
  const selectedContact = useContactsStore((state) => state.selectedContact);
  const { balance } = useBalanceStore((state) => state);
  const [insufficientBalanceMessage, setInsufficientBalanceMessage] =
    useState("");

  const {
    mutate: processTransfer,
    isPending,
    isError,
    error,
  } = useProcessTransfer();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
    setValue,
    control,
    clearErrors,
  } = useForm<FormData>({
    defaultValues: {
      amount: "",
      description: "",
    },
    mode: "onChange",
  });
  const [amountValue, setAmountValue] = useState("");
  const amount = useWatch({
    control,
    name: FORM_NAMES.amount,
  });
  console.log("amount", amount);

  const onSubmit = (data: FormData) => {
    const numericAmount = parseFloat(data.amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      return;
    }

    const payload = buildProcessTransferPayload({
      contact: selectedContact,
      amount: numericAmount,
      description: data.description,
    });

    if (!payload) {
      return;
    }

    processTransfer(payload);
    reset();
  };

  console.log("errors", errors);
  console.log("isValid", isValid);

  if (!balance?.balance) {
    return <div>No balance</div>;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-[32px] w-full h-full justify-between"
    >
      <div
        className={`w-full ${
          isSubmitting ? "opacity-50 transition-opacity" : ""
        }`}
      >
        <div className={styles.inputContainer}>
          <label
            htmlFor="amount"
            className="block text-center text-[20px] text-[#121212] font-medium mb-2"
          >
            Set Amount
          </label>
          <input
            id="amount"
            type="number"
            step="0.01"
            min="0"
            {...register(FORM_NAMES.amount, {
              required: "Amount is required",
              min: { value: 0.01, message: "Amount must be greater than 0" },
              max: {
                value: balance.balance,
                message: "Insufficient balance",
              },
            })}
            className={`${
              styles.input
            } text-[32px] text-[#121212] max-w-[275px] 
            text-center ${
              errors[FORM_NAMES.amount] ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="0.00"
            disabled={isPending}
            // onChange={(e) => {
            //   const numericValue = parseFloat(e.target.value);
            //   const isValidFormat = /^\d*\.?\d{0,2}$/.test(e.target.value);
            //   if (!isValidFormat) {
            //     return;
            //   }
            //   if (numericValue > balance.balance!) {
            //     const trimmedValue = e.target.value.replace(/\.$/, "");

            //     setValue(FORM_NAMES.amount, trimmedValue);
            //     setInsufficientBalanceMessage(
            //       `Please enter an amount less than ${balance.balance}`
            //     );
            //     return;
            //   }
            //   setInsufficientBalanceMessage("");
            // }}
          />
        </div>
        {errors[FORM_NAMES.amount] && (
          <p className="text-red-500 text-sm mt-1">
            {errors[FORM_NAMES.amount]?.message}
          </p>
        )}

        {insufficientBalanceMessage && (
          <p className="text-red-500 text-sm mt-1">
            {insufficientBalanceMessage}
          </p>
        )}

        <div className="w-full">
          <label
            htmlFor="description"
            className="block text-sm font-medium mb-2"
          >
            Note (optional)
          </label>
          <textarea
            id="description"
            {...register(FORM_NAMES.description)}
            className={`w-full p-3  ${styles.textarea} ${
              errors[FORM_NAMES.description]
                ? "border-red-500"
                : "border-gray-300"
            }`}
            placeholder="for food"
            rows={3}
            disabled={isPending}
          />
          {errors[FORM_NAMES.description] && (
            <p className="text-red-500 text-sm mt-1">
              {errors[FORM_NAMES.description]?.message}
            </p>
          )}
        </div>
      </div>

      {isError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">
            Error:{" "}
            {error?.message ||
              "Something went wrong with the transfer, please try again"}
          </p>
        </div>
      )}

      <Button
        variant="primary"
        disabled={isPending || isSubmitting || !isValid}
      >
        {isPending || isSubmitting ? "Processing..." : "Proceed to Transfer"}
      </Button>
    </form>
  );
}

export { TransactionForm };
