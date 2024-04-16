import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { RiAsterisk, RiGoogleFill, RiGithubFill, RiTwitterFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { useHistory, useLocation } from 'react-router-dom';
import loginImg from '../../../images/login/login-bg.jpg';
import logoImg from '../../../images/Ionic Wealth logo-1.png'
import './LoginForm.css';
import useAuthContexts from '../../../Hooks/Firebase/useAuthContexts';
import { Link } from 'react-router-dom';
import LoadingStatus from '../../Shared/LoadingStatus/LoadingStatus';

const LoginForm = () => {
    const status = 'Logging in';
    const [adding, setAdding] = useState(false);
    // const [error, setError] = useState(null);
    const { loginWithEmail, signInWithGoogle, signInWithTwitter, signInWithGithub, resetPasswordWithEmail, user, authError } = useAuthContexts();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const history = useHistory();
    const [enteredLoginEmail, setEnteredLoginEmail] = useState('');

    const onSubmit = data => {
        setAdding(true);
        loginWithEmail(data.loginEmail, data.loginPassword, location, history).finally(() => setAdding(false));
        console.log(data);
    };



    return (
        <>
            <div id="main-wrapper" class="iw-login-register">
                <div class="container-login px-0">
                    <div class="row-login min-vh-100">
                        {/* <!-- Welcome Text========================= --> */}
                        <div class="col-md-6">
                            <div class="hero-wrap flex items-center h-full">
                                <div class="hero-mask opacity-70 bg-primary"></div>
                                <div class="hero-bg hero-bg-scroll" style={{ backgroundImage: "url(" + loginImg + ")" }}></div>
                                <div class="hero-content w-full min-vh-100 flex flex-col">
                                    <div class="flex flex-wrap">
                                        <div class="col-lg-9 mx-auto">
                                            {/* <div class="logo mt-5 mb-5"> <a class="flex" href=" " title="Ionic Wealth"><img src={logoImg} className="h-24 w-24" alt="Ionic Wealth" /></a> </div> */}
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap my-auto">
                                        <div class="col-lg-9 mx-auto">
                                            <h1 class="text-11 text-white mb-4">Welcome back!</h1>
                                            <p class="text-4 text-white mb-5">We are glad to see you again! Get access to your Orders, Wishlist and Recommendations.</p>
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
                                            <span className="font-semibold text-my-primary">Login</span> Now
                                        </h3>
                                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                                            <div>
                                                <label className="block mb-2 tracking-normal">
                                                    Email address{' '}
                                                    <RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-field outline-none focus:border-blue-400 focus:border-2"
                                                    placeholder="Your email address"
                                                    {...register('loginEmail', {
                                                        required: true,
                                                        onBlur: e => setEnteredLoginEmail(e.target.value),
                                                    })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-2 tracking-normal">
                                                    Password{' '}
                                                    <RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-field outline-none focus:border-blue-400 focus:border-2"
                                                    placeholder="Your password"
                                                    {...register('loginPassword', { required: true })}
                                                />
                                                <p className="text-my-sm leading-relaxed text-gray-400 mt-2">
                                                    Forgot password?{' '}
                                                    <button
                                                        onClick={e => {
                                                            e.preventDefault();
                                                            resetPasswordWithEmail(enteredLoginEmail);
                                                        }}
                                                        className="text-blue-500 hover:text-blue-700"
                                                    >
                                                        Reset now
                                                    </button>
                                                </p>
                                            </div>

                                            <div>
                                                {(errors.loginEmail || errors.loginPassword) && (
                                                    <p className="text-sm text-red-600 leading-loose">Please fill up the form properly.</p>
                                                )}
                                                {/* <div className="flex items-start space-x-4">
                                                    {!user?.email && <input type="submit" className="btn-login" value="Login" />}
                                                </div> */}
                                                {
                                                    authError ? (<div className="flex items-start space-x-4 mt-4">
                                                        <input type="submit" className="btn-login" value="Login" />
                                                    </div>) : (!adding ? (
                                                        <div className="flex items-start space-x-4 mt-4">
                                                            <input type="submit" className="btn-login" value="Login" />
                                                        </div>
                                                    ) : (<div className="inline-block">

                                                        <LoadingStatus status={status} />


                                                    </div>))
                                                }
                                                {/* {
                                                    !adding ? (
                                                        <div className="flex items-start space-x-4 mt-4">
                                                            <input type="submit" className="btn-login" value="Login" />
                                                        </div>
                                                    ) : (<div className="inline-block">

                                                        <LoadingStatus status={status} />


                                                    </div>)
                                                } */}
                                            </div>
                                        </form>

                                        <div className="hints text-my-sm leading-relaxed text-gray-500 mt-3">
                                            <span className="font-semibold tracking-wider">Don't have an account? </span>
                                            <Link to="/register"><span className="font-semibold tracking-wide text-lg underline text-blue-600 hover:text-blue-700"> Register</span>
                                            </Link>

                                        </div>

                                        <div className="status">
                                            {user?.email && (
                                                <h5 className="mt-3 text-green-600">Currently logged in with {user?.email}</h5>
                                            )}
                                        </div>

                                        <div className="divider mt-5 mb-8 flex flex-nowrap items-center font-my-title uppercase font-semibold text-true-gray-800">
                                            <hr className="flex-auto border-my-primary border-dashed" />
                                            <span className="px-3">Or use any of these</span>
                                            <hr className="flex-auto border-my-primary border-dashed" />
                                        </div>

                                        <div className="direct-sign-in-options space-y-4">
                                            <button
                                                onClick={() => signInWithGoogle(location, history)}
                                                className="btn-social-login-google bg-my-google"
                                                data-aos="fade-up"
                                                data-aos-delay="100"
                                                data-aos-anchor="#login_page"
                                            >
                                                <span className="flex-shrink-0 h-full w-12 flex items-center justify-center border-r border-true-gray-400 ">
                                                    <RiGoogleFill className="text-xl " />
                                                </span>
                                                <span className="flex-auto font-medium tracking-wider">Login with Google</span>
                                            </button>
                                            <button
                                                onClick={() => signInWithGithub(location, history)}
                                                className="btn-social-login-git bg-my-github"
                                                data-aos="fade-up"
                                                data-aos-delay="200"
                                                data-aos-anchor="#login_page"
                                            >
                                                <span className="flex-shrink-0 h-full w-12 flex items-center justify-center border-r border-true-gray-400">
                                                    <RiGithubFill className="text-xl" />
                                                </span>
                                                <span className="flex-auto font-medium tracking-wider">Login with Github</span>
                                            </button>
                                            <button
                                                onClick={() => signInWithTwitter(location, history)}
                                                className="btn-social-login-twitter bg-my-twitter"
                                                data-aos="fade-up"
                                                data-aos-delay="300"
                                                data-aos-anchor="#login_page"
                                            >
                                                <span className="flex-shrink-0 h-full w-12 flex items-center justify-center border-r border-true-gray-400">
                                                    <RiTwitterFill className="text-xl" />
                                                </span>
                                                <span className="flex-auto font-medium tracking-wider">Login with Twitter</span>
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