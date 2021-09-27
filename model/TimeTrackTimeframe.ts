
// Time track time frames
export const DAILY   = 0;
export const WEEKLY  = 1;
export const MONTHLY = 2;

export type TimeTrackTimeFrameType = 0 | 1 | 2;

export interface ITimeTrackHours {
    current : number;
    previous: number;
}

export interface ITimeTrackTimeFrames {
    daily  : ITimeTrackHours;
    weekly : ITimeTrackHours;
    monthly: ITimeTrackHours;
}

export interface ITimeTrackTimeFramesData {
    timeframes: ITimeTrackTimeFrames;
}
