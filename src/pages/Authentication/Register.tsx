import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useRegisterForm from '../../hooks/useRegisterForm';
import GoogleLogo from '../../assets/svg/GoogleLogo.svg';
import GithubLogo from '../../assets/svg/GithubLogo.svg';

const Register = () => {
    const { formik, handleGoogle, handleGithub } = useRegisterForm();

    return (
        <div className="hero min-h-screen bg-black">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray">Wellcome to Cinema</h1>
                    <h4 className="text-base font-bold text-gray">You need to register</h4>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={formik.handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Your name"
                                className="input input-bordered"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="text-red-600">{formik.errors.name}</div>
                            ) : null}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Email"
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
                                <span className="label-text">Contraseña</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                required
                                placeholder="*******"
                                className="input input-bordered"
                                title="Password must me 6 character with one Uppercase, one number and one special character(!@#$&*)"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-red-600">{formik.errors.password}</div>
                            ) : null}
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                        </div>
                        <div className="flex flex-row items-center justify-between mt-2">
                            <Link to={'/'}>
                                <button className="bg-red-100 hover:bg-transparent rounded-full" onClick={handleGoogle}>
                                    <img src={GoogleLogo} alt="Brand" className="h-12 w-12 rounded-full" />
                                </button>
                            </Link>
                            <Link to={'/'}>
                                <button className="bg-stone-500 hover:bg-transparent rounded-full" onClick={handleGithub}>
                                    <img src={GithubLogo} alt="Brand" className="h-12 w-12 rounded-full" />
                                </button>
                            </Link>
                        </div>
                        <label className="label">
                            <Link to="/login" className="label-text-alt link link-hover">
                                Do you have an account? Login here.
                            </Link>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
