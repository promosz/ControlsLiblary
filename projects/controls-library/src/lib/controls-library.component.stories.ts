import type { Meta, StoryObj } from '@storybook/angular';
import { ControlsLibraryComponent } from './controls-library.component';

const meta: Meta<ControlsLibraryComponent> = {
  title: 'Components/ControlsLibrary',
  component: ControlsLibraryComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ControlsLibraryComponent>;

export const Default: Story = {
  args: {},
};

export const WithCustomText: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
      <cl-controls-library>
        <p>Witaj w bibliotece komponentów!</p>
      </cl-controls-library>
    `,
  }),
};
