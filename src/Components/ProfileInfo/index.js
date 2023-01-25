import React from "react";
import classes from "./index.module.scss";
import UserImg from "../../Images/userImg.svg";
import {Link} from "react-router-dom";

const ProfileInfo = () => {
    return(
        <>
            <div className={classes.profileInfo}>
                <div className={classes.imgBox}>
                    <img src={UserImg} />
                </div>
                <h3 className={'text-center fw-semibold'}>Jacob John</h3>
                <hr />
                <div className={"mb-3 font-16"}>
                    <div className={"text-muted font-12"}>Email:</div>
                    <Link to={"mailto:jacobjohn@gmail.com"}>jacobjohn@gmail.com</Link>
                </div>
                <div className={"mb-3 font-16"}>
                    <div className={"text-muted font-12"}>Phone Number:</div>
                    <Link to={"tel:+1 (127) 2123 212"}>+1 (127) 2123 212</Link>
                </div>
                <div className={"mb-3 font-16"}>
                    <div className={"text-muted font-12"}>Location:</div>
                    <div>Los Angeles, Canada</div>
                </div>
                <div className={"mb-3 font-16"}>
                    <div className={"text-muted font-12"}>Smart Watch Brand:</div>
                    <div>Apple Watch Series 7 Cellular</div>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo;