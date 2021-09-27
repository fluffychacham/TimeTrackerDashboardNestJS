import React, { FunctionComponent } from 'react';

import style from './UserProfile.module.scss';

/**
 * User profile info
 * 
 * @returns Tsx
 */
const UserProfileInfo: FunctionComponent<{ reportName: string }> = ({ reportName }) => {
    const splitReportName = (reportName || "").split(" ");

    return (
        <div className={style.userProfileInfo}>
            <div className={style.reportForText}>
                Report for
            </div>
            <div className={style.reportName}>
                {splitReportName.map(name => <div>{name}</div>)}
            </div>
        </div>
    );
}

/**
 * User profile image
 * 
 * @returns Tsx
 */
const UserProfileImage: FunctionComponent<{ imageUrl: string }> = ({ imageUrl }) => {
    return (
        <div className={style.userProfileImage}>
            <img src={imageUrl} alt="Author image" />
        </div>
    );
}

interface IUserProfileProps {
    imageUrl  : string;
    reportName: string;
}

/**
 * User profile
 * 
 * @returns Tsx
 */
const UserProfile: FunctionComponent<IUserProfileProps> = ({ imageUrl, reportName }) => {
    return (
        <div className={style.container}>
            <UserProfileImage imageUrl={imageUrl}/>
            <UserProfileInfo reportName={reportName}/>
        </div>
    );
}

export default UserProfile;
