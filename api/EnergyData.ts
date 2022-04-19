type Node = {
  id: 'h' | 's' | 'b' | 'g';
  mainStat: number;
};

type Edge = {
  id: 's_h' | 's_g' | 's_b' | 'b_h' | 'g_h' | 'b_g';
  source: 'h' | 's' | 'b' | 'g';
  target: 'h' | 's' | 'b' | 'g';
  mainStat: number;
};

export type EnergyData = {
  soc: number;
  nodes: Array<Node>;
  edges: Array<Edge>;
};
