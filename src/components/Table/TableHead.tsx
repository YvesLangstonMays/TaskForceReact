const TableHead = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor }) => {
          return <th key={accessor}></th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
