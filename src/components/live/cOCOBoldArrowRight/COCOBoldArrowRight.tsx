
import React from 'react'
import { combine } from '../lib';
import { RenderCOCOBoldArrowRight, RenderCOCOBoldArrowRightProps } from './RenderCOCOBoldArrowRight';

export type COCOBoldArrowRightProps = {
} & RenderCOCOBoldArrowRightProps;

export const COCOBoldArrowRight = function (props: COCOBoldArrowRightProps) {
    return (<RenderCOCOBoldArrowRight
        {...props}
        frames={combine(props.frames, {
            // edit frames here
        })}
    />);
}