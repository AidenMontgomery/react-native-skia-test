import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Canvas, Text, useClockValue} from '@shopify/react-native-skia';
import {SolarDisplayData} from '../SolarDisplayData';
import {Battery} from './Battery';

import {Atom} from './Atom';
import {ColorMatrix} from './ColorMatrix';
import {polar2Canvas, toRad} from '../utils';
import {Spark} from './Spark';
import {Node} from './Node';

import {BatterySVG, SolarPanelSVG, HouseSVG, GridSVG} from '../assets';

export interface SolarDiagramProps {
  isDarkMode: boolean;
  solarDisplayData: SolarDisplayData;
}

const {width, height} = Dimensions.get('screen');

const SolarDiagramStyle = StyleSheet.create({
  canvas: {
    flex: 1,
  },
});

export const SolarDiagram = (props: SolarDiagramProps) => {
  const clock = useClockValue();
  const animation_duration = 5000;
  const colors = props.isDarkMode ? ColorMatrix.dark : ColorMatrix.light;

  const solarSvgPrimaryColor = props.solarDisplayData.isSolarActive
    ? colors.activePrimaryColor
    : colors.inactivePrimaryColor;
  const solarPanelSVG = SolarPanelSVG(solarSvgPrimaryColor);

  const houseSvgPrimaryColor = props.solarDisplayData.isHouseActive
    ? colors.activePrimaryColor
    : colors.inactivePrimaryColor;
  const houseSVG = HouseSVG(houseSvgPrimaryColor);

  const batterySvgPrimaryColor = props.solarDisplayData.isBatteryActive
    ? colors.activePrimaryColor
    : colors.inactivePrimaryColor;
  const batterySVG = BatterySVG(batterySvgPrimaryColor);

  const svgPrimaryColor = props.solarDisplayData.isGridActive
    ? colors.activePrimaryColor
    : colors.inactivePrimaryColor;
  const gridSVG = GridSVG(svgPrimaryColor);

  // const activeLineColor = rgbaColor(103, 191, 255, 1);
  const stroke_width = 2;
  const secondary_stroke_width = 5;
  const secondary_radius = 40;
  const tertiary_radius = 5;

  const padding = 30;
  const box = {width: width - padding * 2, height: width};
  const mainRadius = box.width / 2;
  const center = {x: width / 2, y: height / 2};

  const solar = toRad(90);
  const solarCenter = polar2Canvas({theta: solar, radius: mainRadius}, center);

  const grid = toRad(330);
  const gridCenter = polar2Canvas({theta: grid, radius: mainRadius}, center);

  const battery = toRad(210);
  const batteryCenter = polar2Canvas(
    {theta: battery, radius: mainRadius},
    center,
  );

  const batteryRect = {
    x: center.x - 75,
    y: center.y + padding + mainRadius,
    height: 50,
    width: 150,
  };

  const batteryText = {
    x: batteryRect.x - 12,
    y: batteryRect.y + 30,
  };

  return (
    <Canvas style={SolarDiagramStyle.canvas}>
      {/* Moving _atoms and sparks_ */}
      <Spark
        clock={clock}
        isActive={props.solarDisplayData.solarToHouse}
        animationDuration={animation_duration}
        strokeWidth={stroke_width}
        radius={tertiary_radius}
        startCenter={solarCenter}
        targetCenter={center}
        startColor={colors.solarActiveColor}
        targetColor={colors.houseActiveColor}
        activeLineColor={colors.activeLineColor}
        inactiveLineColor={colors.inactiveLineColor}
      />

      <Spark
        clock={clock}
        isActive={props.solarDisplayData.batteryToHouse}
        animationDuration={animation_duration}
        strokeWidth={stroke_width}
        radius={tertiary_radius}
        startCenter={batteryCenter}
        targetCenter={center}
        startColor={colors.batteryActiveColor}
        targetColor={colors.houseActiveColor}
        activeLineColor={colors.activeLineColor}
        inactiveLineColor={colors.inactiveLineColor}
      />

      <Spark
        clock={clock}
        isActive={props.solarDisplayData.gridToHouse}
        animationDuration={animation_duration}
        strokeWidth={stroke_width}
        radius={tertiary_radius}
        startCenter={gridCenter}
        targetCenter={center}
        startColor={colors.gridActiveColor}
        targetColor={colors.houseActiveColor}
        activeLineColor={colors.activeLineColor}
        inactiveLineColor={colors.inactiveLineColor}
      />

      <Atom
        clock={clock}
        isActive={props.solarDisplayData.solarToBattery}
        animationDuration={animation_duration}
        strokeWidth={stroke_width}
        mainRadius={mainRadius}
        radius={tertiary_radius}
        startAngle={solar}
        targetAngle={battery}
        center={center}
        startColor={colors.solarActiveColor}
        targetColor={colors.batteryActiveColor}
        isClockwise={false}
        arcStartAngle={140}
        arcSweepAngle={120}
        activeLineColor={colors.activeLineColor}
        inactiveLineColor={colors.inactiveLineColor}
      />

      <Atom
        clock={clock}
        isActive={
          props.solarDisplayData.gridToBattery ||
          props.solarDisplayData.batteryToGrid
        }
        animationDuration={animation_duration}
        strokeWidth={stroke_width}
        mainRadius={mainRadius}
        radius={tertiary_radius}
        startAngle={props.solarDisplayData.gridToBattery ? grid : battery}
        targetAngle={props.solarDisplayData.gridToBattery ? battery : grid}
        center={center}
        startColor={
          props.solarDisplayData.gridToBattery
            ? colors.gridActiveColor
            : colors.batteryActiveColor
        }
        targetColor={
          props.solarDisplayData.gridToBattery
            ? colors.batteryActiveColor
            : colors.gridActiveColor
        }
        isClockwise={props.solarDisplayData.gridToBattery}
        arcStartAngle={20}
        arcSweepAngle={120}
        activeLineColor={colors.activeLineColor}
        inactiveLineColor={colors.inactiveLineColor}
      />

      <Atom
        clock={clock}
        isActive={props.solarDisplayData.solarToGrid}
        animationDuration={animation_duration}
        strokeWidth={stroke_width}
        mainRadius={mainRadius}
        radius={tertiary_radius}
        startAngle={solar}
        targetAngle={toRad(-30)}
        center={center}
        startColor={colors.solarActiveColor}
        targetColor={colors.gridActiveColor}
        isClockwise={true}
        arcStartAngle={260}
        arcSweepAngle={120}
        activeLineColor={colors.activeLineColor}
        inactiveLineColor={colors.inactiveLineColor}
      />
      {/* Moving _atoms_ */}
      {/* Nodes */}
      <Node
        clock={clock}
        isActive={props.solarDisplayData.isSolarActive}
        animationDuration={animation_duration}
        center={solarCenter}
        radius={secondary_radius}
        strokeWidth={secondary_stroke_width}
        strokeColor={
          props.solarDisplayData.isSolarActive
            ? colors.solarActiveColor
            : colors.inactiveNodeColor
        }
        fillColor={colors.nodeFillColor}
        value={props.solarDisplayData.solarTotal}
        textColor={colors.textColor}
        svg={solarPanelSVG}
      />
      <Node
        clock={clock}
        isActive={props.solarDisplayData.isGridActive}
        animationDuration={animation_duration}
        center={gridCenter}
        radius={secondary_radius}
        strokeWidth={secondary_stroke_width}
        strokeColor={
          props.solarDisplayData.isGridActive
            ? colors.gridActiveColor
            : colors.inactiveNodeColor
        }
        fillColor={colors.nodeFillColor}
        value={props.solarDisplayData.gridTotal}
        textColor={colors.textColor}
        svg={gridSVG}
      />
      <Node
        clock={clock}
        isActive={props.solarDisplayData.isBatteryActive}
        animationDuration={animation_duration}
        center={batteryCenter}
        radius={secondary_radius}
        strokeWidth={secondary_stroke_width}
        strokeColor={
          props.solarDisplayData.isBatteryActive
            ? colors.batteryActiveColor
            : colors.inactiveNodeColor
        }
        fillColor={colors.nodeFillColor}
        value={props.solarDisplayData.batteryTotal}
        textColor={colors.textColor}
        svg={batterySVG}
      />
      <Node
        clock={clock}
        isActive={props.solarDisplayData.isHouseActive}
        animationDuration={animation_duration}
        center={center}
        radius={secondary_radius}
        strokeWidth={secondary_stroke_width}
        strokeColor={
          props.solarDisplayData.isHouseActive
            ? colors.houseActiveColor
            : colors.inactiveNodeColor
        }
        fillColor={colors.nodeFillColor}
        value={props.solarDisplayData.houseTotal}
        textColor={colors.textColor}
        svg={houseSVG}
      />
      {/* Nodes */}

      <Text
        x={batteryText.x}
        y={batteryText.y}
        text={`${props.solarDisplayData.batteryLevel ?? '0'} %`}
        familyName="serif"
        size={20}
        color={colors.textColor}
      />
      <Battery
        primaryColor={colors.activePrimaryColor}
        batteryLevel={props.solarDisplayData.batteryLevel}
        rect={batteryRect}
      />
    </Canvas>
  );
};
