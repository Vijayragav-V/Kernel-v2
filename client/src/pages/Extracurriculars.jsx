import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchExtracurriculars } from "../utils/fetchExtracurricularData";

const Extracurriculars = () => {
  const navigate = useNavigate();
  const [extracurricularData, setExtracurricularData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching all extracurricular data");
  
    fetchExtracurriculars(setExtracurricularData)
      .then((data) => {
        console.log("Data fetched successfully:", data);
      })
      .catch((error) => {
        console.error("Error fetching extracurricular data:", error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return (
      <div className="h-screen">
        <h1>Error Loading Extracurriculars</h1>
        <p style={{ color: 'red' }}>Error: {error}</p>
      </div>
    );
  }

  if (!extracurricularData) {
    return (
      <div className="h-screen">
        <h1>Loading Extracurriculars...</h1>
      </div>
    );
  }

  return (
    <div className="h-screen mt-60">
      <h1>All Extracurriculars</h1>
      <ul >
        {extracurricularData.map((extracurricular) => (
          <li key={extracurricular.id}>{extracurricular.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Extracurriculars;
