
import React from 'react'
import { combine } from '../lib';
import { RenderIconlyBoldHeart, RenderIconlyBoldHeartProps } from './RenderIconlyBoldHeart';

export type IconlyBoldHeartProps = {
} & RenderIconlyBoldHeartProps;

export const IconlyBoldHeart = function (props: IconlyBoldHeartProps) {
    return (<RenderIconlyBoldHeart
        {...props}
        frames={combine(props.frames, {
            // edit frames here
        })}
    />);
}