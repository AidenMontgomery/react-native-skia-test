export const toRad = (deg: number) => {
  return (deg * Math.PI) / 180;
};

export type Vector = {
  x: number;
  y: number;
};

export const polar2Canvas = (
  p: {theta: number; radius: number},
  center: Vector,
): Vector => {
  const cartesianCenter = {
    x: p.radius * Math.cos(p.theta),
    y: p.radius * Math.sin(p.theta),
  };

  return {
    x: cartesianCenter.x + center.x,
    y: -1 * cartesianCenter.y + center.y,
  };
};
