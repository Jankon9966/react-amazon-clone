import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../utils/api/api";

const SingleProduct = () => {

  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    fetchProduct().then((response) => {
      console.log(response);
    });
  }, [])

  return <div>Single product {id}</div>;
};

export default SingleProduct;
