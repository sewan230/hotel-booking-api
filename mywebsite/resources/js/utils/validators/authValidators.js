const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// USERNAME (Arabic + English)
export const validateUsername = (value = "") => {
    const v = value.trim();

    if (!v) return "Username is required";
    if (v.length < 3) return "Minimum 3 characters";
    if (v.length > 20) return "Too long";

    const regex = /^[\u0600-\u06FFA-Za-z0-9_\s]+$/;
    if (!regex.test(v)) {
        return "Only Arabic, English, numbers allowed";
    }

    return "";
};

// EMAIL

export const validateEmail = (email) => {

    const value = email?.trim() || "";

    if (!value) {
        return "Email is required";
    }

    if (value.length > 254) {
        return "Email is too long";
    }

    if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
    }

    return "";
};

// PASSWORD (SMART UX SYSTEM)
export const validatePassword = (value = "") => {

    const v = value;

    const rules = {
        length: v.length >= 8,
        lower: /[a-z]/.test(v),
        upper: /[A-Z]/.test(v),
        number: /\d/.test(v),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(v),
    };

    const score = Object.values(rules).filter(Boolean).length;

    if (!v) {
        return {
            valid: false,
            strength: "weak",
            message: "Password required",
        };
    }

    if (score < 3) {
        return {
            valid: false,
            strength: "weak",
            message: "Weak password",
        };
    }

    if (score === 3 || score === 4) {
        return {
            valid: true,
            strength: "medium",
            message: "Medium strength",
        };
    }

    return {
        valid: true,
        strength: "strong",
        message: "Strong password",
    };
};

// REGISTER
export const validateRegister = (data) => {

    const errors = {};

    const username = validateUsername(data.username);
    if (username) errors.username = username;

    const email = validateEmail(data.email);
    if (email) errors.email = email;

    const password = validatePassword(data.password);
    if (!password.valid) errors.password = password.message;

    if (data.accountType === "invest" && !data.investmentType) {
        errors.investmentType = "Required";
    }

    if (data.investmentType === "facility" && !data.facilityType) {
        errors.facilityType = "Required";
    }

    return errors;
};

// LOGIN VALIDATION
export const validateLogin = (formData) => {

    const errors = {};

    // EMAIL
    if (!formData.email?.trim()) {
        errors.email = "Email is required";
    }

    // PASSWORD
    if (!formData.password) {
        errors.password = "Password is required";
    }

    return errors;
};

// FORGOT PASSWORD VALIDATION

export const validateForgotPassword = (formData) => {
    let errors = {};

    const emailError =
        validateEmail(formData.email);

    if (emailError) {
        errors.email = emailError;
    }

    return errors;
};
