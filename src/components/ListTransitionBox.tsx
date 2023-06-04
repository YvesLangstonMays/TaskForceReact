import { useEffect, useState } from "react";

const ListTransitionBox = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/List/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => data.json())
      .then((data) => {
        setData(data);
        setError(null);
        console.log(data);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="App">
        <h1>API Posts</h1>
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <ul>
          {data &&
            data.map(({ id, title }) => (
              <li key={id}>
                <h3>{title}</h3>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default ListTransitionBox;
