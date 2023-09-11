

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../context/AuthProvider';
import { useState } from 'react';

const useLoginForm = () => {
    const { signIn, logInWithGoogle } = useAuth();


    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
            .min(6, 'Must be at least 6 characters')
            .matches(
                /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$&*])/,
                'Must contain at least one uppercase letter, one number, and one special character (!@#$&*)'
            )
            .required('Required'),
    });

    const handleGoogle = async () => {
        try {
           await logInWithGoogle();
        } catch (error) {
            throw new Error('Error al iniciar sesión con Google' + error);
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            try {
                await signIn(values.email, values.password);
                formik.resetForm();
            } catch (error) {
                throw new Error('Error al iniciar sesión' + error);
            }
        },
    });

    return { formik, handleGoogle };
};

export default useLoginForm;