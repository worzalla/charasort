import React from 'react';
import UnknownMemberButton  from './UnknownMemberButton';

export default {
    title: "Atoms/Buttons/UnknownMemberButton",
    component: UnknownMemberButton,
};

export const Default = () => 
    <UnknownMemberButton onClick={() => {console.log("click")}} />;