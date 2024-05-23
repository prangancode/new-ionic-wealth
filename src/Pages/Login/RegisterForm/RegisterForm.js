import React, { useEffect } from "react";
import { RiAsterisk } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import loginImg from "../../../images/login/login-bg.jpg";
import "./RegisterForm.css";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { clearErrors, register } from "../../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import ProgressBar from "../../../component/progressBar/ProgressBar";
import { Toastify } from "../../../actions/alertAction";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
    }
  }, [history, isAuthenticated]);

  useEffect(() => {
    if (error) {
      dispatch(Toastify("error", error));
      dispatch(clearErrors());
    }
  }, [error, dispatch]);

  return (
    <>
      {loading && <ProgressBar />}
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

                    <Formik
                      initialValues={{
                        email: "",
                        password: "",
                      }}
                      onSubmit={(values, { setSubmitting }) => {
                        console.log("values", values);

                        const data = new FormData();

                        data.append("name", values.name);
                        data.append("email", values.email);
                        data.append("password", values.password);

                        dispatch(register(data));

                        // dispatch(login(values.email, values.password));
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
                        <form
                          onSubmit={handleSubmit}
                          className="flex flex-col space-y-4"
                        >
                          <div>
                            <label className="block mb-1 tracking-normal">
                              Full name{" "}
                              <RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="name"
                              className="form-field outline-none focus:border-blue-400 focus:border-2"
                              placeholder="Enter Your Full Name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                            />
                          </div>

                          <div>
                            <label className="block mb-1 tracking-normal">
                              Email address{" "}
                              <RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              className="form-field outline-none focus:border-blue-400 focus:border-2"
                              placeholder="Your email address"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                            />
                          </div>

                          <div>
                            <label className="block mb-1 tracking-normal">
                              Password{" "}
                              <RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />
                            </label>
                            <input
                              id="password"
                              name="password"
                              type="password"
                              className="form-field outline-none focus:border-blue-400 focus:border-2"
                              placeholder="Your password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                            />
                          </div>

                          {/* <div>
                            <label className="block mb-1 tracking-normal">
                              Confirm Password{" "}
                              <RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />
                            </label>
                            <input
                              id="confirmPassword"
                              name="confirmPassword"
                              type="passwconfirmPasswordord"
                              className="form-field outline-none focus:border-blue-400 focus:border-2"
                              placeholder="*****"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.confirmPassword}
                            />
                          </div> */}

                          {/* <div className="flex items-center gap-2">
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
                          </div> */}
                          {/* <div>
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
                          <div className="flex items-start space-x-4 mt-4">
                                                      <input type="submit" className="btn-register" value="Register" />
                                                  </div>
                        </div> */}

                          <div>
                            <button
                              type="submit"
                              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Register
                            </button>
                          </div>
                        </form>
                      )}
                    </Formik>

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
