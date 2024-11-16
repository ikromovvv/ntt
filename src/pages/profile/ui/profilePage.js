import cls from "./profile.module.sass"
import {Box} from "../../../shared/ui/box";
import {ProfileHeader} from "../../../entities/profile";

export const ProfilePage = () => {
    return (
        <div className={cls.profile}>
            <div className={cls.profile__title}>
                Mening profilim
            </div>

            <div className={cls.profile__header}>
                <Box>
                    <ProfileHeader/>
                </Box>
                <div className={cls.profile__boxes}>
                    <Box extraClass={cls.box__extra}>
                        <h2>Shaxsiy ma’lumotlar</h2>
                        <span>Batafsil</span>
                    </Box>
                    <Box extraClass={cls.box__extra}>
                        <h2>Ta’lim ma’lumotlari</h2>
                        <span>Batafsil</span>
                    </Box>

                    <Box extraClass={cls.box__extra}>
                        <h2>Me’ning arizalarim</h2>
                        <span>Batafsil</span>
                    </Box>

                    <Box extraClass={cls.box__extra}>
                        <h2>Bildirishnomalar</h2>
                        <span>Batafsil</span>
                    </Box>

                </div>
            </div>

        </div>
    );
};

