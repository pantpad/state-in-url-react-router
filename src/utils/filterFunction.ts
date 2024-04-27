import { listItem } from "../mockItems/list";

export function filterFunction(
  list: listItem[],
  nameFilter: string | null | undefined,
  pcOnlyFilter: string | null | undefined
) {
  return list.filter((item) => {
    if (nameFilter && pcOnlyFilter === "true") {
      return (
        item.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
        item.type === "pc"
      );
    }
    if (nameFilter)
      return item.name.toLowerCase().includes(nameFilter.toLowerCase());

    if (pcOnlyFilter === "true") return item.type === "pc";

    return true;
  });
}
