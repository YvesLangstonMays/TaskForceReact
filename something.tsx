import axios from "axios";
function componentDidMount() {
  let data;
  axios.get("http://localhost:8000").then((res) => {
    data = res.data;
    this.setState({ details: data });
  });
}
