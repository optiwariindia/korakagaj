// ~ auto-generated - do not edit ~
import React from 'react';
import { cls, Div, DivProps, Svg, SvgProps, combine } from '../lib';


export type RenderIconlyBoldHeartProps = {
    frames?: {
    ["iconlyBoldHeart"]?: DivProps
    ["heart"]?: SvgProps

  }
;
}

export function RenderIconlyBoldHeart(props: RenderIconlyBoldHeartProps) {
    const { frames = {} } = props;
    return (
        <Div {...frames["iconlyBoldHeart"]} className={cls(frames, "iconlyBoldHeart")} style={{width: 114, height: '133.36px', position: 'relative', padding: '0px 0px 0px 0px', opacity: 1, ...frames["iconlyBoldHeart"]?.style}}>
  <Svg className="heart" width={96} height={107} viewBox="0 0 96 107" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M75.1226 2.33015C72.2773 1.21322 69.2848 0.718661 66.2876 0.718661C59.6851 0.663092 53.2773 3.21925 48.0001 7.93703C47.5726 7.55361 47.0501 7.21464 46.5751 6.88678C46.1001 6.54781 45.2451 5.71984 44.5326 5.27529L42.7276 4.33062C41.7776 3.71937 40.7848 3.27482 39.7351 2.88028C39.6401 2.7747 39.4976 2.65801 39.3076 2.55243H39.0273C36.2201 1.4355 33.3226 0.824241 30.3301 0.718661H29.8076C28.4776 0.718661 27.1523 0.824241 25.8176 1.05207H25.2476C23.8226 1.26879 22.4023 1.65777 21.0248 2.21346C3.30258 8.99839 -3.01492 31.5037 2.35258 51.175C5.39258 61.2274 10.2898 70.3462 16.6548 77.8424C25.9126 88.2893 36.0348 97.5137 46.9076 105.404L48.1426 106.299L49.3301 105.46C60.1648 97.5137 70.2301 88.2893 79.4023 77.898C85.8101 70.4018 90.7026 61.2274 93.6951 51.175C98.9723 31.5037 92.6548 8.99839 75.1226 2.33015Z" fill="#FF3535" />
  </Svg>
</Div>
    );
}