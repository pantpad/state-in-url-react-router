type FiltersType = {
  addParams: (key: string, value: string) => void;
};

export default function Filters({ addParams }: FiltersType) {
  return (
    <>
      <form className="flex flex-col">
        <div className="grid grid-cols-2 justify-items-start items-center">
          <label htmlFor="search">Title</label>
          <input
            type="text"
            id="search"
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
            onChange={(e) => {
              addParams("pcOnly", e.target.checked.toString());
            }}
          />
        </div>
      </form>
    </>
  );
}
