import {ROLES} from '../../constants/roles'
export const resolveRole = (formData) => {

    if (formData.accountType === "tourist") {
        return ROLES.USER;
    }

    if (formData.accountType === "invest") {

        if (formData.investmentType === "tourist_guide") {
            return ROLES.GUIDE;
        }

        if (formData.investmentType === "facility") {

            switch (formData.facilityType) {

                case "hotel":
                    return ROLES.HOTEL;

                case "resturant":
                    return ROLES.RESTAURANT;

                case "store":
                    return ROLES.STORE;

                case "tourism_company":
                    return ROLES.COMPANY;

                default:
                    return ROLES.COMPANY;
            }
        }
    }

    return ROLES.USER;
};