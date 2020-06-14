import React from 'react';
import EmphasizedButton from './EmphasizedButton';

export default {
  title: 'Atoms/Buttons/EmphasizedButton',
  component: EmphasizedButton,
};

export const Default = () => <EmphasizedButton />;
export const WithText = () => <EmphasizedButton text="HELLO" />
export const OnClick = () => <EmphasizedButton text="Click Me!" onClick={() => { console.log('uwu;;;'); }} />