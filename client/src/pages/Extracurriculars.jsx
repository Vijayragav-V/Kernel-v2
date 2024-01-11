import React, { useEffect, useState } from "react";
import Loading from "../components/extracurriculars/Loading";
import Error from "../components/extracurriculars/Error";
import Display from "../components/extracurriculars/Display";
import {
  fetchExtracurriculars,
  fetchExtracurricularCount,
} from "../utils/fetchExtracurricularData";

const Extracurriculars = () => {
  const [extracurricularData, setExtracurricularData] = useState(null);
  const [extracurricularCount, setExtracurricularCount] = useState(null);
  const [dataError, setDataError] = useState(null);

  useEffect(() => {
    fetchExtracurriculars(setExtracurricularData)
      .then((data) => {
        console.log("Data fetched successfully:", data);
      })
      .catch((error) => {
        console.error("Error fetching extracurricular data:", error);
        setDataError(error.message);
      });
  }, []);

  useEffect(() => {
    fetchExtracurricularCount(setExtracurricularCount)
      .then((data) => {
        console.log("Data fetched successfully:", data);
      })
      .catch((error) => {
        console.error("Error fetching extracurricular data:", error);
        setDataError(error.message);
      });
  }, []);

  if (dataError) {
    return <Error error={dataError} />;
  }

  if (!extracurricularData) {
    return <Loading />;
  }

  return (
    <Display
      extracurricularData={extracurricularData}
      extracurricularCount={extracurricularCount}
    />
  );
};

export default Extracurriculars;
