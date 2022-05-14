import { Story, Meta } from '@storybook/react';
import { ListItemProps } from './ListItem';

export default {
  component: ListItemProps,
  title: 'ListItemProps',
} as Meta;

const Template: Story = (args) => <ListItemProps {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
