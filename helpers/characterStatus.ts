function getStatusClassName(status: string) {
  let className = "";

  if (status === "Alive") {
    className =
      "inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
  } else if (status === "Pending") {
    className =
      "inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
  } else if (status === "Dead") {
    className =
      "inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white";
  }

  return className;
}

export default getStatusClassName;
