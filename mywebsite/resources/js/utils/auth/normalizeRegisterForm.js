const normalizeRegisterForm = ({
    username,
    email,
    password,
    accountType,
    investmentType,
    facilityType,
    rememberMe,
}) => {

    const clean = {
        username,
        email,
        password,
        accountType,
        investmentType,
        facilityType,
        rememberMe,
    };

    if (accountType === "tourist") {
        clean.investmentType = "";
        clean.facilityType = "";
    }

    if (investmentType !== "facility") {
        clean.facilityType = "";
    }

    return clean;
};

export default normalizeRegisterForm;