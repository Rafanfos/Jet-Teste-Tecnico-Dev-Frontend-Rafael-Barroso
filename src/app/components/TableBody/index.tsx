import ActionsColumn from "./Columns/ActionsColumn";
import CarColumn from "./Columns/CarColumn";
import RatingColumn from "./Columns/RatingColumn";
import ReserveColumn from "./Columns/ReserveColumn";
import StatusColumn from "./Columns/StatusColumn";

const TableBody = () => {
  const smallScreenRows = [0, 1, 2];
  const bigScreenRows = [0, 1, 2, 3, 4, 5];

  return (
    <>
      {smallScreenRows.map((number) => (
        <tr key={number} className="bg-white sm:hidden p-4">
          <CarColumn />

          <div className="flex flex-col">
            <span className="font-semibold text-[#111928] text-[14px]">
              Mini cooper 2020
            </span>
            <ReserveColumn />
            <RatingColumn />
          </div>

          <ActionsColumn />
        </tr>
      ))}

      {bigScreenRows.map((number) => (
        <tr key={number} className="bg-white hidden sm:flex">
          <CarColumn />
          <ReserveColumn />
          <StatusColumn />
          <RatingColumn />
          <ActionsColumn />
        </tr>
      ))}
    </>
  );
};

export default TableBody;
