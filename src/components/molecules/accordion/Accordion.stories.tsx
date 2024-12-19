import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';

const accordionItems = [
  {
    title: 'Item 1',
    children: (
      <p>
        Maecenas sed efficitur nisl. Ut laoreet suscipit nunc, ac euismod elit
        posuere vestibulum. In id turpis at diam pulvinar consectetur non sed
        tellus. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Nulla ac accumsan eros. Nam nisi
        augue, efficitur id pharetra sodales, aliquam in neque.
      </p>
    ),
  },
  {
    title: 'Item 2',
    children: (
      <p>
        Maecenas sed efficitur nisl. Ut laoreet suscipit nunc, ac euismod elit
        posuere vestibulum. In id turpis at diam pulvinar consectetur non sed
        tellus. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Nulla ac accumsan eros. Nam nisi
        augue, efficitur id pharetra sodales, aliquam in neque.
      </p>
    ),
  },
  {
    title: 'Item 3',
    children: (
      <p>
        Maecenas sed efficitur nisl. Ut laoreet suscipit nunc, ac euismod elit
        posuere vestibulum. In id turpis at diam pulvinar consectetur non sed
        tellus. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Nulla ac accumsan eros. Nam nisi
        augue, efficitur id pharetra sodales, aliquam in neque.
      </p>
    ),
  },
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Molecules/Accordion',
  component: Accordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    items: { control: 'object' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //   args: { panel: fn() },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Horizontal: Story = {
  args: {
    items: accordionItems,
    variant: 'horizontal',
  },
};

export const Vertical: Story = {
  args: {
    items: accordionItems,
    variant: 'vertical',
  },
};
