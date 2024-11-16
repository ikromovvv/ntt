import cls from "./enterAccount.module.sass"
import {Box} from "../../../shared/ui/box";
import {Form} from "../../../shared/ui/form";
import {Input} from "../../../shared/ui/input";

export const EnterAccountPage = () => {
    return (
        <div className={cls.account}>
            <div className={cls.account__title}>
                Tizimga kirish
            </div>
            <div className={cls.account__box}>
                <Box>

                    <h2>Tizimga kirish uchun telefon raqamingizni kiritishingiz kerak</h2>

                </Box>
                <Box>
                    <Form btnValue={"Kirish"} title={"Telefon raqam"}>
                        <Input type={"number"} placeholder={"Telefon raqamingizni kiriting"}/>
                    </Form>
                </Box>
            </div>
        </div>
    );
};

