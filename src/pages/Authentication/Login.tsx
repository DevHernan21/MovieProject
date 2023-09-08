import React from "react";
import { Link } from "react-router-dom";
import useLoginForm from "../../hooks/useRegisterForm";
import GoogleLogo from '../../assets/svg/GoogleLogo.svg';


const Login = () => {
    const { formik, handleGoogle } = useLoginForm();

    return (
        <div>
            <div className="hero min-h-screen bg-black">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-gray">Login</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={formik.handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="email"
                                    className="input input-bordered"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-red-600">{formik.errors.email}</div>
                                ) : null}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    placeholder="*******"
                                    className="input input-bordered"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-red-600">{formik.errors.email}</div>
                                ) : null}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="mt-2 text-center">
                            <Link to={'/'}>
                                <button className="bg-red-100 hover:bg-transparent rounded-full" onClick={handleGoogle}>
                                    <img src={GoogleLogo} alt="Brand" className="h-12 w-12 rounded-full" />
                                </button>
                            </Link>
                        </div>
                        <label className="label ml-6 mb-4">
                            <Link to="/register" className="label-text-alt link link-hover">
                                Don't have an account? Register here.
                            </Link>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
