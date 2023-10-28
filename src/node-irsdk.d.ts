/* eslint-disable camelcase */
/* eslint-disable no-dupe-class-members */
/* eslint-disable @typescript-eslint/class-name-casing */
declare module 'node-irsdk' {
    export type initOptions = {
      telemetryUpdateInterval: number;
      sessionInfoUpdateInterval: number;
      sessionInfoParser?: Record<string, any>;
    };
  
    interface SessionInfoEvent {
      timestamp: string;
      data: SessionInfoEventData;
    }
  
    interface SessionInfoEventData {
      WeekendInfo: WeekendInfo;
      SessionInfo: SessionInfo;
      CameraInfo: CameraInfo;
      RadioInfo: RadioInfo;
      DriverInfo: DriverInfo;
      SplitTimeInfo: SplitTimeInfo;
      CarSetup: CarSetup;
    }
  
    interface CarSetup {
      UpdateCount: number;
      Tires: Tires;
      Chassis: Chassis;
      Drivetrain: Drivetrain;
    }
  
    interface Drivetrain {
      Transmission: Transmission;
      Differential: Differential;
    }
  
    interface Differential {
      ClutchPlates: number;
      Preload: string;
      DriveRampAngle: string;
      CoastRampAngle: string;
    }
  
    interface Transmission {
      FinalDrive: number;
      FirstGear: number;
      SecondGear: number;
      ThirdGear: number;
      FourthGear: number;
      FifthGear: number;
    }
  
    interface Chassis {
      Front: Front;
      LeftFront: LeftFront2;
      LeftRear: LeftRear;
      RightFront: LeftFront2;
      RightRear: LeftRear;
      Rear: Rear;
    }
  
    interface Rear {
      FuelLevel: string;
      ArbDiameter: string;
      ArbArms: number;
      ToeIn: string;
    }
  
    interface LeftRear {
      CornerWeight: string;
      RideHeight: string;
      ShockDeflection: string;
      SpringPerchOffset: string;
      SpringRate: string;
      BumpStiffness: string;
      ReboundStiffness: string;
      Camber: string;
    }
  
    interface LeftFront2 {
      CornerWeight: string;
      RideHeight: string;
      ShockDeflection: string;
      SpringPerchOffset: string;
      SpringRate: string;
      BumpStiffness: string;
      ReboundStiffness: string;
      Camber: string;
      Caster: string;
    }
  
    interface Front {
      ArbArms: number;
      ArbDiameter: string;
      BrakeBias: string;
      ToeIn: string;
      SteeringRatio: number;
      CrossWeight: string;
    }
  
    interface Tires {
      LeftFront: LeftFront;
      LeftRear: LeftFront;
      RightFront: RightFront;
      RightRear: RightFront;
    }
  
    interface RightFront {
      ColdPressure: string;
      LastHotPressure: string;
      LastTempsIMO: string;
      TreadRemaining: string;
    }
  
    interface LeftFront {
      ColdPressure: string;
      LastHotPressure: string;
      LastTempsOMI: string;
      TreadRemaining: string;
    }
  
    interface SplitTimeInfo {
      Sectors: Sector[];
    }
  
    interface Sector {
      SectorNum: number;
      SectorStartPct: number;
    }
  
    interface DriverInfo {
      DriverCarIdx: number;
      DriverUserID: number;
      PaceCarIdx: number;
      DriverHeadPosX: number;
      DriverHeadPosY: number;
      DriverHeadPosZ: number;
      DriverCarIdleRPM: number;
      DriverCarRedLine: number;
      DriverCarFuelKgPerLtr: number;
      DriverCarFuelMaxLtr: number;
      DriverCarMaxFuelPct: number;
      DriverCarSLFirstRPM: number;
      DriverCarSLShiftRPM: number;
      DriverCarSLLastRPM: number;
      DriverCarSLBlinkRPM: number;
      DriverPitTrkPct: number;
      DriverCarEstLapTime: number;
      DriverSetupName: string;
      DriverSetupIsModified: number;
      DriverSetupLoadTypeName: string;
      DriverSetupPassedTech: number;
      DriverIncidentCount: number;
      Drivers: Driver[];
    }
  
    interface Driver {
      CarIdx: number;
      UserName: string;
      AbbrevName?: any;
      Initials?: any;
      UserID: number;
      TeamID: number;
      TeamName: string;
      CarNumber: string;
      CarNumberRaw: number;
      CarPath: string;
      CarClassID: number;
      CarID: number;
      CarIsPaceCar: number;
      CarIsAI: number;
      CarScreenName: string;
      CarScreenNameShort: string;
      CarClassShortName?: any;
      CarClassRelSpeed: number;
      CarClassLicenseLevel: number;
      CarClassMaxFuelPct: string;
      CarClassWeightPenalty: string;
      CarClassColor: number;
      IRating: number;
      LicLevel: number;
      LicSubLevel: number;
      LicString: string;
      LicColor: number;
      IsSpectator: number;
      CarDesignStr: string;
      HelmetDesignStr: string;
      SuitDesignStr: string;
      CarNumberDesignStr: string;
      CarSponsor_1: number;
      CarSponsor_2: number;
      CurDriverIncidentCount: number;
      TeamIncidentCount: number;
    }
  
    interface RadioInfo {
      SelectedRadioNum: number;
      Radios: Radio[];
    }
  
    interface Radio {
      RadioNum: number;
      HopCount: number;
      NumFrequencies: number;
      TunedToFrequencyNum: number;
      ScanningIsOn: number;
      Frequencies: Frequency[];
    }
  
    interface Frequency {
      FrequencyNum: number;
      FrequencyName: string;
      Priority: number;
      CarIdx: number;
      EntryIdx: number;
      ClubID: number;
      CanScan: number;
      CanSquawk: number;
      Muted: number;
      IsMutable: number;
      IsDeletable: number;
    }
  
    interface CameraInfo {
      Groups: Group[];
    }
  
    interface Group {
      GroupNum: number;
      GroupName: string;
      Cameras: Camera[];
      IsScenic?: boolean;
    }
  
    interface Camera {
      CameraNum: number;
      CameraName: string;
    }
  
    interface SessionInfo {
      Sessions: Session[];
    }
  
    interface Session {
      SessionNum: number;
      SessionLaps: string;
      SessionTime: string;
      SessionNumLapsToAvg: number;
      SessionType: string;
      SessionTrackRubberState: string;
      ResultsPositions?: any;
      ResultsFastestLap: ResultsFastestLap[];
      ResultsAverageLapTime: number;
      ResultsNumCautionFlags: number;
      ResultsNumCautionLaps: number;
      ResultsNumLeadChanges: number;
      ResultsLapsComplete: number;
      ResultsOfficial: number;
    }
  
    interface ResultsFastestLap {
      CarIdx: number;
      FastestLap: number;
      FastestTime: number;
    }
  
    interface WeekendInfo {
      TrackName: string;
      TrackID: number;
      TrackLength: string;
      TrackDisplayName: string;
      TrackDisplayShortName: string;
      TrackConfigName: string;
      TrackCity: string;
      TrackCountry: string;
      TrackAltitude: string;
      TrackLatitude: string;
      TrackLongitude: string;
      TrackNorthOffset: string;
      TrackNumTurns: number;
      TrackPitSpeedLimit: string;
      TrackType: string;
      TrackDirection: string;
      TrackWeatherType: string;
      TrackSkies: string;
      TrackSurfaceTemp: string;
      TrackAirTemp: string;
      TrackAirPressure: string;
      TrackWindVel: string;
      TrackWindDir: string;
      TrackRelativeHumidity: string;
      TrackFogLevel: string;
      TrackCleanup: number;
      TrackDynamicTrack: number;
      SeriesID: number;
      SeasonID: number;
      SessionID: number;
      SubSessionID: number;
      LeagueID: number;
      Official: number;
      RaceWeek: number;
      EventType: string;
      Category: string;
      SimMode: string;
      TeamRacing: number;
      MinDrivers: number;
      MaxDrivers: number;
      DCRuleSet: string;
      QualifierMustStartRace: number;
      NumCarClasses: number;
      NumCarTypes: number;
      WeekendOptions: WeekendOptions;
      TelemetryOptions: TelemetryOptions;
    }
  
    interface TelemetryOptions {
      TelemetryDiskFile: string;
    }
  
    interface WeekendOptions {
      NumStarters: number;
      StartingGrid: string;
      QualifyScoring: string;
      CourseCautions: string;
      StandingStart: number;
      Restarts: string;
      WeatherType: string;
      Skies: string;
      WindDirection: string;
      WindSpeed: string;
      WeatherTemp: string;
      RelativeHumidity: string;
      FogLevel: string;
      TimeOfDay: string;
      Unofficial: number;
      CommercialMode: string;
      NightMode: number;
      IsFixedSetup: number;
      StrictLapsChecking: string;
      HasOpenRegistration: number;
      HardcoreLevel: number;
      IncidentLimit: string;
    }
  
    interface TelemetryEvent {
      timestamp: string;
      values: TelemetryEventValues;
    }
  
    interface TelemetryEventValues {
      [key: string]: any;
      SessionTime: number;
      SessionTick: number;
      SessionNum: number;
      SessionState: string;
      SessionUniqueID: number;
      SessionFlags: string[];
      SessionTimeRemain: number;
      SessionLapsRemain: number;
      SessionLapsRemainEx: number;
      RadioTransmitCarIdx: number;
      RadioTransmitRadioIdx: number;
      RadioTransmitFrequencyIdx: number;
      DisplayUnits: number;
      DriverMarker: boolean;
      PushToPass: boolean;
      IsOnTrack: boolean;
      IsReplayPlaying: boolean;
      ReplayFrameNum: number;
      ReplayFrameNumEnd: number;
      IsDiskLoggingEnabled: boolean;
      IsDiskLoggingActive: boolean;
      FrameRate: number;
      CpuUsageBG: number;
      PlayerCarPosition: number;
      PlayerCarClassPosition: number;
      PlayerTrackSurface: string;
      PlayerTrackSurfaceMaterial: string;
      PlayerCarIdx: number;
      PlayerCarTeamIncidentCount: number;
      PlayerCarMyIncidentCount: number;
      PlayerCarDriverIncidentCount: number;
      PlayerCarWeightPenalty: number;
      CarIdxLap: number[];
      CarIdxLapCompleted: number[];
      CarIdxLapDistPct: number[];
      CarIdxTrackSurface: string[];
      CarIdxTrackSurfaceMaterial: string[];
      CarIdxOnPitRoad: boolean[];
      CarIdxPosition: number[];
      CarIdxClassPosition: number[];
      CarIdxF2Time: number[];
      CarIdxEstTime: number[];
      OnPitRoad: boolean;
      CarIdxSteer: number[];
      CarIdxRPM: number[];
      CarIdxGear: number[];
      SteeringWheelAngle: number;
      Throttle: number;
      Brake: number;
      Clutch: number;
      Gear: number;
      RPM: number;
      Lap: number;
      LapCompleted: number;
      LapDist: number;
      LapDistPct: number;
      RaceLaps: number;
      LapBestLap: number;
      LapBestLapTime: number;
      LapLastLapTime: number;
      LapCurrentLapTime: number;
      LapLasNLapSeq: number;
      LapLastNLapTime: number;
      LapBestNLapLap: number;
      LapBestNLapTime: number;
      LapDeltaToBestLap: number;
      LapDeltaToBestLap_DD: number;
      LapDeltaToBestLap_OK: boolean;
      LapDeltaToOptimalLap: number;
      LapDeltaToOptimalLap_DD: number;
      LapDeltaToOptimalLap_OK: boolean;
      LapDeltaToSessionBestLap: number;
      LapDeltaToSessionBestLap_DD: number;
      LapDeltaToSessionBestLap_OK: boolean;
      LapDeltaToSessionOptimalLap: number;
      LapDeltaToSessionOptimalLap_DD: number;
      LapDeltaToSessionOptimalLap_OK: boolean;
      LapDeltaToSessionLastlLap: number;
      LapDeltaToSessionLastlLap_DD: number;
      LapDeltaToSessionLastlLap_OK: boolean;
      LongAccel: number;
      LatAccel: number;
      VertAccel: number;
      RollRate: number;
      PitchRate: number;
      YawRate: number;
      Speed: number;
      VelocityX: number;
      VelocityY: number;
      VelocityZ: number;
      Yaw: number;
      YawNorth: number;
      Pitch: number;
      Roll: number;
      EnterExitReset: number;
      TrackTemp: number;
      TrackTempCrew: number;
      AirTemp: number;
      WeatherType: number;
      Skies: number;
      AirDensity: number;
      AirPressure: number;
      WindVel: number;
      WindDir: number;
      RelativeHumidity: number;
      FogLevel: number;
      DCLapStatus: number;
      DCDriversSoFar: number;
      OkToReloadTextures: boolean;
      CarLeftRight: string[];
      PitRepairLeft: number;
      PitOptRepairLeft: number;
      CamCarIdx: number;
      CamCameraNumber: number;
      CamGroupNumber: number;
      CamCameraState: string[];
      IsOnTrackCar: boolean;
      IsInGarage: boolean;
      SteeringWheelPctTorque: number;
      SteeringWheelPctTorqueSign: number;
      SteeringWheelPctTorqueSignStops: number;
      SteeringWheelPctDamper: number;
      SteeringWheelAngleMax: number;
      ShiftIndicatorPct: number;
      ShiftPowerPct: number;
      ShiftGrindRPM: number;
      ThrottleRaw: number;
      BrakeRaw: number;
      HandbrakeRaw: number;
      SteeringWheelPeakForceNm: number;
      EngineWarnings: any[];
      FuelLevel: number;
      FuelLevelPct: number;
      PitSvFlags: any[];
      PitSvLFP: number;
      PitSvRFP: number;
      PitSvLRP: number;
      PitSvRRP: number;
      PitSvFuel: number;
      ReplayPlaySpeed: number;
      ReplayPlaySlowMotion: boolean;
      ReplaySessionTime: number;
      ReplaySessionNum: number;
      TireLF_RumblePitch: number;
      TireRF_RumblePitch: number;
      TireLR_RumblePitch: number;
      TireRR_RumblePitch: number;
      dcAntiRollFront: number;
      dcAntiRollRear: number;
      dcBrakeBias: number;
      SteeringWheelTorque: number;
      SteeringWheelTorque_ST: number[];
      RFcoldPressure: number;
      RFtempCL: number;
      RFtempCM: number;
      RFtempCR: number;
      RFwearL: number;
      RFwearM: number;
      RFwearR: number;
      LFcoldPressure: number;
      LFtempCL: number;
      LFtempCM: number;
      LFtempCR: number;
      LFwearL: number;
      LFwearM: number;
      LFwearR: number;
      WaterTemp: number;
      WaterLevel: number;
      FuelPress: number;
      FuelUsePerHour: number;
      OilTemp: number;
      OilPress: number;
      OilLevel: number;
      Voltage: number;
      ManifoldPress: number;
      RRcoldPressure: number;
      RRtempCL: number;
      RRtempCM: number;
      RRtempCR: number;
      RRwearL: number;
      RRwearM: number;
      RRwearR: number;
      LRcoldPressure: number;
      LRtempCL: number;
      LRtempCM: number;
      LRtempCR: number;
      LRwearL: number;
      LRwearM: number;
      LRwearR: number;
      RRshockDefl: number;
      RRshockDefl_ST: number[];
      RRshockVel: number;
      RRshockVel_ST: number[];
      LRshockDefl: number;
      LRshockDefl_ST: number[];
      LRshockVel: number;
      LRshockVel_ST: number[];
      RFshockDefl: number;
      RFshockDefl_ST: number[];
      RFshockVel: number;
      RFshockVel_ST: number[];
      LFshockDefl: number;
      LFshockDefl_ST: number[];
      LFshockVel: number;
      LFshockVel_ST: number[];
    }
  
    /**
     * Initialize JsIrSdk, can be done once before using getInstance first time.
     * @param initOptions Name of the transition.
     * @returns Running instance of JsIrSdk
     */
  
    export function init(options: initOptions): iracing;
    /**
     * Get initialized instance of JsIrSdk
     * @returns Running instance of JsIrSdk
     */
    export function getInstance(): iracing;
  
    export class iracing {
      /**
       * iRacing, sim, is started
       */
      on(event: 'Connected', listener: () => void): this;
  
      /**
       * iRacing, sim, was closed
       */
      on(event: 'Disconnected', listener: () => void): this;
  
      /**
       * Telemetry update
       */
      on(event: 'Telemetry', listener: (event: TelemetryEvent) => void): this;
  
      /**
       * SessionInfo update
       * @param event Contains SessionsInfo
       */
      on(event: 'SessionInfo', listener: (event: SessionInfoEvent) => void): this;
    }
  }