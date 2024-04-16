import React from 'react';

import LoginForm from '../LoginForm/LoginForm';


const Login = () => {


    return (
        <>

            <main id="login_page" className="login-page pt-16 md:pt-20">
                <section className="py-8 lg:py-12 relative">
                    <div className="px-4 md:flex lg:justify-evenly space-y-8 md:space-y-0 md:space-x-6 lg:space-x-12 xl:max-w-screen-xl xl:mx-auto">
                        <div className="md:w-1/2 lg:max-w-sm">
                            <LoginForm />
                        </div>

                    </div>
                </section>
            </main>
        </>
    );
};

export default Login;