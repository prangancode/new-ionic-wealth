import { Formik } from "formik";
import React from "react";
import { createDocument } from "../../../actions/documentAction";
import { useDispatch } from "react-redux";

const UploadDocumentForm = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="p-5 bg-white rounded-md shadow-md">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Personal Information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>

        <Formik
          initialValues={{
            name: "",
            email: "",
            clientAgreement: "",
            dataProtection: "",
            riskProfiler: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("values", values);

            const data = new FormData();

            data.append("name", values.name);
            data.append("email", values.email);
            data.append("clientAgreement", values.clientAgreement);
            data.append("dataProtection", values.dataProtection);
            data.append("riskProfiler", values.riskProfiler);

            dispatch(createDocument(values));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="avatar"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Client Agreement
                  </label>
                  <div className="mt-2">
                    <input
                      name="clientAgreement"
                      type="file"
                      onChange={(e) => {
                        setFieldValue("clientAgreement", e.target.files[0]);

                        // const reader = new FileReader();

                        // reader.onload = () => {
                        //   if (reader.readyState === 2) {
                        //     //   setAvatarPreview(reader.result);
                        //     setAvatar(reader.result);
                        //   }
                        // };

                        // reader.readAsDataURL(e.target.files[0]);
                      }}
                      required
                      className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4 file:rounded-md
                    file:border-0 file:text-sm file:font-semibold
                    file:bg-indigo-50 file:text-indigo-700
                    hover:file:bg-indigo-100 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="avatar"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Data Protection
                  </label>
                  <div className="mt-2">
                    <input
                      name="dataProtection"
                      type="file"
                      onChange={(e) => {
                        setFieldValue("dataProtection", e.target.files[0]);

                        // const reader = new FileReader();

                        // reader.onload = () => {
                        //   if (reader.readyState === 2) {
                        //     //   setAvatarPreview(reader.result);
                        //     setAvatar(reader.result);
                        //   }
                        // };

                        // reader.readAsDataURL(e.target.files[0]);
                      }}
                      className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4 file:rounded-md
                    file:border-0 file:text-sm file:font-semibold
                    file:bg-indigo-50 file:text-indigo-700
                    hover:file:bg-indigo-100 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="avatar"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Risk Profiler
                  </label>
                  <div className="mt-2">
                    <input
                      name="riskProfiler"
                      type="file"
                      onChange={(e) => {
                        setFieldValue("riskProfiler", e.target.files[0]);

                        // const reader = new FileReader();

                        // reader.onload = () => {
                        //   if (reader.readyState === 2) {
                        //     //   setAvatarPreview(reader.result);
                        //     setAvatar(reader.result);
                        //   }
                        // };

                        // reader.readAsDataURL(e.target.files[0]);
                      }}
                      className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4 file:rounded-md
                    file:border-0 file:text-sm file:font-semibold
                    file:bg-indigo-50 file:text-indigo-700
                    hover:file:bg-indigo-100 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6 sm:col-span-6">
                  <button
                    type="reset"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default UploadDocumentForm;
