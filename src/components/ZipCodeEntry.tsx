import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import MapComponent from "./MapComponent";
import Button from "@mui/material/Button";

const schema = z.object({
  zipCode: z
    .number({
      invalid_type_error: "A zip code is required to complete the search.",
    })
    .positive()
    .finite()
    .safe()
    .min(71854, { message: "A five digit zip code is required" })
    .int()
    .lte(79902, { message: "Zip code must be five numbers or less" }),
});

type FormData = z.infer<typeof schema>;

// Change zipCodeEntry props from any; create new type

const ZipCodeEntry = (props: any) => {
  const [dataList, setDataList] = useState([]);
  const { zipButtonID, setZipButtonID } = props;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (zipButtonID) {
      onSubmit({ zipCode: zipButtonID });
    } else {
      console.log("zipButton ID reset");
    }
  }, [zipButtonID]);

  const onSubmit = (data: FieldValues) => {
    console.log("DATA---------", data, zipButtonID);
    const theURL = "http://127.0.0.1:8000/getaddress/";
    const urlToFetch = `${theURL}${data.zipCode}`;

    fetch(urlToFetch, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => {
        setDataList(data);
        setZipButtonID("");
        if (data.length == 0) {
          alert(
            "No sites found in this zipcode. Please try a different zipcode.\n\n\nNo se encontró ninguna ubicación. Intente con un código postal diferente."
          );
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {dataList && <MapComponent passedComp={dataList} />}
        <div className="mb-3">
          <label htmlFor="zipCode" className="form-label">
            Zipcode/Postal
          </label>
          <input
            {...register("zipCode", { valueAsNumber: true })}
            id="zipCode"
            type="number"
            className="form-control"
          />

          {errors.zipCode && <p>{errors.zipCode.message}</p>}

          <Button
            variant="contained"
            disabled={!isValid}
            color="success"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default ZipCodeEntry;
