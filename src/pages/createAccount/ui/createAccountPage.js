import cls from "./createAccount.module.sass";
import {Box} from "../../../shared/ui/box";
import {Form} from "../../../shared/ui/form";
import {Input} from "../../../shared/ui/input";

export const CreateAccountPage = () => {
    return (
        <div className={cls.account}>
            <div className={cls.account__title}>Ro’yxatdan o’tish</div>
            <div className={cls.account__box}>
                <Box>

                    <h2>Ro’yhatdan o’tish uchun ma’lumotlaringizni kiriting</h2>

                </Box>
                <Box>
                    <Form btnValue={"Kirish"}>
                        <Input title={"Telefon raqam"} type={"number"} placeholder={"Telefon raqamingizni kiriting"}/>
                        <Input title={"Parol"} type={"password"} placeholder={"Parolingizni kiriting"}/>
                    </Form>
                </Box>
            </div>
        </div>
    );
};

