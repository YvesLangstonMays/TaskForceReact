import { useEffect, useState } from "react";
import SortSelector from "./SortSelector";
import Listdata from "../data/Finals.json";

const ListTransitionBox = (props: any) => {
  const { setHomeIsActive, setListIsActive, setZipButtonID } = props;
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
        console.log(error);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(error);
  console.log(data);
  console.log(loading);

  return (
    <>
      <div className="sortDiv">
        <SortSelector
          setZipButtonID={setZipButtonID}
          setHomeIsActive={setHomeIsActive}
          setListIsActive={setListIsActive}
          data={Listdata}
        ></SortSelector>
      </div>
    </>
  );
};

export default ListTransitionBox;
