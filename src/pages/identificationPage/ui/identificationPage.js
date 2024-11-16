import cls from "./identification.module.sass";
import {Box} from "../../../shared/ui/box";
import {Form} from "../../../shared/ui/form";
import {Input} from "../../../shared/ui/input";

export const IdentificationPage = () => {
    return (
        <div className={cls.account}>
            <div className={cls.account__title}>Identifikatsiya</div>
            <div className={cls.account__box}>
                <Box>

                    <h2>Barcha ma’lumotlar ONE-ID oraqali
                        olinadi</h2>
                </Box>
                <Box>
                    <Form btnValue={"Kirish"}>
                        <Input  title={"Passport yoki ID karta seriya raqami"} type={"number"} placeholder={"-- ---------"} />
                        <Input  title={"Tug’ilgan kun"} type={"date"} placeholder={"Parolingizni kiriting"}/>
                    </Form>
                </Box>
            </div>
        </div>
    );
};

