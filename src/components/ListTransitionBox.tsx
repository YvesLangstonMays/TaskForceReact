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
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const uuid = [data[0]];
  console.log(uuid);

  return (
    <>
      <div className="listDiv"></div>
    </>
  );
};

export default ListTransitionBox;
