import { Story, Meta } from '@storybook/react';
import ListItem, { ListItemProps } from './ListItem';

export default {
  component: ListItem,
  title: 'ListItem',
} as Meta;

const Template: Story<ListItemProps> = (args) => <ListItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'hi',
  category: 'test',
  tags: ['s', 'd'],
  transRelatedFrom: 0,
};
