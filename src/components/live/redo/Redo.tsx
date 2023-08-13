
import React from 'react'
import { combine } from '../lib';
import { RenderRedo, RenderRedoProps } from './RenderRedo';

export type RedoProps = {
} & RenderRedoProps;

export const Redo = function (props: RedoProps) {
    return (<RenderRedo
        {...props}
        frames={combine(props.frames, {
            // edit frames here
        })}
    />);
}