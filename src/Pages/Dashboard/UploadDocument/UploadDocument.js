import React, { useState } from "react";
// import { RiAsterisk } from 'react-icons/ri';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FiAlertTriangle } from "react-icons/fi";
// import { FaClipboardList } from 'react-icons/fa';
import axios from "axios";
import LoadingStatus from "../../Shared/LoadingStatus/LoadingStatus";
// import useAuthContexts from '../../../Hooks/Firebase/useAuthContexts';

// initialize Swal (sweet alert)
const MySwal = withReactContent(Swal);

const UploadDocument = () => {
  // const { user } = useAuthContexts();
  const status = "Uploading Documents,Please wait...";
  // const { user } = useAuthContexts();
  // const [adding, setAdding] = useState(false);
  const [clientAgreement, setClientAgreement] = useState(null);
  const [dataProtection, setDataProtection] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [adding, setAdding] = useState(false);
  const [resetfile, setReset] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // add review
  const onSubmit = async (data) => {
    setAdding(true);
    const data1 = new FormData();
    const data2 = new FormData();
    const data3 = new FormData();
    data.clientAgreement = clientAgreement;
    data.dataProtection = dataProtection;
    data.questions = questions;

    data1.append("file", data.clientAgreement);
    data2.append("file", data.dataProtection);
    data3.append("file", data.questions);
    //upload presets
    data1.append("upload_preset", "eez1w4gg");
    data2.append("upload_preset", "eez1w4gg");
    data3.append("upload_preset", "eez1w4gg");

    const uploadRes1 = await axios.post(
      "https://api.cloudinary.com/v1_1/dvqolnmnp/image/upload",
      data1
    );
    const uploadRes2 = await axios.post(
      "https://api.cloudinary.com/v1_1/dvqolnmnp/image/upload",
      data2
    );
    const uploadRes3 = await axios.post(
      "https://api.cloudinary.com/v1_1/dvqolnmnp/image/upload",
      data3
    );
    const { url } = uploadRes1.data;
    const { url: url2 } = uploadRes2.data;
    const { url: url3 } = uploadRes3.data;
    data.clientAgreement = url;
    data.dataProtection = url2;
    data.questions = url3;
    console.log(data);
    // setAdding(true);
    // if (data.userImg) {
    // 	data.userImg = user?.photoURL ? user?.photoURL : null;
    // } else {
    // 	data.userImg = null;
    // }

    axios
      .post(
        "https://financial-app-server-production.up.railway.app/documents",
        data
      )
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          reset();
          setReset(true);

          MySwal.fire({
            icon: "success",
            title: `<span className="inline-block font-medium text-xl md:text-2xl tracking-normal md:tracking-normal leading-normal md:leading-normal">Documents Uploaded Successfully!</span><br> Your Document ID is ${res.data.insertedId.slice(
              0,
              10
            )}`,
            confirmButtonText: `OK`,
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn-regular py-2",
            },
          });
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setAdding(false));
  };

  // required field mark
  // const requiredMark = <RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />;
  return (
    <>
      <div className="max-w-5xl mx-auto  rounded-md">
        {/* <form onSubmit={handleSubmit(onSubmit)} className="dark:bg-slate-900 flex flex-col  p-8 rounded-xl shadow-sky-500/50 shadow-2xl space-y-14 ring-4 ring-gray-300">
                    <div>
                        <label className="block mb-3 text-3xl dark:text-gray-400">Full Name {requiredMark}</label>
                        <input
                            className="form-field py-7 focus:outline-none  focus:border-[#ddeef9] border-[#ddeef9] bg-[#ddeef9] rounded-md focus:ring-4 focus:ring-blue-200 font-extrabold text-lg tracking-wider dark:bg-slate-900"
                            placeholder="e.g. Abu Dujana"

                            {...register('userName', { required: true })}
                        />
                    </div>
                    <div>
                        <label className="block mb-3 text-3xl dark:text-gray-400">Email Address {requiredMark}</label>
                        <input
                            className="form-field py-7 focus:outline-none  focus:border-[#ddeef9] border-[#ddeef9] bg-[#ddeef9] rounded-md focus:ring-4 focus:ring-blue-200 font-extrabold text-lg tracking-wider dark:bg-slate-900"
                            placeholder="Your Email Address"
                            defaultValue={user.email}
                            {...register('email', { required: true })}
                        />
                    </div>

                    <div className="gap-2">

                        <label className="block mb-3 text-3xl dark:text-gray-400">Your Client Agreement Pdf (Signed) {requiredMark}</label>
                        <input accept=".pdf,.doc" type="file" placeholder='Upload Image' className='bg-[#ddeef9] border-1 border-[#ddeef9] file:border-0 file:font-semibold file:mr-4 file:px-4 file:py-2 file:rounded-sm file:text-blue-400 hover:file:bg-white file:bg-blue-200 cursor-pointer rounded-md focus:ring-4 focus:ring-blue-200 font-extrabold text-lg tracking-wider w-full dark:bg-slate-900' name="picture" onChange={(e) => setClientAgreement(e.target.files[0])} required />

                    </div>
                    <div className="gap-2">

                        <label className="block mb-3 text-3xl dark:text-gray-400">Your Data Protection Pdf (Signed) {requiredMark}</label>
                        <input accept=".pdf,.doc" type="file" placeholder='Upload Image' className='bg-[#ddeef9] border-1 border-[#ddeef9] file:border-0 file:font-semibold file:mr-4 file:px-4 file:py-2 file:rounded-sm file:text-blue-400 hover:file:bg-white file:bg-blue-200 cursor-pointer rounded-md focus:ring-4 focus:ring-blue-200 font-extrabold text-lg tracking-wider w-full dark:bg-slate-900' name="picture" onChange={(e) => setDataProtection(e.target.files[0])} required />

                    </div>
                    <div className="gap-2">

                        <label className="block mb-3 text-3xl dark:text-gray-400">Your Risk Profiler Pdf (Signed) {requiredMark}</label>
                        <input accept=".pdf,.doc" type="file" placeholder='Upload Image' className='bg-[#ddeef9] border-1 border-[#ddeef9] file:border-0 file:font-semibold file:mr-4 file:px-4 file:py-2 file:rounded-sm file:text-blue-400 hover:file:bg-white file:bg-blue-200 cursor-pointer rounded-md focus:ring-4 focus:ring-blue-200 font-extrabold text-lg tracking-wider w-full dark:bg-slate-900' name="picture" onChange={(e) => setQuestions(e.target.files[0])} required />

                    </div>

                    <div className="mt-4">
                        {(errors.review || errors.userName || errors.phoneno || errors.email || errors.companyname || errors.designation) && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-10 flex items-center" role="alert">
                                <span className='mr-3'><FiAlertTriangle className='text-red-700 h-8 w-8' /></span>
                                <span className="block sm:inline"> Please fill out the field.</span>

                            </div>
                        )}
                        {!adding ? (
                            <input type="submit" value="Upload" className="font-semibold p-3 review-form-button text-lg tracking-wider" />) : (
                            <div className="inline-block">
                                <LoadingStatus status={status} />
                            </div>
                        )}
                    </div>
                </form> */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-50 border-2 p-16 rounded-md"
        >
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-6">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="John Theo"
              {...register("userName", { required: true })}
            />
          </div>
          <div className="flex justify-center items-center w-full mb-6">
            <label
              for="dropzone-file"
              className="flex flex-col justify-center items-center w-full h-48 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col justify-center items-center pt-5 pb-6">
                <svg
                  className="mb-3 w-10 h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">
                    Click to upload your{" "}
                    <span className="underline  underline-offset-2">
                      client agreement
                    </span>{" "}
                    file
                  </span>{" "}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PDF, DOC
                </p>
              </div>
              <input
                id="dropzone-file"
                accept=".pdf,.doc"
                type="file"
                className="hidden"
                onChange={(e) => setClientAgreement(e.target.files[0])}
                required
              />

              {clientAgreement && (
                <div
                  className={`${
                    resetfile
                      ? "hidden"
                      : "border-2 p-2 rounded-md text-white bg-indigo-500 mb-4"
                  } `}
                >
                  {clientAgreement.name}
                </div>
              )}
            </label>
          </div>
          <div className="flex justify-center items-center w-full mb-6">
            <label
              for="dropzone-file-data"
              className="flex flex-col justify-center items-center w-full h-48 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col justify-center items-center pt-5 pb-6">
                <svg
                  className="mb-3 w-10 h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">
                    Click to upload your{" "}
                    <span className="underline  underline-offset-2">
                      data protection
                    </span>{" "}
                    file
                  </span>{" "}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PDF, DOC
                </p>
              </div>
              <input
                id="dropzone-file-data"
                accept=".pdf,.doc"
                type="file"
                className="hidden"
                onChange={(e) => setDataProtection(e.target.files[0])}
                required
              />
              {dataProtection && (
                <div
                  className={`${
                    resetfile
                      ? "hidden"
                      : "border-2 p-2 rounded-md text-white bg-indigo-500 mb-4"
                  } `}
                >
                  {dataProtection.name}
                </div>
              )}
            </label>
          </div>
          <div className="flex justify-center items-center w-full mb-6">
            <label
              for="dropzone-file-questions"
              className="flex flex-col justify-center items-center w-full h-48 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col justify-center items-center pt-5 pb-6">
                <svg
                  className="mb-3 w-10 h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">
                    Click to upload your{" "}
                    <span className="underline  underline-offset-2">
                      risk profiler
                    </span>{" "}
                    file
                  </span>{" "}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PDF, DOC
                </p>
              </div>
              <input
                id="dropzone-file-questions"
                accept=".pdf,.doc"
                type="file"
                className="hidden"
                onChange={(e) => setQuestions(e.target.files[0])}
                required
              />
              {questions && (
                <div
                  className={`${
                    resetfile
                      ? "hidden"
                      : "border-2 p-2 rounded-md text-white bg-indigo-500 mb-4"
                  } `}
                >
                  {questions.name}
                </div>
              )}
            </label>
          </div>
          <div
            class="flex p-4 mb-6 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800 font-medium"
            role="alert"
          >
            <svg
              class="inline flex-shrink-0 mr-3 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div>
              Fill and upload all the data to have a{" "}
              <span className="text-green-500">successful</span> upload
            </div>
          </div>
          {/* <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button> */}
          <div className="mt-4">
            {(errors.userName || errors.phoneno || errors.email) && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-10 flex items-center"
                role="alert"
              >
                <span className="mr-3">
                  <FiAlertTriangle className="text-red-700 h-8 w-8" />
                </span>
                <span className="block sm:inline">
                  {" "}
                  Please fill out the field.
                </span>
              </div>
            )}
            {!adding ? (
              <input
                type="submit"
                value="Upload"
                className="font-semibold p-3 review-form-button text-lg tracking-wider"
              />
            ) : (
              <div className="inline-block">
                <LoadingStatus status={status} />
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default UploadDocument;
