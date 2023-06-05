import { useEffect, useState } from "react";
import SortSelector from "./SortSelector";
import Listdata from "../data/Finals.json";

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

  return (
    <>
      <div className="sortDiv">
        <SortSelector data={Listdata}></SortSelector>
      </div>
    </>
  );
};

export default ListTransitionBox;
