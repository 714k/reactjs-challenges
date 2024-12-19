import type { Meta, StoryObj } from '@storybook/react';
import AccordionItem, { AccordionItemInterface } from './AccordionItem';

const meta: Meta<typeof AccordionItem> = {
  title: 'Molecules/AccordionItem',
  component: AccordionItem,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof AccordionItem>;

export const Primary: Story = (args: AccordionItemInterface) => (
  <AccordionItem {...args}>
    <div>Accordion panel content here</div>
  </AccordionItem>
);

Primary.args = {
  title: 'Accordion Item 1',
  idx: 1,
};
