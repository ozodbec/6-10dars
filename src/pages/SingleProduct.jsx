import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
import { addProduct } from "../app/userSlice";

function SingleProduct() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((data) => data.json())
      .then((product) => setProduct(product))
      .catch((error) => console.log(error));
  }, []);

  const dispatch = useDispatch();

  const [productAmount, setProductAmount] = useState(1);

  const setAmount = (type) => {
    if (type == "decrease" && productAmount > 1) {
      setProductAmount((prev) => prev - 1);
    } else if (type == "increase") {
      setProductAmount((prev) => prev + 1);
    }
  };
  const addToBag = () => {
    const newProdact = {
      ...product,
      amount: productAmount,
    };

    dispatch(addProduct(newProdact));
  };

  return (
    <>
      {product && (
        <div
          className="card lg:card-side bg-base-100 shadow-xl p-[40px] block mt-[70px]"
          key={product.id}
        >
          <div className="flex">
            <figure>
              <img
                src={product.thumbnail}
                alt={product.description}
                className="w-[400px]"
              />
            </figure>
            <div className="card-body flex flex-col items-start justify-start">
              <h2 className="card-title ">{product.title}</h2>
              <p className="info m-0 text-start">{product.description}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2 sm:mb-0 mb-10">
              <button
                onClick={() => setAmount("increase")}
                className="btn btn-outline"
              >
                +
              </button>
              <h3>{productAmount}</h3>
              <button
                onClick={() => setAmount("decrease")}
                className="btn btn-outline"
                disabled={productAmount == 1 ? true : false}
              >
                -
              </button>
              <button onClick={addToBag} className="btn btn-primary">
                ad to bag
              </button>
            </div>
            <Link to="/">
              <button className="btn btn-primary ">Back to</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
