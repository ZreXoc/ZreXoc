import { Story, Meta } from '@storybook/react';
import { BlogList, BlogListProps } from './BlogList';

export default {
  component: BlogList,
  title: 'BlogList',
} as Meta;

const Template: Story<BlogListProps> = (args) => (
  <div className="h-screen w-screen">
    <BlogList {...args} />
  </div>
);

const args: BlogListProps = {};
for (let i = 0; i < 10; i++) {
  args[`article${i}`] = {
    title: `article${i}`,
    category: 'test',
    tags: ['test', 'admin'],
    time: new Date().toISOString(),
    excerpt: `the No.${i}`,
  };
}

export const Primary = Template.bind({});
Primary.args = args;
