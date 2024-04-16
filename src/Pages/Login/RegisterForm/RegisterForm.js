import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RiAsterisk } from "react-icons/ri";
import { useHistory, useLocation } from "react-router-dom";
import loginImg from "../../../images/login/login-bg.jpg";
import logoImg from "../../../images/Ionic Wealth logo-1.png";
import "./RegisterForm.css";
import useAuthContexts from "../../../Hooks/Firebase/useAuthContexts";
import { Link } from "react-router-dom";
import LoadingStatus from "../../Shared/LoadingStatus/LoadingStatus";

const RegisterForm = () => {
  const status = "Registering";
  const [adding, setAdding] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const { registerWithEmail } = useAuthContexts();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const history = useHistory();

  const onSubmit = (data) => {
    setAdding(true);
    console.log(data);
    registerWithEmail(
      data.displayName,
      data.email,
      data.regPassword,
      location,
      history
    ).finally(() => setAdding(false));
  };

  // const passRegex = /^(?=.[A-Z].[A-Z])(?=.[a-zA-Z])(?=.[!@#$&])(?=.[0-9].*[0-9]).{8,}$/;
  const passRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"])[A-Za-z\d" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]{8,}$/;

  // required field mark
  const requiredMark = (
    <RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />
  );

  return (
    <>
      <div id="main-wrapper" class="iw-login-register">
        <div class="container-register px-0">
          <div class="row-register min-vh-100">
            {/* <!-- Welcome Text========================= --> */}
            <div class="col-md-6">
              <div class="hero-wrap flex items-center h-full">
                <div class="hero-mask opacity-70 bg-primary-reg"></div>
                <div
                  class="hero-bg hero-bg-scroll"
                  style={{ backgroundImage: "url(" + loginImg + ")" }}
                ></div>
                <div class="hero-content w-full min-vh-100 flex flex-col">
                  <div class="flex flex-wrap">
                    <div class="col-lg-9 mx-auto">
                      {/* <div class="logo mt-5 mb-5"> <a class="flex" href=" " title="Ionic Wealth"><img src={logoImg} className="h-24 w-24" alt="Ionic Wealth" /></a> </div> */}
                    </div>
                  </div>
                  <div class="flex flex-wrap my-auto">
                    <div class="col-lg-9 mx-auto">
                      <h1 class="text-11 text-white mb-4">You're new here!</h1>
                      <p class="text-4 text-white mb-5">
                        Sign up with your email and personal details to get
                        started!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Welcome Text End --> */}

            {/* <!-- Login Form========================= --> */}
            <div class="col-md-6 flex">
              <div class="container my-auto py-5">
                <div class="row-register">
                  <div className="register-form-wrapper col-form mx-auto my-auto">
                    <h3 className="uppercase text-2xl mb-4 text-center">
                      <span className="font-semibold text-indigo-500">
                        REGISTER
                      </span>{" "}
                      Now
                    </h3>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col space-y-4"
                    >
                      <div>
                        <label className="block mb-1 tracking-normal">
                          Full name {requiredMark}
                        </label>
                        <input
                          className="form-field"
                          placeholder="Enter Your Full Name"
                          {...register("displayName", { required: true })}
                        />
                      </div>
                      <div>
                        <label className="block mb-1 tracking-normal">
                          Email address {requiredMark}
                        </label>
                        <input
                          type="email"
                          className="form-field"
                          placeholder="Enter Your Email"
                          {...register("email", { required: true })}
                        />
                      </div>
                      <div>
                        <label className="block mb-1 tracking-normal">
                          Password {requiredMark}
                        </label>
                        <div className="flex relative items-center justify-items-center">
                          <input
                            type={passwordShown ? "text" : "password"}
                            className="form-field "
                            placeholder="******"
                            {...register("regPassword", {
                              required: true,
                              pattern: passRegex,
                            })}
                          />
                          <i
                            className={`${
                              passwordShown
                                ? "fa fa-solid fa-eye "
                                : "fa fa-solid fa-eye-slash text-gray-400"
                            } absolute right-0 mr-1`}
                            onClick={togglePasswordVisiblity}
                          />
                        </div>

                        <p className="text-my-sm leading-normal text-gray-400 mt-2">
                          <b>Password requirement:</b> Minimum eight characters,
                          at least one letter, one number and one special
                          character.
                        </p>
                      </div>
                      <div>
                        <label className="block mb-1 tracking-normal">
                          Confirm password {requiredMark}
                        </label>
                        <input
                          type="password"
                          className="form-field"
                          placeholder="Confirm password"
                          {...register("confirmPassword", {
                            required: true,
                            validate: {
                              matchesPreviousPassword: (value) => {
                                const { regPassword } = getValues();
                                return (
                                  regPassword === value ||
                                  "Passwords should match!"
                                );
                              },
                            },
                          })}
                        />
                        {errors.confirmPassword && (
                          <span className="text-xs text-red-600">
                            {errors.confirmPassword.message}
                          </span>
                        )}
                      </div>
                      {/* <div>
					<label className="block mb-1 tracking-normal">Gender</label>
					<select
						className="form-field"
						{...register('gender')}
					>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</div> */}
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="h-4 w-4"
                          {...register("agreeTerms", { required: true })}
                        />
                        <label className="block tracking-normal leading-none">
                          Agree to the{" "}
                          <Link
                            to="/terms-conditions"
                            className="text-blue-600 hover:text-blue-700"
                          >
                            Terms and Conditions
                          </Link>{" "}
                          {requiredMark}
                        </label>
                      </div>
                      <div>
                        {(errors.displayName ||
                          errors.email ||
                          errors.regPassword ||
                          errors.confirmPassword ||
                          errors.agreeTerms) && (
                          <p className="text-sm text-red-600 leading-loose">
                            Please fill up the form properly.
                          </p>
                        )}
                        {!adding ? (
                          <div className="flex items-start space-x-4 mt-4">
                            <input
                              type="submit"
                              className="btn-register"
                              value="Register"
                            />
                          </div>
                        ) : (
                          <div className="inline-block">
                            <LoadingStatus status={status} />
                          </div>
                        )}
                        {/* <div className="flex items-start space-x-4 mt-4">
                                                    <input type="submit" className="btn-register" value="Register" />
                                                </div> */}
                      </div>
                    </form>

                    <div className="hints text-my-sm leading-relaxed text-gray-700 mt-3">
                      <span className="font-semibold tracking-wider">
                        Already Registered ?{" "}
                      </span>
                      <Link to="/login">
                        <span className="font-semibold tracking-wide text-lg underline text-blue-600 hover:text-blue-600">
                          Login
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Login Form End --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
