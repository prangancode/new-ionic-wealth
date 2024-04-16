import React, { useState } from "react";
import { RiAsterisk } from "react-icons/ri";
import { useForm } from "react-hook-form";
// import HeaderNavbar from '../Shared/Header/HeaderNavbar/HeaderNavbar';
import { FiAlertTriangle } from "react-icons/fi";
// import { FaClipboardList } from 'react-icons/fa';
import axios from "axios";
// import breadcrumbimg from '../../images/breadcrumb/breadcrumbSL-1.jpg';
// import Footer from '../Shared/Footer/Footer';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import LoadingStatus from "../../Shared/LoadingStatus/LoadingStatus";
import "./Addreview.css";

// initialize Swal (sweet alert)
const MySwal = withReactContent(Swal);

const AddReview = () => {
  const status = "Adding review";
  // const { user } = useAuthContexts();
  // const [adding, setAdding] = useState(false);
  const [image, setImage] = useState(null);
  const [adding, setAdding] = useState(false);
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
    data.userImg = image;

    data1.append("file", data.userImg);
    data1.append("upload_preset", "eez1w4gg");

    const uploadRes = await axios.post(
      "https://api.cloudinary.com/v1_1/dvqolnmnp/image/upload",
      data1
    );
    const { url } = uploadRes.data;
    data.userImg = url;
    console.log(data);
    // setAdding(true);
    // if (data.userImg) {
    // 	data.userImg = user?.photoURL ? user?.photoURL : null;
    // } else {
    // 	data.userImg = null;
    // }

    axios
      .post(
        "https://financial-app-server-production.up.railway.app/reviews",
        data
      )
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          reset();
          MySwal.fire({
            icon: "success",
            title: `<span className="inline-block font-medium text-xl md:text-2xl tracking-normal md:tracking-normal leading-normal md:leading-normal">Review added successfully!</span>`,
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
  const requiredMark = (
    <RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />
  );
  return (
    <>
      {/* <HeaderNavbar /> */}
      {/* Review Banner start */}

      {/* <section className="breadcrumb-section bg-img-c" style={{ backgroundImage: "url(" + breadcrumbimg + ")" }}>
                <div className="container">
                    <div className="breadcrumb-text">
                        <h1 className="page-title underline decoration-sky-400 underline-offset-8 uppercase">Review Form</h1>
                    </div>
                </div>
            </section> */}
      {/* Review Bannerm end */}
      <section id="add_review" className="add-review dark:bg-dark-variant p-16">
        <div className="max-w-5xl mx-auto bg-gray-50 rounded-md">
          <section className="breadcrumb-section-review">
            <div className="container">
              <div className="breadcrumb-text-review">
                <h1 className="review-page-title italic">Review Form</h1>
              </div>
            </div>
          </section>

          <form onSubmit={handleSubmit(onSubmit)} className="p-16">
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_full_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                {...register("userName", { required: true })}
              />
              <label
                for="floating_full_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Full Name {requiredMark}
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                {...register("email", { required: true })}
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email Address {requiredMark}
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_company"
                id="floating_company"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                {...register("companyname", { required: true })}
              />
              <label
                for="floating_company"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Company Name {requiredMark}
              </label>
            </div>
            <div class="grid xl:grid-cols-2 xl:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_designation"
                  id="floating_designation"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  {...register("designation", { required: true })}
                />
                <label
                  for="floating_designation"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Designation {requiredMark}
                </label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="tel"
                  name="floating_phone"
                  id="floating_phone"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_phone"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone Number {requiredMark}
                </label>
              </div>
            </div>
            <div className="mb-6">
              <label
                className="block mb-3 text-sm font-large text-gray-500 dark:text-gray-300"
                for="file_input"
              >
                Your Picture {requiredMark}
              </label>
              <input
                accept="image/*"
                className="block w-full text-md text-gray-500 bg-gray-50 rounded-lg border file:border-0 file:font-large file:mr-4 file:px-4 file:py-1 file:rounded-sm file:text-white file:bg-blue-600 hover:file:bg-blue-800 border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
                name="picture"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
              {/* <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p> */}
            </div>
            <div>
              <label
                for="message"
                class="block mb-2 text-sm font-large text-gray-500 dark:text-gray-400"
              >
                Your Review {requiredMark}
              </label>
              <textarea
                {...register("review", { required: true })}
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 outline-none focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>

            <div className="mt-4">
              {(errors.review ||
                errors.userName ||
                errors.phoneno ||
                errors.email ||
                errors.companyname ||
                errors.designation) && (
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
                  value="Add Review"
                  className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                />
              ) : (
                <div className="inline-block">
                  <LoadingStatus status={status} />
                </div>
              )}
            </div>
          </form>

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

                                {...register('email', { required: true })}
                            />
                        </div>
                        <div>
                            <label className="block mb-3 text-3xl dark:text-gray-400">Company Name {requiredMark}</label>
                            <input
                                className="form-field py-7 focus:outline-none  focus:border-[#ddeef9] border-[#ddeef9] bg-[#ddeef9] rounded-md focus:ring-4 focus:ring-blue-200 font-extrabold text-lg tracking-wider dark:bg-slate-900"
                                placeholder="e.g. The Argon Group"

                                {...register('companyname', { required: true })}
                            />
                        </div>
                        <div>
                            <label className="block mb-3 text-3xl dark:text-gray-400">Phone No {requiredMark}</label>
                            <input
                                className="form-field py-7 focus:outline-none  focus:border-[#ddeef9] border-[#ddeef9] bg-[#ddeef9] rounded-md focus:ring-4 focus:ring-blue-200 font-extrabold text-lg tracking-wider dark:bg-slate-900"
                                placeholder="e.g. +923335555555"

                                {...register('phoneno', { required: true })}
                            />
                        </div>
                        <div>
                            <label className="block mb-3 text-3xl dark:text-gray-400">Your Review {requiredMark}</label>
                            <textarea
                                {...register('review', { required: true })}
                                className="form-field h-32 py-2 focus:outline-none  focus:border-[#ddeef9] border-[#ddeef9] bg-[#ddeef9] rounded-md focus:ring-4 focus:ring-blue-200 font-extrabold text-lg tracking-wider dark:bg-slate-900"
                                placeholder="Type here..."
                            ></textarea>
                        </div>

                        <div>
                            <label className="block mb-3 text-3xl dark:text-gray-400">Designation {requiredMark}</label>
                            <input
                                className="form-field py-7 focus:outline-none  focus:border-[#ddeef9] border-[#ddeef9] bg-[#ddeef9] rounded-md focus:ring-4 focus:ring-blue-200 font-extrabold text-lg tracking-wider dark:bg-slate-900"
                                placeholder="e.g. Chairman"
                                {...register('designation', { required: true })}
                            />
                        </div>

                        <div className="gap-2">

                            <label className="block mb-3 text-3xl dark:text-gray-400">Your Picture {requiredMark}</label>
                            <input accept="image/*" type="file" placeholder='Upload Image' className='bg-[#ddeef9] border-1 border-[#ddeef9] file:border-0 file:font-semibold file:mr-4 file:px-4 file:py-2 file:rounded-sm file:text-blue-400 hover:file:bg-white file:bg-blue-200 cursor-pointer rounded-md focus:ring-4 focus:ring-blue-200 font-extrabold text-lg tracking-wider w-full dark:bg-slate-900' name="picture" onChange={(e) => setImage(e.target.files[0])} required />

                        </div>
                        <div className="mt-4">
                            {(errors.review || errors.userName || errors.phoneno || errors.email || errors.companyname || errors.designation) && (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-10 flex items-center" role="alert">
                                    <span className='mr-3'><FiAlertTriangle className='text-red-700 h-8 w-8' /></span>
                                    <span className="block sm:inline"> Please fill out the field.</span>

                                </div>
                            )}
                            
                            {!adding ? (
                                <input type="submit" value="Add Review" className="font-semibold p-3 review-form-button text-lg tracking-wider" />) : (
                                <div className="inline-block">
                                    <LoadingStatus status={status} />
                                </div>
                            )}
                        </div>
                    </form> */}
        </div>
      </section>
    </>
  );
};

export default AddReview;
