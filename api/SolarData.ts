import {SolarDisplayData} from '../SolarDisplayData';
import {EnergyData} from './EnergyData';
import {MockData} from './MockData';

export class SolarData {
  static mockDataCallCount = 0;
  static initialData: SolarDisplayData = {
    solarTotal: 0,
    batteryTotal: 0,
    houseTotal: 0,
    gridTotal: 0,

    solarToHouse: false,
    solarToBattery: false,
    solarToGrid: false,

    gridToHouse: false,
    gridToBattery: false,

    batteryToGrid: false,
    batteryToHouse: false,

    isHouseActive: false,
    isBatteryActive: false,
    isSolarActive: false,
    isGridActive: false,

    batteryLevel: 0,
  };

  static processData(newData: EnergyData): SolarDisplayData {
    const updatedData = {...SolarData.initialData};
    newData.nodes.map(current => {
      switch (current.id) {
        case 'b': {
          updatedData.batteryTotal = current.mainStat;
          break;
        }
        case 'h': {
          updatedData.houseTotal = current.mainStat;
          break;
        }
        case 's': {
          updatedData.solarTotal = current.mainStat;
          break;
        }
        case 'g': {
          updatedData.gridTotal = current.mainStat;
          break;
        }
      }
    });

    updatedData.isBatteryActive = false;
    updatedData.isGridActive = false;
    updatedData.isHouseActive = false;
    updatedData.isSolarActive = false;

    updatedData.batteryLevel = newData.soc;

    newData.edges.map(current => {
      switch (current.id) {
        case 's_h': {
          updatedData.solarToHouse = current.mainStat > 0;
          updatedData.isSolarActive =
            updatedData.isSolarActive || updatedData.solarToHouse;
          updatedData.isHouseActive =
            updatedData.isHouseActive || updatedData.solarToHouse;
          break;
        }
        case 's_b': {
          updatedData.solarToBattery = current.mainStat > 0;
          updatedData.isSolarActive =
            updatedData.isSolarActive || updatedData.solarToBattery;
          updatedData.isBatteryActive =
            updatedData.isBatteryActive || updatedData.solarToBattery;
          break;
        }
        case 's_g': {
          updatedData.solarToGrid = current.mainStat > 0;
          updatedData.isSolarActive =
            updatedData.isSolarActive || updatedData.solarToGrid;
          updatedData.isGridActive =
            updatedData.isGridActive || updatedData.solarToGrid;
          break;
        }
        case 'b_h': {
          updatedData.batteryToHouse = current.mainStat > 0;
          updatedData.isHouseActive =
            updatedData.isHouseActive || updatedData.batteryToHouse;
          updatedData.isBatteryActive =
            updatedData.isBatteryActive || updatedData.batteryToHouse;
          break;
        }
        case 'g_h': {
          updatedData.gridToHouse = current.mainStat > 0;
          updatedData.isHouseActive =
            updatedData.isHouseActive || updatedData.gridToHouse;
          updatedData.isGridActive =
            updatedData.isGridActive || updatedData.gridToHouse;
          break;
        }
        case 'b_g': {
          updatedData.batteryToGrid = false;
          updatedData.gridToBattery = false;
          if (current.source === 'g') {
            // From grid to battery
            updatedData.gridToBattery = current.mainStat > 0;
            updatedData.isBatteryActive =
              updatedData.isBatteryActive || updatedData.gridToBattery;
            updatedData.isGridActive =
              updatedData.isGridActive || updatedData.gridToBattery;
          } else {
            // From battery to grid
            updatedData.batteryToGrid = current.mainStat > 0;
            updatedData.isBatteryActive =
              updatedData.isBatteryActive || updatedData.batteryToGrid;
            updatedData.isGridActive =
              updatedData.isGridActive || updatedData.batteryToGrid;
          }
          break;
        }
      }
    });

    return updatedData;
  }

  static refresh: (mock: boolean) => Promise<SolarDisplayData> = async (
    mock: boolean,
  ) => {
    if (mock) {
      SolarData.mockDataCallCount++;
      return new Promise(resolve => {
        const mockData = MockData[SolarData.mockDataCallCount % 30];
        resolve(SolarData.processData(mockData));
      });
    }

    const response = await fetch('http://192.168.0.2:1880/solar_flow');
    const newData: EnergyData = await response.json();
    return SolarData.processData(newData);
  };
}
