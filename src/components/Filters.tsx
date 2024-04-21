type FiltersType = {
  addParams: (key: string, value: string) => void;
  nameFilter: string;
  pcOnlyFilter: string;
};

export default function Filters({
  addParams,
  nameFilter,
  pcOnlyFilter,
}: FiltersType) {
  console.log(pcOnlyFilter);

  return (
    <>
      <form className="flex flex-col">
        <div className="grid grid-cols-2 justify-items-start items-center">
          <label htmlFor="search">Title</label>
          <input
            type="text"
            id="search"
            value={nameFilter}
            onChange={(e) => {
              addParams("q", e.target.value);
            }}
          />
        </div>
        <div className="grid grid-cols-2 justify-items-start items-center">
          <label htmlFor="filter">Only Computer Items</label>
          <input
            type="checkbox"
            id="filter"
            checked={pcOnlyFilter === "true"}
            onChange={(e) => {
              addParams("pcOnly", e.target.checked.toString());
            }}
          />
        </div>
      </form>
    </>
  );
}
