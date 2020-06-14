import React from 'react';
import GithubLink from './GithubLink';

export default {
  title: 'Atoms/Buttons/GithubLink',
  component: GithubLink,
};

export const Default = () => 
    <GithubLink link="https://github.com/worzalla/charasort"
        background = "#000000"
        body = "#ffffff"
    />;
export const Themed = () => 
    <GithubLink link="https://github.com/worzalla/charasort"
        background = "#ffffff"
        body = "#0080CB"
    />;
