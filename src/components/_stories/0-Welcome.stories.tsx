import React from 'react';
import { Welcome } from '@storybook/react/demo';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <div />;

ToStorybook.story = {
  name: 'All Components',
};
