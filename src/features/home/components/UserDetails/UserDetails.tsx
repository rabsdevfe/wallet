"use client";
import { useUserDetails } from "../../hooks/useUserDetails";
import { getCurrentDate, getGreeting } from "../../utils";
import styles from "./styles.module.css";

function UserDetails() {
  const { user, balance, isLoading } = useUserDetails();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {user && (
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={user.picture.thumbnail}
                  alt={`${user.name.first} ${user.name.last}`}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h1 className="text-white font-medium tracking-tight text-lg">
                    {getGreeting(user.name.first)}
                  </h1>
                  <p className="text-white/70 text-sm font-medium">
                    {user.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {balance && (
        <div
          className={`bg-white/10 backdrop-blur-sm rounded-2xl ${styles.balanceBox}`}
        >
          <div className="space-y-2">
            <p className="text-white/70 text-sm font-medium">
              Balance disponible
            </p>
            <div className="text-white text-4xl font-medium tracking-tight">
              ${balance.balance.toLocaleString()}
            </div>
            <div className="flex items-center justify-center gap-2 pt-2">
              <p className="text-white/60 text-xs">
                Última actualización:{" "}
                {new Date(balance.last_modification_date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { UserDetails };
