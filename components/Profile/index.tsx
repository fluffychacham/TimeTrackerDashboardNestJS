import React, { FunctionComponent } from 'react';
import { ITimeTrackProfile } from '../../model/TimeTrackProfile';
import UserProfile from '../UserProfile';

import style from './Profile.module.scss';

interface IProfileProps {
    profile: ITimeTrackProfile;
}

/**
 * Profile
 * 
 * @returns Tsx
 */
const Profile: FunctionComponent<IProfileProps> = ({ profile }) => {
    return (
        <div className={style.container}>
            <UserProfile imageUrl={profile.imageUrl} reportName={profile.name}/>
        </div>
    )
}

export default Profile;
