import React from 'react';
import EmphasizedButton from '../Atoms/Buttons/EmphasizedButton';

export default {
  title: 'EmphasizedButton',
  component: EmphasizedButton,
};

export const Default = () => <EmphasizedButton />;
export const WithText = () => <EmphasizedButton text="HELLO" />
export const OnClick = () => <EmphasizedButton text="Click Me!" onClick={() => { console.log('uwu;;;'); }} />