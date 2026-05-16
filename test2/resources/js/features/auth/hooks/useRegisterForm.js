import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router";

import useForm from "./useForm";
import { useAuth } from "../../../context/AuthContext.jsx";

import { validateRegister, validatePassword } from "../../../utils/validators/authValidators";
import normalizeRegisterForm from "../../../utils/auth/normalizeRegisterForm";
import { resolveRole } from "../../../utils/auth/roles";
import getRedirectPathByRole from "../../../utils/auth/getRedirectPathByRole";
import { registerUser } from "../services/authService";

const initialForm = {
    username: "",
    email: "",
    password: "",
    accountType: "tourist",
    investmentType: "",
    facilityType: "",
    rememberMe: false,
};

export default function useRegisterForm() {

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
        touchAll,
        reset,
    } = useForm(initialForm);

    const cleanedData = useMemo(() => normalizeRegisterForm(formData), [formData]);

    const passwordState = useMemo(
        () => validatePassword(formData.password),
        [formData.password]
    );

    const canSubmit = useMemo(() => {
    return (
        !loading &&
        Object.keys(validateRegister(cleanedData)).length === 0
    );
}, [loading, cleanedData]);

    const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    setError(null);
    touchAll();

    const validationErrors = validateRegister(cleanedData);

    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }

    try {
        setLoading(true);

        const role = resolveRole(cleanedData);

        const response = await registerUser({
            ...cleanedData,
            role,
        });

        login(
            response.user,
            response.token,
            cleanedData.rememberMe
        );

        navigate(getRedirectPathByRole(response.user.role));

        reset(initialForm);

    } catch {
        setError("Registration failed");
    } finally {
        setLoading(false);
    }

}, [
    cleanedData,
    setErrors,
    setLoading,
    setError,
    login,
    navigate,
    reset,
    touchAll
]);

    return {
        formData,
        errors,
        touched,
        loading,
        error,

        handleChange,
        handleBlur,
        handleSubmit,

        canSubmit,

        passwordStrength: passwordState.strength,

        showInvestmentType: formData.accountType === "invest",
        showFacilityType:
            formData.accountType === "invest" &&
            formData.investmentType === "facility",
    };
}