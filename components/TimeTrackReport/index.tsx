import React, { FunctionComponent } from 'react';
import { useAppState } from '../../context/AppState';
import { ITimeTrackData } from '../../model/TimeTrackData';
import { ITimeTrackReport } from '../../model/TimeTrackReport';
import { DAILY, ITimeTrackHours, ITimeTrackTimeFramesData, WEEKLY } from '../../model/TimeTrackTimeframe';
import Profile from '../Profile';
import TimeframeSelection from '../TimeframeSelection';
import TimeTrackItem from '../TimeTrackItem';

import style from './TimeTrackReport.module.scss';

interface ITimeTrackReportProps {
    reportData: ITimeTrackReport;
}

/**
 * Time track report
 * 
 * @returns Tsx
 */
const TimeTrackReport: FunctionComponent<ITimeTrackReportProps> = ({ reportData }) => {
    const appState = useAppState();
    const reports = (reportData?.timeTrackData || [] as ITimeTrackTimeFramesData[]);

    const getHoursFromReportData = (reportData: ITimeTrackData): ITimeTrackHours => {
        switch(appState.timeframe) {
            case DAILY:
                return reportData.timeframes.daily;
            case WEEKLY:
                return reportData.timeframes.weekly;
            default:
                return reportData.timeframes.monthly;
        }
    }

    return (
        <div className={style.container}>
            <div className={style.leftContent}>
                <Profile profile={reportData.profile}/>
                <TimeframeSelection/>
            </div>
            <div className={style.rightContent}>
                {reports.map(report => <TimeTrackItem trackTimeHours={getHoursFromReportData(report)} trackType={report.timeTrackType}/>)}
            </div>
        </div>
    )
}

export default TimeTrackReport;
