import { ITimeTrackData } from "./TimeTrackData";
import { ITimeTrackProfile } from "./TimeTrackProfile";

export interface ITimeTrackReport {
    profile      : ITimeTrackProfile;
    timeTrackData: ITimeTrackData[];
}
