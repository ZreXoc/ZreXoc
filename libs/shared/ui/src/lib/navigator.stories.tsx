import { Story, Meta } from '@storybook/react';
import { Navigator, NavigatorProps } from './navigator';

export default {
  component: Navigator,
  title: 'Navigator',
} as Meta;

const Template: Story<NavigatorProps> = (args) => <Navigator {...args} />;

export const Primary = Template.bind({});
Primary.args = { title:'title',
type:0,
onClick(){}
};
