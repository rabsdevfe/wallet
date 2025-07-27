export const formatTransactionDate = (date: Date | string): string => {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  return (
    dateObj.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }) +
    " · " +
    dateObj.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );
};
