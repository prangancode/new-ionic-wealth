import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const OrderSummary = () => {
  const history = useHistory();
  const { cartItems } = useSelector((state) => state.cart);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal < 500 ? 0 : 6;

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax + shippingCharges;

  const editProduct = () => {
    history.push("/cart");
  };

  return (
    <>
      <div className="mx-auto w-full max-w-lg">
        <h2 className="sr-only">Order summary</h2>

        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {cartItems.map((product) => (
              <li key={product.id} className="flex space-x-6 py-6">
                <img
                  src={product.image}
                  alt=""
                  className="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
                />
                <div className="flex-auto">
                  <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                    <div className="flex-auto space-y-1 text-sm font-medium">
                      <h3 className="text-gray-900">
                        <div>{product.name}</div>
                      </h3>
                      <p className="text-gray-900">
                        ${product.price * product.quantity}
                      </p>
                      <p className="hidden text-gray-500 sm:block">Black</p>
                      <p className="hidden text-gray-500 sm:block">L</p>
                    </div>
                    <div className="flex flex-none space-x-4">
                      <button
                        onClick={editProduct}
                        type="button"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
          <div className="flex justify-between">
            <dt>Subtotal</dt>
            <dd className="text-gray-900">${subtotal}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Taxes</dt>
            <dd className="text-gray-900">${tax.toFixed(2)}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Shipping</dt>
            <dd className="text-gray-900">${shippingCharges}</dd>
          </div>
          <div className="flex justify-between border-t border-gray-200 pt-6 text-gray-900">
            <dt className="text-base">Total</dt>
            <dd className="text-base">${totalPrice}</dd>
          </div>
        </dl>
      </div>
    </>
  );
};

export default OrderSummary;
