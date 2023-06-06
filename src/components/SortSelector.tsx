import { MouseEventHandler, useCallback, useState } from "react";
import data from "../data/Finals.json";

type Data = typeof data;

type SortKeys = keyof Data[0];

type SortOrder = "ascn" | "desc";

function sortData({
  tableData,
  sortKey,
  reverse,
}: {
  tableData: Data;
  sortKey: SortKeys;
  reverse: boolean;
}) {
  if (!sortKey) return tableData;

  const sortedData = data.sort((a, b) => {
    return a[sortKey] > b[sortKey] ? 1 : -1;
  });

  if (reverse) {
    return sortedData.reverse();
  }

  return sortedData;
}

function SortButton({
  sortOrder,
  columnKey,
  sortKey,
  onClick,
}: {
  sortOrder: SortOrder;
  columnKey: SortKeys;
  sortKey: SortKeys;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className={`${
        sortKey === columnKey && sortOrder === "desc"
          ? "sort-button sort-reverse"
          : "sort-button"
      }`}
    >
      ▲
    </button>
  );
}

function SortSelector({
  data,
  setHomeIsActive,
  setListIsActive,
  setZipButtonID,
}: {
  data: Data;
  setHomeIsActive: (state: Number) => {};
  setListIsActive: (state: Number) => {};
  setZipButtonID: (state: Number) => {};
}) {
  const [sortKey, setSortKey] = useState<SortKeys>("ZIP");
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");
  const headers: { key: SortKeys; label: string }[] = [
    { key: "ZIP", label: "Zip" },
    { key: "County", label: "County" },
    { key: "City", label: "City" },
    { key: "Address", label: "Address" },
    { key: "SiteName", label: "Clinic Name" },

    { key: "site_type", label: "Clinic Type" },
  ];

  const sortedData = useCallback(
    () => sortData({ tableData: data, sortKey, reverse: sortOrder === "desc" }),
    [data, sortKey, sortOrder]
  );

  function changeSort(key: SortKeys) {
    setSortOrder(sortOrder === "ascn" || sortKey !== key ? "desc" : "ascn");

    setSortKey(key);
  }

  // replace any below
  function changeActive(event: any) {
    setListIsActive(0);
    setHomeIsActive(1);
    console.log("Setting zipButtonID", event.currentTarget.id);
    setZipButtonID(event.currentTarget.id);
  }

  return (
    <table>
      <thead className="content-table">
        <tr>
          {headers.map((row) => {
            return (
              <th key={row.key}>
                {row.label}{" "}
                <SortButton
                  columnKey={row.key}
                  onClick={() => changeSort(row.key)}
                  {...{
                    sortOrder,
                    sortKey,
                  }}
                />
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {sortedData().map((location) => {
          return (
            <tr key={location.ZIP}>
              <td>
                <button
                  id={location.ZIP.toString()}
                  data-loc={location.ZIP}
                  className="btn btn-success"
                  onClick={(event) => changeActive(event)}
                >
                  {location.ZIP}
                </button>
              </td>
              <td>{location.County}</td>
              <td>{location.City}</td>
              <td>{location.Address}</td>
              <td>{location.SiteName}</td>
              <td>{location.site_type}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SortSelector;
