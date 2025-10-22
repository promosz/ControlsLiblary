import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger', 'invisible'],
      description: 'Button variant style',
    },
    color: {
      control: 'select',
      options: ['on', 'off'],
      description: 'Button color theme',
    },
    size: {
      control: 'select',
      options: ['24', '32', '40', '48'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    text: {
      control: 'text',
      description: 'Button text content',
    },
    iconBefore: {
      control: 'text',
      description: 'URL to icon before text',
    },
    iconAfter: {
      control: 'text',
      description: 'URL to icon after text',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// ===== BASIC STORIES =====

export const Primary: Story = {
  args: {
    variant: 'primary',
    color: 'on',
    size: '32',
    text: 'Button',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    color: 'on',
    size: '32',
    text: 'Button',
    disabled: false,
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    color: 'on',
    size: '32',
    text: 'Button',
    disabled: false,
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    color: 'on',
    size: '32',
    text: 'Button',
    disabled: false,
  },
};

export const Invisible: Story = {
  args: {
    variant: 'invisible',
    color: 'on',
    size: '32',
    text: 'Button',
    disabled: false,
  },
};

// ===== SIZE VARIANTS =====

export const Size24: Story = {
  args: {
    variant: 'primary',
    color: 'on',
    size: '24',
    text: 'Button',
    disabled: false,
  },
};

export const Size32: Story = {
  args: {
    variant: 'primary',
    color: 'on',
    size: '32',
    text: 'Button',
    disabled: false,
  },
};

export const Size40: Story = {
  args: {
    variant: 'primary',
    color: 'on',
    size: '40',
    text: 'Button',
    disabled: false,
  },
};

export const Size48: Story = {
  args: {
    variant: 'primary',
    color: 'on',
    size: '48',
    text: 'Button',
    disabled: false,
  },
};

// ===== COLOR VARIANTS =====

export const ColorOn: Story = {
  args: {
    variant: 'primary',
    color: 'on',
    size: '32',
    text: 'Button',
    disabled: false,
  },
};

export const ColorOff: Story = {
  args: {
    variant: 'primary',
    color: 'off',
    size: '32',
    text: 'Button',
    disabled: false,
  },
};

// ===== STATES =====

export const Disabled: Story = {
  args: {
    variant: 'primary',
    color: 'on',
    size: '32',
    text: 'Button',
    disabled: true,
  },
};

// ===== WITH ICONS =====

export const WithIconBefore: Story = {
  args: {
    variant: 'primary',
    color: 'on',
    size: '32',
    text: 'Button',
    iconBefore: 'http://localhost:3845/assets/0165ca51271636a2767c493ad970384b242bfa04.svg',
    disabled: false,
  },
};

export const WithIconAfter: Story = {
  args: {
    variant: 'primary',
    color: 'on',
    size: '32',
    text: 'Button',
    iconAfter: 'http://localhost:3845/assets/0165ca51271636a2767c493ad970384b242bfa04.svg',
    disabled: false,
  },
};

export const WithBothIcons: Story = {
  args: {
    variant: 'primary',
    color: 'on',
    size: '32',
    text: 'Button',
    iconBefore: 'http://localhost:3845/assets/0165ca51271636a2767c493ad970384b242bfa04.svg',
    iconAfter: 'http://localhost:3845/assets/0165ca51271636a2767c493ad970384b242bfa04.svg',
    disabled: false,
  },
};

// ===== ALL VARIANTS SHOWCASE =====

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
        <div style="display: flex; gap: 8px; align-items: center;">
          <cl-button variant="primary" color="on" size="32" text="Primary"></cl-button>
          <cl-button variant="secondary" color="on" size="32" text="Secondary"></cl-button>
          <cl-button variant="tertiary" color="on" size="32" text="Tertiary"></cl-button>
          <cl-button variant="danger" color="on" size="32" text="Danger"></cl-button>
          <cl-button variant="invisible" color="on" size="32" text="Invisible"></cl-button>
        </div>
        
        <div style="display: flex; gap: 8px; align-items: center;">
          <cl-button variant="primary" color="on" size="24" text="24px"></cl-button>
          <cl-button variant="primary" color="on" size="32" text="32px"></cl-button>
          <cl-button variant="primary" color="on" size="40" text="40px"></cl-button>
          <cl-button variant="primary" color="on" size="48" text="48px"></cl-button>
        </div>
        
        <div style="display: flex; gap: 8px; align-items: center;">
          <cl-button variant="primary" color="on" size="32" text="Enabled"></cl-button>
          <cl-button variant="primary" color="on" size="32" text="Disabled" [disabled]="true"></cl-button>
        </div>
      </div>
    `,
  }),
};

export default meta;
