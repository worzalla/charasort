import React from 'react';
import BioHeadline  from './BioHeadline';

export default {
    title: "Atoms/Informers/BioHeadline",
    component: BioHeadline,
};

export const Default = () => 
    <BioHeadline generation={9} bloodType="🅱" age={21} height={154}  />;