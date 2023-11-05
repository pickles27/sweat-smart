export enum Equipment {
  Treadmill = "Treadmill",
  ExerciseBike = "Exercise Bike",
  RowingMachine = "Rowing Machine",
  EllipticalTrainer = "Elliptical Trainer",
  WeightBench = "Weight Bench",
  Dumbbells = "Dumbbells",
  Barbell = "Barbell",
  Kettlebells = "Kettlebells",
  ResistanceBands = "Resistance Bands",
  StabilityBall = "Stability Ball",
  MedicineBall = "Medicine Ball",
  PullUpBar = "Pull-Up Bar",
  PowerRack = "Power Rack",
  SmithMachine = "Smith Machine",
  CableMachine = "Cable Machine",
  LegPressMachine = "Leg Press Machine",
  PunchingBag = "Punching Bag",
  PlyometricBox = "Plyometric Box",
  YogaMat = "Yoga Mat",
  TRXSuspensionTrainer = "TRX Suspension Trainer",
  FoamRoller = "Foam Roller",
  DipStation = "Dip Station",
  AbRoller = "Ab Roller",
  BattleRopes = "Battle Ropes",
  HexTrapBar = "Hex/Trap Bar",
  GluteHamDeveloper = "Glute Ham Developer (GHD)",
  LatPulldownMachine = "Lat Pulldown Machine",
  LegCurlMachine = "Leg Curl Machine",
  LegExtensionMachine = "Leg Extension Machine",
  SledOrProwler = "Sled or Prowler",
}

export enum WorkoutType {
  WeightLifting = "Weight Lifting",
  HighIntensityIntervalTraining = "High-Intensity Interval Training (HIIT)",
  Yoga = "Yoga",
  Powerlifting = "Powerlifting",
  Cardio = "Cardio",
  CrossFit = "CrossFit",
  Pilates = "Pilates",
  Bodybuilding = "Bodybuilding",
  Running = "Running",
  Swimming = "Swimming",
  Cycling = "Cycling",
  MartialArts = "Martial Arts",
  FunctionalTraining = "Functional Training",
  Dance = "Dance",
  Calisthenics = "Calisthenics",
  Stretching = "Stretching",
  CircuitTraining = "Circuit Training",
  Strongman = "Strongman",
  Rowing = "Rowing",
  Kickboxing = "Kickboxing",
  BodyweightTraining = "Bodyweight Training",
}

export enum Split {
  FullBody = "Full Body",
  UpperLower = "Upper/Lower Body",
  PushPullLegs = "Push/Pull/Legs (PPL)",
  AnteriorPosterior = "Anterior/Posterior",
}

export enum MuscleGroup {
  Chest = "Chest",
  Back = "Back",
  Legs = "Legs",
  Shoulders = "Shoulders",
  Arms = "Arms",
  Core = "Core",
  Glutes = "Glutes",
}

export enum DayOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

export enum GymLocation {
  Home = "Home",
  Commercial = "Commercial",
}

export interface Option {
  label: string;
  value: string;
}

export enum QuestionType {
  Radio = "Radio",
  MultiSelect = "MultiSelect",
}

export interface Question {
  options: Option[];
  name: keyof PlanConstraints;
  label: string;
  type: QuestionType;
}

export interface PlanConstraints {
  equipment?: Equipment[];
  gymLocation?: GymLocation;
  workoutTypes?: WorkoutType[];
  split?: Split;
  emphasis?: MuscleGroup[];
  restDays?: DayOfWeek[];
}
