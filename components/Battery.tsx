import React from 'react';
import {ImageSVG, Skia, SkRect, SkSVG} from '@shopify/react-native-skia';

export interface BatteryProps {
  primaryColor: string;
  batteryLevel: number;
  rect: SkRect;
}

export const Battery = (props: BatteryProps) => {
  const full = Skia.SVG.MakeFromString(
    `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path d="M448 320H96V192H448V320zM0 176C0 131.8 35.82 96 80 96H464C508.2 96 544 131.8 544 176V192C561.7 192 576 206.3 576 224V288C576 305.7 561.7 320 544 320V336C544 380.2 508.2 416 464 416H80C35.82 416 0 380.2 0 336V176zM80 160C71.16 160 64 167.2 64 176V336C64 344.8 71.16 352 80 352H464C472.8 352 480 344.8 480 336V176C480 167.2 472.8 160 464 160H80z" fill="${props.primaryColor}"/>
      </svg>
    `,
  );

  const empty = Skia.SVG.MakeFromString(
    `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path d="M464 96C508.2 96 544 131.8 544 176V192C561.7 192 576 206.3 576 224V288C576 305.7 561.7 320 544 320V336C544 380.2 508.2 416 464 416H80C35.82 416 0 380.2 0 336V176C0 131.8 35.82 96 80 96H464zM64 336C64 344.8 71.16 352 80 352H464C472.8 352 480 344.8 480 336V176C480 167.2 472.8 160 464 160H80C71.16 160 64 167.2 64 176V336z" fill="${props.primaryColor}"/>
      </svg>
    `,
  );

  const quarter = Skia.SVG.MakeFromString(
    `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path d="M192 320H96V192H192V320zM0 176C0 131.8 35.82 96 80 96H464C508.2 96 544 131.8 544 176V192C561.7 192 576 206.3 576 224V288C576 305.7 561.7 320 544 320V336C544 380.2 508.2 416 464 416H80C35.82 416 0 380.2 0 336V176zM80 160C71.16 160 64 167.2 64 176V336C64 344.8 71.16 352 80 352H464C472.8 352 480 344.8 480 336V176C480 167.2 472.8 160 464 160H80z" fill="${props.primaryColor}"/>
      </svg>
    `,
  );

  const half = Skia.SVG.MakeFromString(
    `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path d="M288 320H96V192H288V320zM0 176C0 131.8 35.82 96 80 96H464C508.2 96 544 131.8 544 176V192C561.7 192 576 206.3 576 224V288C576 305.7 561.7 320 544 320V336C544 380.2 508.2 416 464 416H80C35.82 416 0 380.2 0 336V176zM80 160C71.16 160 64 167.2 64 176V336C64 344.8 71.16 352 80 352H464C472.8 352 480 344.8 480 336V176C480 167.2 472.8 160 464 160H80z" fill="${props.primaryColor}"/>
      </svg>
    `,
  );

  const threeQuarters = Skia.SVG.MakeFromString(
    `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path d="M352 320H96V192H352V320zM0 176C0 131.8 35.82 96 80 96H464C508.2 96 544 131.8 544 176V192C561.7 192 576 206.3 576 224V288C576 305.7 561.7 320 544 320V336C544 380.2 508.2 416 464 416H80C35.82 416 0 380.2 0 336V176zM80 160C71.16 160 64 167.2 64 176V336C64 344.8 71.16 352 80 352H464C472.8 352 480 344.8 480 336V176C480 167.2 472.8 160 464 160H80z" fill="${props.primaryColor}"/>
      </svg>
    `,
  );

  function renderBattery(batteryLevel: number): SkSVG | null {
    if (batteryLevel === 0) {
      return empty;
    } else if (batteryLevel <= 33) {
      return quarter;
    } else if (batteryLevel <= 66) {
      return half;
    } else if (batteryLevel <= 90) {
      return threeQuarters;
    } else {
      return full;
    }
  }

  return <ImageSVG svg={renderBattery(props.batteryLevel)} rect={props.rect} />;
};
