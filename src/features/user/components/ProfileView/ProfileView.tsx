"use client";
import { AvatarUser, ListDetails } from "@/components/ui";
import { useUserStore } from "@/features/user";
import { buildUserProfileData } from "@/features/user/utils";
import styles from "./styles.module.css";

function ProfileView() {
  const user = useUserStore((state) => state.user);
  const isLoading = useUserStore((state) => state.isLoading);
  const userProfileData = buildUserProfileData(user);

  return (
    <div className="flex flex-col items-center gap-[20px] h-full pb-[50px]">
      <AvatarUser
        url={user?.picture.large || ""}
        name={`${user?.name.first} ${user?.name.last}`}
        size="large"
        isLoading={isLoading}
      />
      <ListDetails list={userProfileData} isLoading={isLoading} />
      <div className="mt-auto w-full">
        <div className={styles.idWrapper}>
          <div>ID</div>
          <div>{user?.login.uuid}</div>
        </div>
      </div>
    </div>
  );
}

export { ProfileView };
