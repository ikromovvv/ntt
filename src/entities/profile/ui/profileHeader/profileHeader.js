import profile from "../../../../shared/assets/images/prfilegroup.svg"
export const ProfileHeader = () => {
    return (
        <div style={{display: "flex" , alignItems: "center" , gap: "1rem"}}>
            <img src={profile} alt=""/>
            <div style={{display: "flex" , flexDirection: "column"}} >
                Sardor Ikromov
                <span>991270711</span>
            </div>
        </div>
    );
};

