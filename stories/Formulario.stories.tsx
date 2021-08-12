import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import Formulario from './Formulario';

export default {
  title: 'Formulario',
  component: Formulario,
} as Meta;

const Template: Story<ComponentProps<typeof Formulario>> = (args) => <Formulario {...args} />;

export const Search = Template.bind({});
Search.args = {
};