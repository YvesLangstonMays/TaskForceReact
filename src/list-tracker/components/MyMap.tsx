interface MyMap {
  lat: number;
  lng: number;
  text: string;
}

const MyMap = ({ text }: MyMap) => <div>{text}</div>;

export default MyMap;
