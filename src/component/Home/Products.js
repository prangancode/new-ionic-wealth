import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProduct } from "../../actions/productAction";
import ToastAlert from "../notifications/alert/ToastAlert";
import ProgressBar from "../progressBar/ProgressBar";

const Products = () => {
  const dispatch = useDispatch();

  const { products, error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      ToastAlert("error", error);
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <>
      {loading && <ProgressBar />}
      <section aria-labelledby="favorites-heading">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <h2
              id="favorites-heading"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              Our Featured Products
            </h2>
            <Link
              to="/products"
              className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
            >
              Browse all products
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
            {products?.slice(0, 3).map((product) => (
              <div key={product._id} className="group relative">
                <div className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
                  <img
                    src={product.images[0].url}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <Link to={`/product-details/${product._id}`}>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    <span className="absolute inset-0" />
                    {product.name}
                  </h3>
                </Link>
                <p className="mt-1 text-sm text-gray-500">${product.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <div className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all favorites
              <span aria-hidden="true"> &rarr;</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
