import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { changeAmount, removeAll, removeProduct } from "../app/userSlice";

function Store() {
  const { calculator } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [prises, setPrises] = useState(0);
  if (calculator.products.length == 0) {
    return (
      <>
        <div className="m-auto flex justify-center items-center h-[500px] max-w-[1220px]">
          <div className="flex flex-col text-center justify-center items-center">
            <img src="" alt="" />
            <h1 className="font-semibold text-[34px]">
            Savatingizda hozircha mahsulot yo‘q :{`(`}
            </h1>
            <p className="text-[16px] font-normal text-[#807D7E]">
            Asosiy sahifadagi tanlovlardan boshlang yoki qidiruv orqali kerakli mahsulotni toping!
            </p>
            <Link to="/">
              <button className="btn btn-warning m-4">
                Asosiyga
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="mx-48 mt-10">
        <h1 className="text-4xl ">Shopping Cart</h1>
        <div className="grid ">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {calculator.products.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={product.images[0]}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="w-40 text-xl">{product.title}</div>
                      </td>
                      {/* {setPrises(prises + product.prise)} */}
                      <td>
                        <div className="flex items-center gap-2">
                          <button
                            className="px-2 text-indigo-950 border-indigo-950 border-2 rounded-full"
                            onClick={() =>
                              dispatch(
                                changeAmount({
                                  id: product.id,
                                  type: "increase",
                                })
                              )
                            }
                          >
                            +
                          </button>
                          <h1 className="px-2 text-indigo-950 bg-teal-100 py-1 rounded-md">
                            {product.amount}
                          </h1>
                          <button
                            className="px-2 text-indigo-950 border-indigo-950 border-2 rounded-full"
                            onClick={() =>
                              dispatch(
                                changeAmount({
                                  id: product.id,
                                  type: "decrease",
                                })
                              )
                            }
                            disabled={product.amount == 1 ? true : false}
                          >
                            -
                          </button>
                        </div>
                      </td>
                      <th>
                        <button
                          onClick={() => dispatch(removeProduct(product.id))}
                          className="btn btn-ghost btn-xs"
                        >
                          <FaTrashAlt className="h-5 w-4" />
                        </button>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Store;
