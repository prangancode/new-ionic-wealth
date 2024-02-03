import React, { useEffect } from "react";
import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useHistory } from "react-router-dom";
import {
  clearMessages,
  decreaseProductQuantity,
  increaseProductQuantity,
  removeItemsFromCart,
} from "../../actions/cartAction";
import { Toastify } from "../../actions/alertAction";

// const products = [
//   {
//     id: 1,
//     name: "Basic Tee",
//     href: "#",
//     price: "$32.00",
//     color: "Sienna",
//     inStock: true,
//     size: "Large",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in sienna.",
//   },
//   {
//     id: 2,
//     name: "Basic Tee",
//     href: "#",
//     price: "$32.00",
//     color: "Black",
//     inStock: false,
//     leadTime: "3–4 weeks",
//     size: "Large",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//   },
//   {
//     id: 3,
//     name: "Nomad Tumbler",
//     href: "#",
//     price: "$35.00",
//     color: "White",
//     inStock: true,
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg",
//     imageAlt: "Insulated bottle with white base and black snap lid.",
//   },
// ];

const CartHome = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { cartItems, message, icon } = useSelector((state) => state.cart);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal < 500 ? 0 : 6;

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax + shippingCharges;

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(increaseProductQuantity(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(decreaseProductQuantity(id, newQty));
  };

  const removeItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  useEffect(() => {
    dispatch(Toastify(icon, message));
    dispatch(clearMessages());
  }, [message]);

  const Checkout = () => {
    history.push("/checkout");
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul
              role="list"
              className="divide-y divide-gray-200 border-b border-t border-gray-200"
            >
              {cartItems.map((product, productIdx) => (
                <li key={product.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={product.image}
                      alt=""
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <div className="font-medium text-gray-700 hover:text-gray-800">
                              {product.name}
                            </div>
                          </h3>
                        </div>
                        <div className="mt-1 flex text-sm">
                          <p className="text-gray-500">Black</p>
                          {/* {product.size ? (
                            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                              {product.size}
                            </p>
                          ) : null} */}
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900">
                          ${product.price * product.quantity}
                        </p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        {/* <label
                          htmlFor={`quantity-${productIdx}`}
                          className="sr-only"
                        >
                          Quantity, {product.name}
                        </label>
                        <select
                          id={`quantity-${productIdx}`}
                          name={`quantity-${productIdx}`}
                          className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                        </select> */}

                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="flex justify-between space-x-4 items-center">
                            <div className="">
                              <MinusIcon
                                onClick={() =>
                                  decreaseQuantity(
                                    product.product,
                                    product.quantity
                                  )
                                }
                                className="h-4 w-4 stroke-2 cursor-pointer"
                              />
                            </div>
                            <p className="text-gray-500">
                              Qty {product.quantity}
                            </p>
                            <div className="">
                              <PlusIcon
                                onClick={() =>
                                  increaseQuantity(
                                    product.product,
                                    product.quantity,
                                    product.stock
                                  )
                                }
                                className="h-4 w-4 stroke-2 cursor-pointer"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="absolute right-0 top-0">
                          <button
                            type="button"
                            className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span
                              // onClick={() => removeItems(product.product)}
                              className="sr-only"
                            >
                              Remove
                            </span>
                            <XMarkIcon
                              onClick={() => removeItems(product.product)}
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                      {product.stock ? (
                        <CheckIcon
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <ClockIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-300"
                          aria-hidden="true"
                        />
                      )}

                      <span>
                        {product.stock ? "In stock" : `Ships in 3-4 weeks`}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2
              id="summary-heading"
              className="text-lg font-medium text-gray-900"
            >
              Order summary
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">
                  ${subtotal}
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Shipping estimate</span>
                  <a
                    href="#"
                    className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">
                      Learn more about how shipping is calculated
                    </span>
                    <QuestionMarkCircleIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">
                  ${shippingCharges}
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex text-sm text-gray-600">
                  <span>Tax estimate</span>
                  <a
                    href="#"
                    className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">
                      Learn more about how tax is calculated
                    </span>
                    <QuestionMarkCircleIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">
                  ${Math.round(tax)}
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">
                  Order total
                </dt>
                <dd className="text-base font-medium text-gray-900">
                  ${totalPrice}
                </dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                onClick={Checkout}
                type="button"
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Checkout
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};
export default CartHome;
