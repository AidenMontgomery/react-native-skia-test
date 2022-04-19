import React from 'react';
import {
  BlurMask,
  Circle,
  interpolate,
  interpolateColors,
  Paint,
  Path,
  Skia,
  SkiaClockValue,
  useDerivedValue,
} from '@shopify/react-native-skia';
import {polar2Canvas, Vector} from '../utils';

export interface AtomProps {
  clock: SkiaClockValue;
  isActive: boolean;

  animationDuration: number;
  strokeWidth: number;
  mainRadius: number;
  radius: number;

  startAngle: number;
  targetAngle: number;

  center: Vector;

  startColor: number;
  targetColor: number;

  isClockwise: boolean;

  arcStartAngle: number;
  arcSweepAngle: number;

  activeLineColor: number;
  inactiveLineColor: number;
}

export const Atom = (props: AtomProps) => {
  const atomAngle = useDerivedValue(
    () =>
      interpolate(
        props.clock.current % props.animationDuration,
        [0, props.animationDuration],
        [props.startAngle, props.targetAngle],
      ),
    [props.clock],
  );

  const atomCenter = useDerivedValue(() => {
    return polar2Canvas(
      {
        theta: atomAngle.current,
        radius: props.mainRadius,
      },
      props.center,
    );
  }, [props.clock]);

  const atomColor = useDerivedValue(() => {
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

  const atomPulseWidth = useDerivedValue(() => {
    return interpolate(
      props.clock.current % (props.animationDuration / 5),
      [0, props.animationDuration / 10, props.animationDuration / 5],
      [0, 5, 0],
    );
  }, [props.clock]);

  const rect = Skia.XYWHRect(
    props.center.x - props.mainRadius,
    props.center.y - props.mainRadius,
    props.mainRadius * 2,
    props.mainRadius * 2,
  );

  const atomPath = Skia.Path.Make();
  atomPath.addArc(rect, props.arcStartAngle, props.arcSweepAngle);

  const atomTrim = useDerivedValue(
    () =>
      interpolate(
        props.clock.current % props.animationDuration,
        [0, props.animationDuration],
        [0, 1],
      ),
    [props.clock],
  );

  const atomTrimStart = useDerivedValue(() => {
    return props.isClockwise
      ? atomTrim.current + 0.04
      : 1 - atomTrim.current + 0.04;
  }, [atomTrim]);
  const atomTrimEnd = useDerivedValue(
    () => atomTrimStart.current + 0.09,
    [atomTrimStart],
  );

  return (
    <>
      <Path
        path={atomPath}
        color={props.isActive ? props.activeLineColor : props.inactiveLineColor}
        style="stroke"
        strokeWidth={props.strokeWidth}
      />
      <Circle
        c={atomCenter}
        r={props.radius}
        color={atomColor}
        opacity={props.isActive ? 1 : 0}>
        <Paint
          color={atomColor}
          style="stroke"
          strokeWidth={atomPulseWidth}
          opacity={props.isActive ? 1 : 0}>
          <BlurMask blur={atomPulseWidth} />
        </Paint>
      </Circle>

      <Path
        path={atomPath}
        color={atomColor}
        style="stroke"
        strokeWidth={props.strokeWidth}
        start={atomTrimStart}
        end={atomTrimEnd}
        opacity={props.isActive ? 1 : 0}>
        <BlurMask blur={2} style="normal" />
      </Path>
    </>
  );
};
