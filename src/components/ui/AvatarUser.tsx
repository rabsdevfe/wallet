interface Props {
  url: string;
  name: string;
  size?: "sm" | "md" | "big";
  orientation?: "horizontal" | "vertical";
}

const imageSize = {
  sm: "w-12 h-12",
  md: "w-16 h-16",
  big: "w-60 h-60",
};

const textSize = {
  sm: "text-base",
  md: "text-sm",
  big: "text-3xl",
};
export function AvatarUser({
  url,
  name,
  size = "md",
  orientation = "vertical",
}: Props) {
  const containerClasses =
    orientation === "horizontal"
      ? "flex flex-row items-center gap-2.5"
      : "flex flex-col items-center gap-2.5";

  return (
    <div className={containerClasses}>
      <img
        src={url}
        alt={name}
        className={`${imageSize[size]} rounded-full object-cover`}
      />
      <p className={`${textSize[size]} font-bold text-center`}>{name}</p>
    </div>
  );
}
