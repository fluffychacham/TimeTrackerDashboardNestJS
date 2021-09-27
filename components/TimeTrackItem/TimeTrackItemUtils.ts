import {
    TimeTrackType,
    TIME_TRACK_EXERCISE,
    TIME_TRACK_PLAY,
    TIME_TRACK_SOCIAL,
    TIME_TRACK_STUDY,
    TIME_TRACK_WORK,
} from "../../model/TimeTrackType";

/**
 * Get string from time track type
 *
 * Converts time track type to a readable string.
 *
 * @param trackType TimeTrackType
 * @returns string
 */
export const getStringFromTimeTrackType = (trackType: TimeTrackType): string => {
    switch (trackType) {
        case TIME_TRACK_WORK:
            return "Work";
        case TIME_TRACK_PLAY:
            return "Play";
        case TIME_TRACK_STUDY:
            return "Study";
        case TIME_TRACK_EXERCISE:
            return "Exercise";
        case TIME_TRACK_SOCIAL:
            return "Social";
        default:
            return "Self Care";
    }
};

/**
 * With time unit
 *
 * Adds "hrs" to the given hours
 *
 * @param hours number
 * @returns string
 */
export const withTimeUnit = (hours: number): string => {
    if (hours == null || isNaN(hours)) return `\u2014hrs`;
    return `${hours}hrs`;
};
