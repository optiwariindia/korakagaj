
import React from 'react'
import { combine } from '../lib';
import { RenderCOCOBoldArrowLeft, RenderCOCOBoldArrowLeftProps } from './RenderCOCOBoldArrowLeft';

export type COCOBoldArrowLeftProps = {
} & RenderCOCOBoldArrowLeftProps;

export const COCOBoldArrowLeft = function (props: COCOBoldArrowLeftProps) {
    return (<RenderCOCOBoldArrowLeft
        {...props}
        frames={combine(props.frames, {
            // edit frames here
        })}
    />);
}