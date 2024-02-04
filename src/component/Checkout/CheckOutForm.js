import React from "react";
import MultiStepCheckout from "./MultiStepCheckout";
import OrderSummary from "./OrderSummary";

const CheckOutForm = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 sm:pb-24 sm:pt-8 lg:px-8 xl:px-2 xl:pt-14">
        <h1 className="sr-only">Checkout</h1>

        <div className="mx-auto grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <OrderSummary />

          <MultiStepCheckout />
        </div>
      </div>
    </div>
  );
};

export default CheckOutForm;
