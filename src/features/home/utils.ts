export const getGreeting = (name: string) => {
  const hour = new Date().getHours();
  if (hour < 12) return `Buenos días, ${name}`;
  if (hour < 18) return `Buenas tardes, ${name}`;
  return `Buenas noches, ${name}`;
};

export const getCurrentDate = () => {
  const date = new Date();
  return date.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
};
