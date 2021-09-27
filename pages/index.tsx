import type { NextPage } from 'next';
import TimeTrackReport from '../components/TimeTrackReport';
import { ITimeTrackReport } from '../model/TimeTrackReport';

const TEMP_REPORT_DATA: ITimeTrackReport = {
  profile: {
    name: "Jeremy Robson",
    imageUrl: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Round&hairColor=Red&facialHairType=Blank&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=PastelYellow&eyeType=Close&eyebrowType=RaisedExcited&mouthType=Concerned&skinColor=Yellow",
  },
  timeTrackData: [
    {
      timeTrackType: 0,
      timeframes: {
        daily: {
          current: 5,
          previous: 7
        },
        weekly: {
          current: 32,
          previous: 36
        },
        monthly: {
          current: 103,
          previous: 128
        }
      }
    },
    {
      timeTrackType: 1,
      timeframes: {
        daily: {
          current: 1,
          previous: 2
        },
        weekly: {
          current: 10,
          previous: 8
        },
        monthly: {
          current: 23,
          previous: 29
        }
      }
    },
    {
      timeTrackType: 2,
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 7
        },
        monthly: {
          current: 13,
          previous: 19
        }
      }
    },
    {
      timeTrackType: 3,
      timeframes: {
        daily: {
          current: 1,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 5
        },
        monthly: {
          current: 11,
          previous: 18
        }
      }
    },
    {
      timeTrackType: 4,
      timeframes: {
        daily: {
          current: 1,
          previous: 3
        },
        weekly: {
          current: 5,
          previous: 10
        },
        monthly: {
          current: 21,
          previous: 23
        }
      }
    },
    {
      timeTrackType: 5,
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 2,
          previous: 2
        },
        monthly: {
          current: 7,
          previous: 11
        }
      }
    }
  ]
}

const Report: NextPage = () => {
  return (
    <div className="container">
      <TimeTrackReport reportData={TEMP_REPORT_DATA}/>
    </div>
  )
}

export default Report;
