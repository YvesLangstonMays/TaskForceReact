let items: any[];

const ListTransitionBox = () => {
  const getItems = () => {
    fetch("http://127.0.0.1:8000/List/", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => {
        items = data;
        console.log(data);
      })

      .catch((error) => console.log(error));
    return items;
  };

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
