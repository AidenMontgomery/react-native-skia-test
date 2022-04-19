import React from 'react';
import {
  BlurMask,
  Circle,
  interpolate,
  interpolateColors,
  Line,
  Paint,
  Path,
  SkiaClockValue,
  useDerivedValue,
} from '@shopify/react-native-skia';

import {Vector} from '../utils';

export interface SparkProps {
  clock: SkiaClockValue;
  isActive: boolean;

  animationDuration: number;
  strokeWidth: number;
  radius: number;

  startCenter: Vector;
  targetCenter: Vector;

  startColor: number;
  targetColor: number;

  activeLineColor: number;
  inactiveLineColor: number;
}

export const Spark = (props: SparkProps) => {
  const sparkTrim = useDerivedValue(
    () =>
      interpolate(
        props.clock.current % props.animationDuration,
        [0, props.animationDuration],
        [0, 1],
      ),
    [props.clock],
  );

  const sparkTrimStart = useDerivedValue(
    () => sparkTrim.current - 0.1,
    [sparkTrim],
  );

  const sparkTrimEnd = useDerivedValue(
    () => sparkTrimStart.current + 0.2,
    [sparkTrimStart],
  );

  const sparkPulseWidth = useDerivedValue(() => {
    return interpolate(
      props.clock.current % (props.animationDuration / 5),
      [0, props.animationDuration / 10, props.animationDuration / 5],
      [0, 5, 0],
    );
  }, [props.clock]);

  const sparkColor = useDerivedValue(() => {
    return interpolateColors(
      props.clock.current % props.animationDuration,
      [
        0,
        props.animationDuration / 2,
        props.animationDuration / 1.5,
        props.animationDuration,
      ],
      [
        props.startColor,
        props.startColor,
        props.targetColor,
        props.targetColor,
      ],
    );
  }, [props.clock]);

  const sparkCenter = useDerivedValue(() => {
    const updatedCenter = {
      x: interpolate(
        props.clock.current % props.animationDuration,
        [0, props.animationDuration],
        [props.startCenter.x, props.targetCenter.x],
      ),
      y: interpolate(
        props.clock.current % props.animationDuration,
        [0, props.animationDuration],
        [props.startCenter.y, props.targetCenter.y],
      ),
    };
    return updatedCenter;
  }, [props.clock]);

  return (
    <>
      <Line
        p1={props.startCenter}
        p2={props.targetCenter}
        strokeWidth={props.strokeWidth}
        color={props.isActive ? props.activeLineColor : props.inactiveLineColor}
      />
      <Circle
        c={sparkCenter}
        r={props.radius}
        color={sparkColor}
        opacity={props.isActive ? 1 : 0}>
        <Paint
          color={sparkColor}
          style="stroke"
          strokeWidth={sparkPulseWidth}
          opacity={props.isActive ? 1 : 0}>
          <BlurMask blur={sparkPulseWidth} />
        </Paint>
      </Circle>
      <Path
        path={`M ${props.startCenter.x} ${props.startCenter.y} L ${props.targetCenter.x} ${props.targetCenter.y}`}
        strokeWidth={props.strokeWidth}
        style="stroke"
        color={sparkColor}
        start={sparkTrimStart}
        end={sparkTrimEnd}
        opacity={props.isActive ? 1 : 0}>
        <BlurMask blur={2} style="normal" />
      </Path>
    </>
  );
};
