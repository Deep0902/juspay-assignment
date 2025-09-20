export function truncateText(text, maxLength = 25) {
  if (typeof text !== "string") return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

export function generateNewRow(currentData, statusOptions, projectOptions) {
  let lastIdNum = 9800;
  if (currentData.length > 0) {
    const lastId = currentData[currentData.length - 1].id;
    const match = lastId.match(/#CM(\d+)/);
    if (match) lastIdNum = parseInt(match[1], 10);
  }
  const newId = `#CM${lastIdNum + 1}`;
  return {
    id: newId,
    user: {
      name: "New User",
      avatar: "/contacts/Contact3.svg",
    },
    project: projectOptions[Math.floor(Math.random() * projectOptions.length)],
    address: "New Address",
    date: "Just now",
    status: "In Progress",
  };
}

export function iconPath(iconName, theme) {
  return `/${theme}/${iconName}`;
}

export function getIconPath(iconName, theme) {
  return iconPath(iconName, theme);
}
