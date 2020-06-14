import React from 'react';
import ProgressBar  from './ProgressBar';

export default {
    title: "Atoms/Informers/ProgressBar",
    component: ProgressBar,
};

export const Default = () => 
    <ProgressBar progress={0}/>;

export const Fractional = () =>
    <ProgressBar progress={(340/350) * 100} />; 