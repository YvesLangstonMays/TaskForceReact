import data from "../data/Finals.json";

function addUniqueId(
  data: (
    | {
        uuid: string;
        "Site Name": string;
        "Address 1": string;
        City: string;
        County: string;
        ZIP: number;
        site_type: string;
      }
    | {
        uuid: string;
        "Site Name": string;
        "Address 1": string;
        City: string;
        County: string;
        ZIP: null;
        site_type: string;
      }
    | {
        uuid: string;
        "Site Name": string;
        "Address 1": string;
        City: string;
        County: string;
        ZIP: number;
        site_type?: undefined;
      }
  )[]
) {
  let index = 0;
  for (let key in data) {
    data[key].ZIP = index++;
  }
  return data;
}
const resultObject = addUniqueId(data);
console.log(resultObject);
