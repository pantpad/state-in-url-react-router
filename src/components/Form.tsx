export default function Form() {
  return (
    <>
      <form className="flex flex-col">
        <div className="grid grid-cols-2 justify-items-start items-center">
          <label htmlFor="search">Title</label>
          <input type="text" id="search" />
        </div>
        <div className="grid grid-cols-2 justify-items-start items-center">
          <label htmlFor="filter">Only Computer Items</label>
          <input type="checkbox" id="filter" />
        </div>
      </form>
    </>
  );
}
