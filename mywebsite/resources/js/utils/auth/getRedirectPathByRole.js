import { ROLES } from "../../constants/roles";
export default function getRedirectPathByRole(
    role
) {

    switch (role) {

        case ROLES.ADMIN:
            return "/admin";

        case ROLES.GUIDE:
            return "/guide";

        case ROLES.HOTEL:
            return "/hotel";

        case ROLES.COMPANY:
            return "/company";

        case ROLES.STORE:
            return "/store";
        
        case ROLES.RESTAURANT:
            return "/restaurant";

        default:
            return "/";
    }
}