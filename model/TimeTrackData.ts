import { ITimeTrackTimeFramesData } from "./TimeTrackTimeframe";
import { TimeTrackType } from "./TimeTrackType";

export interface ITimeTrackData extends ITimeTrackTimeFramesData {
    timeTrackType: TimeTrackType;
}
