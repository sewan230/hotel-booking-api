import { useState } from "react";
import { validateForgotPassword } from "../../../utils/validators/authValidators";

const useForgotPassword = () => {
    const [formData, setFormData] = useState({
        email: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    /* HANDLE CHANGE */
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setError("");
    };

    /* SUBMIT */
    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateForgotPassword(formData);

        if (Object.keys(errors).length > 0) {
            setError(errors.email);
            return;
        }

        setLoading(true);
        setError("");
        setSuccess("");

        try {
            // fake API
            await new Promise((resolve) => setTimeout(resolve, 2000));

            setSuccess("Reset link sent to your email");
        } catch (err) {
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return {
        formData,
        loading,
        success,
        error,
        handleChange,
        handleSubmit,
    };
};

export default useForgotPassword;