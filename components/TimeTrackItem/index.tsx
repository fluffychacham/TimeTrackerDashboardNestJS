import { FunctionComponent } from "react";
import { TimeTrackType, TIME_TRACK_EXERCISE, TIME_TRACK_PLAY, TIME_TRACK_SELF_CARE, TIME_TRACK_SOCIAL, TIME_TRACK_STUDY, TIME_TRACK_WORK } from "../../model/TimeTrackType";
import { ITimeTrackHours } from "../../model/TimeTrackTimeframe";
import Ellipsis from "../Icons/Ellipsis";
import { getStringFromTimeTrackType, withTimeUnit } from "./TimeTrackItemUtils";
import Work from "../Icons/Work";
import Play from "../Icons/Play";
import Study from "../Icons/Study";
import Exercise from "../Icons/Exercise";
import Social from "../Icons/Social";
import SelfCare from "../Icons/SelfCare";

import style from './TimeTrackItem.module.scss';

/**
 * Time track item sub-content
 * 
 * @returns Tsx
 */
const TimeTrackItemSubContent: FunctionComponent<{ previous: number }> = ({ previous }) => {
    return (
        <div className={style.subContent}>
            Last Week - {withTimeUnit(previous)}
        </div>  
    );
}

/**
 * Time track item content
 * 
 * @returns Tsx
 */
const TimeTrackItemContent: FunctionComponent<{ trackTimeHours: ITimeTrackHours }> = ({ trackTimeHours }) => {
    return (
        <div className={style.content}>
            {withTimeUnit(trackTimeHours.current)}
            <TimeTrackItemSubContent previous={trackTimeHours.previous}/>
        </div>
    );
}

/**
 * Time track item header
 * 
 * @returns Tsx
 */
const TimeTrackItemHeader: FunctionComponent<{ trackType: TimeTrackType }> = ({ trackType }) => {
    return (
        <div className={style.header}>
            <span className={style.headerTitle}>
                {getStringFromTimeTrackType(trackType)}
            </span>
            <Ellipsis/>
        </div>
    );
}

/**
 * Time track item background
 * 
 * Adds background depending on the time track type.
 * 
 * @param props
 * @returns Tsx
 */
const TimeTrackItemBackground: FunctionComponent<{ trackType: TimeTrackType }> = ({ trackType, children }) => {

    const backgroundColor = (trackType: TimeTrackType): string => {
        switch(trackType) {
            case TIME_TRACK_WORK:
                return style.workBgColor;
            case TIME_TRACK_PLAY:
                return style.playBgColor;
            case TIME_TRACK_STUDY:
                return style.studyBgColor;
            case TIME_TRACK_EXERCISE:
                return style.exerciseBgColor;
            case TIME_TRACK_SOCIAL:
                return style.socialBgColor;
            default:
                return style.selfCareBgColor;
        }
    }
    
    return (
        <div className={style.background} style={{ backgroundColor: backgroundColor(trackType) }}>
            {children}
            <div className={style.backgroundImage}>
                {trackType === TIME_TRACK_WORK      && <Work/>}
                {trackType === TIME_TRACK_PLAY      && <Play/>}
                {trackType === TIME_TRACK_STUDY     && <Study/>}
                {trackType === TIME_TRACK_EXERCISE  && <Exercise/>}
                {trackType === TIME_TRACK_SOCIAL    && <Social/>}
                {trackType === TIME_TRACK_SELF_CARE && <SelfCare/>}
            </div>
        </div>
    );
}

interface ITimeTrackItemProps {
    trackType: TimeTrackType;
    trackTimeHours: ITimeTrackHours;
}

/**
 * Time track item
 * 
 * @returns Tsx
 */
const TimeTrackItem: FunctionComponent<ITimeTrackItemProps> = ({ trackType, trackTimeHours }) => {
    return (
        <TimeTrackItemBackground trackType={trackType}>
            <div className={style.container}>
                <TimeTrackItemHeader trackType={trackType}/>
                <TimeTrackItemContent trackTimeHours={trackTimeHours}/>
            </div>
        </TimeTrackItemBackground>
    );
}

export default TimeTrackItem;
