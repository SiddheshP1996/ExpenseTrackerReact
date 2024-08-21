import { useLocaleStorage } from "./useLocaleStorage";

export function useFilter(dataList, callback) {
  const [query, setQuery] = useLocaleStorage("query", "");
  const filteredData = dataList.filter((data) =>
    callback(data).toLowerCase().includes(query)
  );

  return [filteredData, setQuery];
}
