import React from "react";
import { useParams } from "react-router-dom";

function Form() {
  const params = useParams();
  console.log('params',params)
  return <div>Form</div>;
}

export default Form;
