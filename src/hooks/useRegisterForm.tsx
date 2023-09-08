import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../context/AuthProvider';
import { useState } from 'react';

const useRegisterForm = () => {
    const { signIn, logInWithGoogle, logInWithGithub } = useAuth();
    const [googleError, setGoogleError] = useState<string | null>(null);
    const [githubError, setGithubError] = useState<string | null>(null);
    const [submitError, setSubmitError] = useState<string | null>(null);


    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
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
            if (error instanceof Error) {
                setGoogleError(error.message);
            }
        }
    };

    const handleGithub = async () => {
        try {
            await logInWithGithub();
        } catch (error) {
            if (error instanceof Error) {
                setGithubError(error.message);
            }
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
                if (error instanceof Error) {
                    setSubmitError(error.message);
                }
            }
        },
    });

    return { formik, handleGoogle, handleGithub, googleError, githubError, submitError };
};

export default useRegisterForm;