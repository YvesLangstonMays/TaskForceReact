import { useEffect, useState } from "react";

const [data, setData] = useState(null);
const [loading, setLoading] = useState(null);
const [error, setError] = useState(null);

const ListTransitionBox = () => {
  useEffect(() => {
    fetch("http://127.0.0.1:8000/List/").then((response) =>
      console.log(response)
    );
  }, []);

  return (
    <>
      <table>
        <caption>Site List</caption>
        <thead>
          <tr>
            <th>{}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ListTransitionBox;
