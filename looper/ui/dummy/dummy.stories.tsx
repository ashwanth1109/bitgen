import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { screen, userEvent } from '@storybook/testing-library';

import { Dummy, DummyProps } from './dummy';

export default {
  title: 'Components/Dummy',
  component: Dummy,
} as ComponentMeta<typeof Dummy>;

const Template: ComponentStory<typeof Dummy> = (args: DummyProps) => (
  <Dummy {...args} />
);

export const DefaultWithClick: ComponentStory<typeof Dummy> = Template.bind({});
DefaultWithClick.args = {
  shouldIncrement: true,
};
DefaultWithClick.play = async ({ args, canvasElement }: any) => {
  await userEvent.click(screen.getByRole('button', { name: 'Admins' }));
};
