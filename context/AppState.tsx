
import React, { createContext, Dispatch, FunctionComponent, SetStateAction, useContext, useState } from 'react';
import { DAILY, TimeTrackTimeFrameType } from '../model/TimeTrackTimeframe';

export interface IAppState {
    timeframe   : TimeTrackTimeFrameType;
    setTimeframe: Dispatch<SetStateAction<TimeTrackTimeFrameType>>;
}

export const AppStateContext = createContext<IAppState>({} as IAppState);

/**
 * App state
 * 
 * Global app state context
 * 
 * @param props IAppStateProps
 * @returns Tsx
 */
const AppState: FunctionComponent = ({ children }) => {
    const [timeframe, setTimeframe] = useState<TimeTrackTimeFrameType>(DAILY);

    return (
        <AppStateContext.Provider value={{ timeframe, setTimeframe }}>
            {children}
        </AppStateContext.Provider>
    )
}

/**
 * Use app state
 * 
 * Helper function to instantiate app state context.
 * 
 * @returns IAppState
 */
export const useAppState = (): IAppState => {
    return useContext(AppStateContext);
}

export default AppState

