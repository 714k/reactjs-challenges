import type { Meta, StoryObj } from "@storybook/react";

import VirtualizedList from "./VirtualizedList";

const itemsData = new Array(100).fill(null).map((_, i) => ({
  id: `item-${i}`,
  content: `Item ${i}`,
  styles: {
    fontSize: "20px",
    paddingBottom: "20px",
    textAlign: "center",
  },
  classes: "md text",
}));

const meta = {
  title: "Organisms/Virlualized List",
  component: VirtualizedList,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    itemsData: itemsData,
  },
  args: {},
} satisfies Meta<typeof VirtualizedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    itemsData,
  },
};

// Todo - make comopnent card with images, text, and actions (share)
const itemsDataCards = new Array(100).fill(null).map((_, i) => ({
  id: `item-${i}`,
  content: `<div class="card">
  <figure>
    <img src="https://picsum.photos/200" alt="Image from lorem picsum" />
  </figure>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum tortor
    non magna consectetur, at congue felis gravida. Sed venenatis iaculis ex et
    rhoncus. Sed gravida vehicula turpis, nec varius arcu interdum et. Duis
    tincidunt hendrerit leo, in suscipit nisl euismod vel. Nunc sit amet posuere
    felis. Vestibulum at massa ut orci dapibus ornare porttitor eget velit.
    Nulla ut odio ac felis tincidunt semper vel a turpis. Nam id cursus velit.
    Vestibulum sagittis eleifend facilisis. Nunc tincidunt est sed eros egestas,
    eget malesuada lectus maximus. Proin interdum condimentum maximus. Mauris
    laoreet eget risus in luctus. Quisque sit amet quam quis lectus lobortis
    rhoncus. Mauris ut nibh ac mi ultricies sollicitudin. In molestie, nisi in
    faucibus gravida, ligula ex venenatis est, nec porta leo magna venenatis
    nibh. Integer congue mattis congue.
  </p>
</div>;`,
  styles: {
    fontSize: "20px",
    paddingBottom: "20px",
    textAlign: "center",
  },
  classes: "md text",
}));

export const Cards: Story = {
  args: {
    itemsData: itemsDataCards,
    itemHeight: 120,
  },
};
