import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";

const ListTransitionBox = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/List/")
      .then((data) => data.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="listDiv">
        <table className="listTable">
          <thead>
            <tr className="listRow">
              <th>uuid</th>
              <th>Site Name</th>
              <th>Address</th>
              <th>City</th>
              <th>County</th>
              <th>ZIP</th>
              <th>Site Type</th>
              <th>Latitude</th>
              <th>Longitude</th>
            </tr>
          </thead>
          <tbody>
            {data.map(
              (item: {
                title:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
              }) => (
                <tr>
                  <td scope="row">{item.title}</td>
                  <td scope="row"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListTransitionBox;
