import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MapTracking from "./MapTracking";

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
let dataList = new Array();

const SubmissionBox = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    const newData = data["zipCode"].toString();
    const theURL = "http://127.0.0.1:8000/getaddress/";
    const urlToFetch = `${theURL}${newData}`;

    fetch(urlToFetch, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => {
        dataList.splice(0);
        dataList.push(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MapTracking passedComp={dataList} />
        <div className="mb-3">
          <label htmlFor="zipCode" className="form-label">
            Zipcode
          </label>
          <input
            {...register("zipCode", { valueAsNumber: true })}
            id="zipCode"
            type="number"
            className="form-control"
          />

          {errors.zipCode && <p>{errors.zipCode.message}</p>}

          <button disabled={!isValid} className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default SubmissionBox;
