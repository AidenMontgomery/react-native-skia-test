import React from 'react';
import {
  BlurMask,
  Circle,
  ImageSVG,
  interpolate,
  Paint,
  Skia,
  SkiaClockValue,
  SkSVG,
  Text,
  useDerivedValue,
} from '@shopify/react-native-skia';
import {Vector} from '../utils';

export interface NodeProps {
  clock: SkiaClockValue;
  isActive: boolean;
  animationDuration: number;

  center: Vector;
  radius: number;

  strokeWidth: number;

  strokeColor: number;
  fillColor: number;

  value: number;
  textColor: number;

  svg: SkSVG | null;
}

export const Node = (props: NodeProps) => {
  const pulseStrokeWidth = useDerivedValue(() => {
    return interpolate(
      props.clock.current % props.animationDuration,
      [0, props.animationDuration / 4, props.animationDuration / 2],
      [0, 10, 0],
    );
  }, [props.clock]);

  function renderImage(svg: SkSVG | null) {
    if (svg != null) {
      return (
        <ImageSVG
          svg={svg}
          x={props.center.x - props.radius / 2}
          y={props.center.y - props.radius / 1.25}
          width={props.radius}
          height={props.radius}
        />
      );
    } else {
      return <></>;
    }
  }

  const typeface = Skia.FontMgr.RefDefault().matchFamilyStyle('helvetica');
  if (!typeface) {
    throw new Error('Helvetica not found');
  }

  const font = Skia.Font(typeface, 12);
  const text = `${props.value} W`;
  const textOffset = font.measureText(text).width / 2;
  const textStart = props.center.x - textOffset;

  return (
    <>
      <Circle
        c={props.center}
        r={props.radius}
        color={props.strokeColor}
        strokeWidth={props.strokeWidth}>
        <Paint color={props.fillColor} />
        <Paint
          color={props.strokeColor}
          style="stroke"
          strokeWidth={props.isActive ? pulseStrokeWidth : 0}>
          <BlurMask blur={10} />
        </Paint>
        <Paint
          color={props.strokeColor}
          style="stroke"
          strokeWidth={props.strokeWidth / 2}
        />
      </Circle>
      <Text
        x={textStart}
        y={props.center.y + props.radius / 1.75}
        text={text}
        familyName="serif"
        font={font}
        color={props.textColor}
      />
      {renderImage(props.svg)}
    </>
  );
};
