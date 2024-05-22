import React, { useEffect } from "react";
import {
  RiAsterisk,
  RiGoogleFill,
  RiGithubFill,
  RiTwitterFill,
} from "react-icons/ri";
import loginImg from "../../../images/login/login-bg.jpg";
import "./LoginForm.css";
import { Link, useHistory } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../../actions/userAction";
import { Toastify } from "../../../actions/alertAction";

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (error) {
      dispatch(Toastify("error", error));
      dispatch(clearErrors());
    }
  }, [error]);

  //   useEffect(() => {
  //     if (user?.role === "user") {

  //       history.push("/dashboard");
  //     }
  //   }, [history, user]);

  console.log("user :>> ", user);
  return (
    <>
      <div id="main-wrapper" class="iw-login-register">
        <div class="container-login px-0">
          <div class="row-login min-vh-100">
            {/* <!-- Welcome Text========================= --> */}
            <div class="col-md-6">
              <div class="hero-wrap flex items-center h-full">
                <div class="hero-mask opacity-70 bg-primary"></div>
                <div
                  class="hero-bg hero-bg-scroll"
                  style={{ backgroundImage: "url(" + loginImg + ")" }}
                ></div>
                <div class="hero-content w-full min-vh-100 flex flex-col">
                  <div class="flex flex-wrap">
                    <div class="col-lg-9 mx-auto"></div>
                  </div>
                  <div class="flex flex-wrap my-auto">
                    <div class="col-lg-9 mx-auto">
                      <h1 class="text-11 text-white mb-4">Welcome back!</h1>
                      <p class="text-4 text-white mb-5">
                        We are glad to see you again! Get access to your Orders,
                        Wishlist and Recommendations.
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
                <div class="row-login">
                  <div className="login-form-wrapper col-form mx-auto my-auto">
                    <h3 className="uppercase text-2xl mb-4 text-center">
                      <span className="font-semibold text-my-primary">
                        Login
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

                        dispatch(login(values.email, values.password));
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
                            <label className="block mb-2 tracking-normal">
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
                            <label className="block mb-2 tracking-normal">
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
                            <p className="text-my-sm leading-relaxed text-gray-400 mt-2">
                              Forgot password?{" "}
                              <button
                                // onClick={(e) => {
                                //   e.preventDefault();
                                //   resetPasswordWithEmail(enteredLoginEmail);
                                // }}
                                className="text-blue-500 hover:text-blue-700"
                              >
                                Reset now
                              </button>
                            </p>
                          </div>

                          <div>
                            <button
                              type="submit"
                              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Login
                            </button>
                          </div>

                          <div></div>
                        </form>
                      )}
                    </Formik>

                    <div className="hints text-my-sm leading-relaxed text-gray-500 mt-3">
                      <span className="font-semibold tracking-wider">
                        Don't have an account?{" "}
                      </span>
                      <Link to="/register">
                        <span className="font-semibold tracking-wide text-lg underline text-blue-600 hover:text-blue-700">
                          {" "}
                          Register
                        </span>
                      </Link>
                    </div>

                    <div className="divider mt-5 mb-8 flex flex-nowrap items-center font-my-title uppercase font-semibold text-true-gray-800">
                      <hr className="flex-auto border-my-primary border-dashed" />
                      <span className="px-3">Or use any of these</span>
                      <hr className="flex-auto border-my-primary border-dashed" />
                    </div>

                    <div className="direct-sign-in-options space-y-4">
                      <button
                        // onClick={() => signInWithGoogle(location, history)}
                        className="btn-social-login-google bg-my-google"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-anchor="#login_page"
                      >
                        <span className="flex-shrink-0 h-full w-12 flex items-center justify-center border-r border-true-gray-400 ">
                          <RiGoogleFill className="text-xl " />
                        </span>
                        <span className="flex-auto font-medium tracking-wider">
                          Login with Google
                        </span>
                      </button>
                      <button
                        // onClick={() => signInWithGithub(location, history)}
                        className="btn-social-login-git bg-my-github"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-anchor="#login_page"
                      >
                        <span className="flex-shrink-0 h-full w-12 flex items-center justify-center border-r border-true-gray-400">
                          <RiGithubFill className="text-xl" />
                        </span>
                        <span className="flex-auto font-medium tracking-wider">
                          Login with Github
                        </span>
                      </button>
                      <button
                        // onClick={() => signInWithTwitter(location, history)}
                        className="btn-social-login-twitter bg-my-twitter"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-anchor="#login_page"
                      >
                        <span className="flex-shrink-0 h-full w-12 flex items-center justify-center border-r border-true-gray-400">
                          <RiTwitterFill className="text-xl" />
                        </span>
                        <span className="flex-auto font-medium tracking-wider">
                          Login with Twitter
                        </span>
                      </button>
                      {/* <button 
					onClick={() => signInWithFacebook(location, history)}
					className="btn-social-login bg-my-facebook"
				>
					<span className="flex-shrink-0 h-full w-12 flex items-center justify-center border-r border-true-gray-400">
						<RiFacebookFill className="text-xl" />
					</span>
					<span className="flex-auto">Login with Facebook</span>
				</button> */}
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

export default LoginForm;
