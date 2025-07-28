"use client";
import { imageSize, textSize } from "./constants";
interface Props {
  url: string;
  name: string;
  size?: "sm" | "md" | "large";
  orientation?: "horizontal" | "vertical";
  isLoading?: boolean;
}
export function AvatarUser({
  url,
  name,
  size = "md",
  orientation = "vertical",
  isLoading = false,
}: Props) {
  const containerClasses =
    orientation === "horizontal"
      ? "flex flex-row items-center gap-2.5"
      : "flex flex-col items-center gap-2.5";

  if (isLoading || !url || !name) {
    return (
      <div className={containerClasses}>
        <div
          className={`${imageSize[size]} rounded-full bg-gray-200 animate-pulse`}
        />
        <div
          className={`${textSize[size]} bg-gray-200 rounded animate-pulse`}
        />
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      <img
        src={url}
        alt={name}
        className={`${imageSize[size]} rounded-full object-cover`}
      />
      <p className={`${textSize[size]} font-bold text-[#000]`}>{name}</p>
    </div>
  );
}
