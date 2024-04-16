import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useForm } from "react-hook-form";
import LoadingStatus from "../../Shared/LoadingStatus/LoadingStatus";
// initialize Swal (sweet alert)
const MySwal = withReactContent(Swal);

const ManageDocumentItem = ({ document, documents, setDocuments }) => {
  const status = "Adding Information...";
  const { register, handleSubmit, reset } = useForm();
  const {
    _id,
    userName,
    email,
    clientAgreement,
    dataProtection,
    questions,
    insurance,
    investmentPension,
  } = document;
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const handleModal = (boolean) => {
    setModal(boolean);
  };
  // handle remove order
  const handleRemoveDocument = (id) => {
    MySwal.fire({
      icon: "warning",
      title: "Are you sure?",
      html: `<span className="text-sm">You won't be able to revert this!</span>`,
      confirmButtonText: "Yes, delete",
      showCancelButton: true,
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn-regular bg-red-500 py-2 mr-4",
        cancelButton: "btn-regular py-2",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://financial-app-server-production.up.railway.app/documents/${id}`;
        axios
          .delete(url)
          .then((res) => {
            console.log(res);
            if (res.data.deletedCount) {
              const remaining = documents.filter(
                (document) => document._id !== id
              );
              setDocuments(remaining);
              MySwal.fire({
                icon: "success",
                title: `<span className="inline-block font-medium text-xl md:text-2xl tracking-normal md:tracking-normal leading-normal md:leading-normal">Document Deleted Successfully!</span>`,
                confirmButtonText: `OK`,
                buttonsStyling: false,
                customClass: {
                  confirmButton: "btn-regular py-2",
                },
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    const url = `https://financial-app-server-production.up.railway.app/documents/${email}`;
    axios
      .put(url, data)
      .then((res) => {
        if (res.data.modifiedCount) {
          reset();
          MySwal.fire({
            icon: "success",
            title: `<span className="inline-block font-medium text-xl md:text-2xl tracking-normal md:tracking-normal leading-normal md:leading-normal">Information Uploaded Successfully!</span>`,
            confirmButtonText: `OK`,
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn-regular py-2",
            },
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap ">
            {_id.slice(0, 10)}
          </td>
          <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap uppercase">
            {userName}
          </td>
          <td className="px-6 py-4">
            <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
              <span className="font-semibold p-2 rounded-2xl bg-green-300 text-green-600 border-none px-3">
                {email}
              </span>
            </a>
          </td>
          <td className="px-6 py-4">
            <a href={clientAgreement} target="_blank" rel="noreferrer" download>
              <button className="bg-blue-500 hover:bg-blue-600 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center my-3 w-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                <span>Client Agreement</span>
              </button>
            </a>
          </td>
          <td className="px-6 py-4">
            <a href={dataProtection} target="_blank" rel="noreferrer" download>
              <button className="bg-blue-500 hover:bg-blue-600 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center my-3 w-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                <span>Data Protection</span>
              </button>
            </a>
          </td>
          <td className="px-6 py-4">
            <a href={questions} target="_blank" rel="noreferrer" download>
              <button className="bg-blue-500 hover:bg-blue-600 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center my-3 w-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                <span>Risk Profiler</span>
              </button>
            </a>
          </td>
          <td className="px-6 py-4 text-right">
            <button
              onClick={() => handleModal(true)}
              className="font-medium text-purple-600 dark:text-red-500 hover:underline border-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
          </td>

          <td className="px-6 py-4 text-right">
            <button
              onClick={() => handleRemoveDocument(document._id)}
              className="font-medium text-red-600 dark:text-red-500 hover:underline border-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:stroke-red-500 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
      {/* Modal body start */}
      <div
        id="defaultModal"
        tabindex="-1"
        aria-hidden="true"
        className={`${
          modal
            ? "backdrop-blur-sm overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex items-center justify-center"
            : "hidden"
        }`}
      >
        <div className="relative p-4 w-full max-w-7xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Investment Information{" "}
                <span className="font-semibold p-1 rounded-md bg-green-300 text-green-600 border-none px-3 ml-5 text-base">
                  {email}
                </span>{" "}
                <span className="font-semibold p-1 rounded-md bg-blue-300 text-blue-600 border-none px-3 text-base">
                  {userName}
                </span>
              </h3>
              <button
                onClick={() => handleModal(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="py-6 px-6 lg:px-8">
              <form onSubmit={handleSubmit(onSubmit)} className="">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white underline underline-offset-2">
                  Investment and Pensions
                </h3>
                <div className="grid grid-cols-2 gap-x-5">
                  <div className="mb-6">
                    <label
                      for="owner"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Owner
                    </label>
                    <input
                      type="text"
                      id="owner"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none"
                      placeholder="Type here"
                      {...register("investmentPension.ownerName", {
                        required: true,
                      })}
                      defaultValue={
                        investmentPension?.ownerName
                          ? investmentPension?.ownerName
                          : ""
                      }
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="invested amount"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Invested Amount
                    </label>
                    <input
                      type="number"
                      id="invested amount"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none"
                      placeholder="Type here"
                      {...register("investmentPension.investedAmount", {
                        required: true,
                      })}
                      defaultValue={
                        investmentPension?.investedAmount
                          ? investmentPension?.investedAmount
                          : ""
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-5">
                  <div className="mb-6">
                    <label
                      for="Description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      id="Description"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none"
                      placeholder="Type here"
                      {...register("investmentPension.description", {
                        required: true,
                      })}
                      defaultValue={
                        investmentPension?.description
                          ? investmentPension?.description
                          : ""
                      }
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="current value"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Current Value
                    </label>
                    <input
                      type="number"
                      id="current value"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none"
                      placeholder="Type here"
                      {...register("investmentPension.currentValue", {
                        required: true,
                      })}
                      defaultValue={
                        investmentPension?.currentValue
                          ? investmentPension?.currentValue
                          : ""
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-5">
                  <div className="mb-6">
                    <label
                      for="provider"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Provider
                    </label>
                    <input
                      type="text"
                      id="provider"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none"
                      placeholder="Type here"
                      {...register("investmentPension.provider", {
                        required: true,
                      })}
                      defaultValue={
                        investmentPension?.provider
                          ? investmentPension?.provider
                          : ""
                      }
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="in trust"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      In Trust
                    </label>
                    <select
                      id="in trust"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none"
                      {...register("investmentPension.inTrust", {
                        required: true,
                      })}
                      defaultValue={
                        investmentPension?.inTrust
                          ? investmentPension?.inTrust
                          : ""
                      }
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-5">
                  <div className="mb-6">
                    <label
                      for="plan no"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Plan No
                    </label>
                    <input
                      type="number"
                      id="plan no"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none"
                      placeholder="Type here"
                      {...register("investmentPension.planNo", {
                        required: true,
                      })}
                      defaultValue={
                        investmentPension?.planNo
                          ? investmentPension?.planNo
                          : ""
                      }
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="start date"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Start Date
                    </label>
                    <input
                      type="date"
                      id="start date"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none"
                      {...register("investmentPension.startDate", {
                        required: true,
                      })}
                      defaultValue={
                        investmentPension?.startDate
                          ? investmentPension?.startDate
                          : ""
                      }
                    />
                  </div>
                </div>

                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white underline underline-offset-2">
                  Insurance
                </h3>
                <div className="grid grid-cols-3 gap-x-5">
                  <div className="mb-6">
                    <label
                      for="Life Assured"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Life Assured/Policy Beneficiary
                    </label>
                    <input
                      type="text"
                      id="Life Assured"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none"
                      placeholder="Type here"
                      {...register("insurance.lifeAssured", { required: true })}
                      defaultValue={
                        insurance?.lifeAssured ? insurance?.lifeAssured : ""
                      }
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="Sum Assured/Benefits"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Sum Assured/Benefits
                    </label>
                    <input
                      type="text"
                      id="Sum Assured/Benefits"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none"
                      placeholder="Type here"
                      {...register("insurance.sumAssured", { required: true })}
                      defaultValue={
                        insurance?.sumAssured ? insurance?.sumAssured : ""
                      }
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="purpose"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Purpose
                    </label>
                    <input
                      type="text"
                      id="purpose"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none"
                      placeholder="Type here"
                      {...register("insurance.purpose", { required: true })}
                      defaultValue={
                        insurance?.purpose ? insurance?.purpose : ""
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-5">
                  <div className="mb-6">
                    <label
                      for="Policy Type"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Policy Type
                    </label>
                    <input
                      type="text"
                      id="Policy Type"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none"
                      placeholder="Type here"
                      {...register("insurance.policyType", { required: true })}
                      defaultValue={
                        insurance?.policyType ? insurance?.policyType : ""
                      }
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="current value"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Premium/Frequency
                    </label>
                    <input
                      type="text"
                      id="Premium/Frequency"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none"
                      placeholder="Type here"
                      {...register("insurance.premiumFrequency", {
                        required: true,
                      })}
                      defaultValue={
                        insurance?.premiumFrequency
                          ? insurance?.premiumFrequency
                          : ""
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-5">
                  <div className="mb-6">
                    <label
                      for="Insurance Company"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Insurance Company
                    </label>
                    <input
                      type="text"
                      id="Insurance Company"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none"
                      placeholder="Type here"
                      {...register("insurance.insuranceCompany", {
                        required: true,
                      })}
                      defaultValue={
                        insurance?.insuranceCompany
                          ? insurance?.insuranceCompany
                          : ""
                      }
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="Start Date"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Start Date
                    </label>
                    <input
                      type="date"
                      id="Start Date"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none"
                      {...register("insurance.startDate", { required: true })}
                      defaultValue={
                        insurance?.startDate ? insurance?.startDate : ""
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-5">
                  <div className="mb-6">
                    <label
                      for="Policy No"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Policy No
                    </label>
                    <input
                      type="number"
                      id="plan no"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none"
                      placeholder="Type here"
                      {...register("insurance.policyNo", { required: true })}
                      defaultValue={
                        insurance?.policyNo ? insurance?.policyNo : ""
                      }
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="Maturity Date"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Maturity Date
                    </label>
                    <input
                      type="date"
                      id="Maturity Date"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none"
                      {...register("insurance.maturityDate", {
                        required: true,
                      })}
                      defaultValue={
                        insurance?.maturityDate ? insurance?.maturityDate : ""
                      }
                    />
                  </div>
                </div>

                <div className=" mt-3 flex items-center space-x-2 rounded-b  border-gray-200 dark:border-gray-600">
                  {loading ? (
                    <LoadingStatus status={status} />
                  ) : (
                    <input
                      type="submit"
                      value="Add Finance Info"
                      className="review-form-button font-semibold p-2 text-sm tracking-wider"
                    ></input>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal body end */}
    </>
  );
};

export default ManageDocumentItem;
