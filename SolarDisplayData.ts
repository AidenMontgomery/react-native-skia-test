export type SolarDisplayData = {
  solarTotal: number;
  batteryTotal: number;
  houseTotal: number;
  gridTotal: number;

  solarToHouse: boolean;
  solarToGrid: boolean;
  solarToBattery: boolean;

  gridToHouse: boolean;
  gridToBattery: boolean;

  batteryToHouse: boolean;
  batteryToGrid: boolean;

  isSolarActive: boolean;
  isHouseActive: boolean;
  isBatteryActive: boolean;
  isGridActive: boolean;

  batteryLevel: number;
};
