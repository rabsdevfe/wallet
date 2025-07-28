import { AvatarUser } from "@/components/ui";
import { TransactionForm } from "../TransactionForm";
import { useContactsStore } from "@/features/contacts";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function SendAgainView() {
  const router = useRouter();
  const selectedContact = useContactsStore((state) => state.selectedContact);

  useEffect(
    function redirectIfNoContact() {
      if (!selectedContact) {
        router.push("/");
      }
    },
    [selectedContact, router]
  );
  return (
    <div className="flex flex-col items-center gap-[20px] h-full pb-[50px]">
      <AvatarUser
        url={selectedContact?.picture.large || ""}
        name={`${selectedContact?.name.first} `}
      />
      <TransactionForm />
    </div>
  );
}

export { SendAgainView };
