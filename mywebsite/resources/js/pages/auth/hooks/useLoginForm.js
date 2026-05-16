import { useNavigate } from "react-router";
import useForm from "./useForm";
import { loginUser } from "../services/authService";
import { useAuth } from "../../../context/AuthContext";
import { validateLogin } from "../../../utils/validators/authValidators";
import getRedirectPathByRole from "../../../utils/auth/getRedirectPathByRole";

export default function useLoginForm() {

    const navigate = useNavigate();
    const { login } = useAuth();

    const {
        formData,
        errors,
        touched,
        loading,
        error,
        handleChange,
        handleBlur,
        setErrors,
        setLoading,
        setError,
    } = useForm({
        email: "",
        password: "",
        rememberMe: false,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateLogin(formData);

        setErrors(validationErrors);

        setError("");

        if (Object.keys(validationErrors).length > 0) return;

        try {
            setLoading(true);

            const response = await loginUser({
                email: formData.email.trim(),
                password: formData.password,
            });

            login(
                response.user,
                response.token,
                formData.rememberMe
            );

            navigate(
                getRedirectPathByRole(response.user.role)
            );

        } catch {
            setError("Invalid email or password");
        }
        finally {
            setLoading(false);
        }
    };

    return {
        formData,
        errors,
        touched,
        loading,
        error,
        handleChange,
        handleBlur,
        handleSubmit,
    };
}