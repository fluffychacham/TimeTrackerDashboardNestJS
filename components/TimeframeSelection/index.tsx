
import React, { FunctionComponent } from 'react'
import { useAppState } from '../../context/AppState';
import { DAILY, MONTHLY, TimeTrackTimeFrameType, WEEKLY } from '../../model/TimeTrackTimeframe';

import style from './TimeframeSelection.module.scss';

/**
 * Timeframe selection
 * 
 * @returns Tsx
 */
const TimeframeSelection: FunctionComponent = () => {
    const context = useAppState();

    const handleOnTimeframeClick = (timeFrameType: TimeTrackTimeFrameType) => {
        context.setTimeframe(timeFrameType);
    }

    return (
        <div className={style.container}>
            <button onClick={() => handleOnTimeframeClick(DAILY)}   className={context.timeframe === DAILY   ? style.highlight : ""}>Daily</button>
            <button onClick={() => handleOnTimeframeClick(WEEKLY)}  className={context.timeframe === WEEKLY  ? style.highlight : ""}>Weekly</button>
            <button onClick={() => handleOnTimeframeClick(MONTHLY)} className={context.timeframe === MONTHLY ? style.highlight : ""}>Monthly</button>
        </div>
    );
}

export default TimeframeSelection;

