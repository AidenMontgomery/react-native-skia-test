import {EnergyData} from './EnergyData';

export const MockData: EnergyData[] = [
  {
    // 1
    soc: 10,
    nodes: [
      {id: 'h', mainStat: 10},
      {id: 's', mainStat: 0},
      {id: 'b', mainStat: 0},
      {id: 'g', mainStat: 10},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 0},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 0},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 0},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 10},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 0},
    ],
  },
  {
    // 2
    soc: 10,
    nodes: [
      {id: 'h', mainStat: 850},
      {id: 's', mainStat: 10},
      {id: 'b', mainStat: 0},
      {id: 'g', mainStat: 840},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 10},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 0},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 0},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 840},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 0},
    ],
  },
  {
    // 3
    soc: 10,
    nodes: [
      {id: 'h', mainStat: 1050},
      {id: 's', mainStat: 10},
      {id: 'b', mainStat: 0},
      {id: 'g', mainStat: 1040},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 10},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 0},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 0},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 1040},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 0},
    ],
  },
  {
    // 4
    soc: 10,
    nodes: [
      {id: 'h', mainStat: 950},
      {id: 's', mainStat: 50},
      {id: 'b', mainStat: 0},
      {id: 'g', mainStat: 900},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 50},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 0},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 0},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 900},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 0},
    ],
  },
  {
    // 5
    soc: 10,
    nodes: [
      {id: 'h', mainStat: 850},
      {id: 's', mainStat: 10},
      {id: 'b', mainStat: 0},
      {id: 'g', mainStat: 840},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 10},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 0},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 0},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 840},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 0},
    ],
  },
  {
    // 6
    soc: 10,
    nodes: [
      {id: 'h', mainStat: 2650},
      {id: 's', mainStat: 100},
      {id: 'b', mainStat: 0},
      {id: 'g', mainStat: 2550},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 100},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 0},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 0},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 2550},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 0},
    ],
  },
  {
    // 7
    soc: 10,
    nodes: [
      {id: 'h', mainStat: 1600},
      {id: 's', mainStat: 200},
      {id: 'b', mainStat: 0},
      {id: 'g', mainStat: 1400},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 200},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 0},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 0},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 1400},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 0},
    ],
  },
  {
    // 8
    soc: 10,
    nodes: [
      {id: 'h', mainStat: 1550},
      {id: 's', mainStat: 200},
      {id: 'b', mainStat: 0},
      {id: 'g', mainStat: 1350},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 200},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 0},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 0},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 1350},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 0},
    ],
  },
  {
    // 9
    soc: 10,
    nodes: [
      {id: 'h', mainStat: 1650},
      {id: 's', mainStat: 250},
      {id: 'b', mainStat: 0},
      {id: 'g', mainStat: 1400},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 250},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 0},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 0},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 1400},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 0},
    ],
  },
  {
    // 10
    soc: 10,
    nodes: [
      {id: 'h', mainStat: 1250},
      {id: 's', mainStat: 250},
      {id: 'b', mainStat: 0},
      {id: 'g', mainStat: 1000},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 250},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 0},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 0},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 1000},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 0},
    ],
  },
  {
    // 11
    soc: 10,
    nodes: [
      {id: 'h', mainStat: 560},
      {id: 's', mainStat: 3000},
      {id: 'b', mainStat: 2430},
      {id: 'g', mainStat: 10},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 560},
      {id: 's_g', source: 's', target: 'g', mainStat: 10},
      {id: 's_b', source: 's', target: 'b', mainStat: 2430},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 0},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 0},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 0},
    ],
  },
  {
    // 12
    soc: 25,
    nodes: [
      {id: 'h', mainStat: 960},
      {id: 's', mainStat: 3500},
      {id: 'b', mainStat: 2430},
      {id: 'g', mainStat: 110},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 960},
      {id: 's_g', source: 's', target: 'g', mainStat: 100},
      {id: 's_b', source: 's', target: 'b', mainStat: 2430},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 0},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 0},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 0},
    ],
  },
  {
    // 13
    soc: 40,
    nodes: [
      {id: 'h', mainStat: 760},
      {id: 's', mainStat: 3200},
      {id: 'b', mainStat: 2430},
      {id: 'g', mainStat: 10},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 760},
      {id: 's_g', source: 's', target: 'g', mainStat: 10},
      {id: 's_b', source: 's', target: 'b', mainStat: 2430},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 0},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 0},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 0},
    ],
  },
  {
    // 14
    soc: 50,
    nodes: [
      {id: 'h', mainStat: 300},
      {id: 's', mainStat: 3000},
      {id: 'b', mainStat: 2700},
      {id: 'g', mainStat: 0},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 300},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 2700},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 0},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 0},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 0},
    ],
  },
  {
    // 15
    soc: 60,
    nodes: [
      {id: 'h', mainStat: 2540},
      {id: 's', mainStat: 1500},
      {id: 'b', mainStat: 1040},
      {id: 'g', mainStat: 0},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 1500},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 0},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 1040},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 0},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 0},
    ],
  },
  {
    // 16
    soc: 55,
    nodes: [
      {id: 'h', mainStat: 1350},
      {id: 's', mainStat: 1000},
      {id: 'b', mainStat: 100},
      {id: 'g', mainStat: 250},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 1000},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 0},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 100},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 250},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 0},
    ],
  },
  {
    // 17
    soc: 55,
    nodes: [
      {id: 'h', mainStat: 1245},
      {id: 's', mainStat: 3800},
      {id: 'b', mainStat: 2555},
      {id: 'g', mainStat: 0},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 1245},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 2555},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 0},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 0},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 0},
    ],
  },
  {
    // 18
    soc: 65,
    nodes: [
      {id: 'h', mainStat: 850},
      {id: 's', mainStat: 4150},
      {id: 'b', mainStat: 2600},
      {id: 'g', mainStat: 750},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 850},
      {id: 's_g', source: 's', target: 'g', mainStat: 700},
      {id: 's_b', source: 's', target: 'b', mainStat: 2600},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 0},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 0},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 50},
    ],
  },
  {
    // 19
    soc: 86,
    nodes: [
      {id: 'h', mainStat: 900},
      {id: 's', mainStat: 3450},
      {id: 'b', mainStat: 1550},
      {id: 'g', mainStat: 1000},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 900},
      {id: 's_g', source: 's', target: 'g', mainStat: 1000},
      {id: 's_b', source: 's', target: 'b', mainStat: 1500},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 0},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 0},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 50},
    ],
  },
  {
    // 20
    soc: 97,
    nodes: [
      {id: 'h', mainStat: 9540},
      {id: 's', mainStat: 1678},
      {id: 'b', mainStat: 2406},
      {id: 'g', mainStat: 5456},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 1678},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 0},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 2406},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 5456},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 0},
    ],
  },
  {
    // 21
    soc: 80,
    nodes: [
      {id: 'h', mainStat: 4500},
      {id: 's', mainStat: 0},
      {id: 'b', mainStat: 4500},
      {id: 'g', mainStat: 0},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 0},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 0},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 4500},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 0},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 0},
    ],
  },
  {
    // 22
    soc: 55,
    nodes: [
      {id: 'h', mainStat: 2690},
      {id: 's', mainStat: 0},
      {id: 'b', mainStat: 2690},
      {id: 'g', mainStat: 0},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 0},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 0},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 2690},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 0},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 0},
    ],
  },
  {
    // 23
    soc: 30,
    nodes: [
      {id: 'h', mainStat: 1879},
      {id: 's', mainStat: 1},
      {id: 'b', mainStat: 1879},
      {id: 'g', mainStat: 1},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 0},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 0},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 1879},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 0},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 0},
    ],
  },
  {
    // 24
    soc: 10,
    nodes: [
      {id: 'h', mainStat: 2500},
      {id: 's', mainStat: 0},
      {id: 'b', mainStat: 2500},
      {id: 'g', mainStat: 0},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 0},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 0},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 2500},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 0},
      {id: 'b_g', source: 'g', target: 'b', mainStat: 0},
    ],
  },
  {
    // 25
    soc: 0,
    nodes: [
      {id: 'h', mainStat: 950},
      {id: 's', mainStat: 0},
      {id: 'b', mainStat: 0},
      {id: 'g', mainStat: 950},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 0},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 0},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 0},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 950},
      {id: 'b_g', source: 'b', target: 'g', mainStat: 0},
    ],
  },
  {
    // 26
    soc: 3,
    nodes: [
      {id: 'h', mainStat: 800},
      {id: 's', mainStat: 0},
      {id: 'b', mainStat: 1250},
      {id: 'g', mainStat: 2050},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 0},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 0},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 0},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 800},
      {id: 'b_g', source: 'g', target: 'b', mainStat: 1250},
    ],
  },
  {
    // 27
    soc: 7,
    nodes: [
      {id: 'h', mainStat: 900},
      {id: 's', mainStat: 0},
      {id: 'b', mainStat: 1500},
      {id: 'g', mainStat: 2400},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 0},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 0},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 0},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 900},
      {id: 'b_g', source: 'g', target: 'b', mainStat: 1500},
    ],
  },
  {
    // 28
    soc: 8,
    nodes: [
      {id: 'h', mainStat: 2489},
      {id: 's', mainStat: 0},
      {id: 'b', mainStat: 1000},
      {id: 'g', mainStat: 3489},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 0},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 0},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 0},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 2489},
      {id: 'b_g', source: 'g', target: 'b', mainStat: 1000},
    ],
  },
  {
    // 29
    soc: 9,
    nodes: [
      {id: 'h', mainStat: 3000},
      {id: 's', mainStat: 0},
      {id: 'b', mainStat: 2000},
      {id: 'g', mainStat: 5000},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 0},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 0},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 0},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 3000},
      {id: 'b_g', source: 'g', target: 'b', mainStat: 2000},
    ],
  },
  {
    // 30
    soc: 10,
    nodes: [
      {id: 'h', mainStat: 3500},
      {id: 's', mainStat: 0},
      {id: 'b', mainStat: 2000},
      {id: 'g', mainStat: 5500},
    ],
    edges: [
      {id: 's_h', source: 's', target: 'h', mainStat: 0},
      {id: 's_g', source: 's', target: 'g', mainStat: 0},
      {id: 's_b', source: 's', target: 'b', mainStat: 0},
      {id: 'b_h', source: 'b', target: 'h', mainStat: 0},
      {id: 'g_h', source: 'g', target: 'h', mainStat: 3500},
      {id: 'b_g', source: 'g', target: 'b', mainStat: 2000},
    ],
  },
];
