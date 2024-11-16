import {EnterAccountPage} from "pages/enterAccountPage";
import {CreateAccountPage} from "pages/createAccount";
import {IdentificationPage} from "../../../pages/identificationPage";
import {ProfilePage} from "../../../pages/profile";

export const routersConfig = [
    {
        path: "enterAccount",
        element: <EnterAccountPage/>
    },
    {
        path: "createAccount",
        element: <CreateAccountPage/>
    },
    {
        path: "identification",
        element: <IdentificationPage/>
    },
    {
        path: "profile",
        element: <ProfilePage/>
    }
]