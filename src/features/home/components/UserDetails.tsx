import { useUserDetails } from "../hooks/useUserDetails";

function UserDetails() {
  const { user, balance, isLoading } = useUserDetails();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-6 py-8">
      {user && (
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={user.picture.thumbnail}
              alt={`${user.name.first} ${user.name.last}`}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h1 className="text-xl font-semibold">
                Hola, {user.name.first} {user.name.last}
              </h1>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>
      )}

      {balance && (
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-medium mb-2">Balance disponible</h2>
          <p className="text-3xl font-bold text-blue-600 mb-2">
            ${balance.balance.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">
            Última actualización:{" "}
            {new Date(balance.last_modification_date).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
}

export { UserDetails };
