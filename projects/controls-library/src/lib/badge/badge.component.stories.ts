import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'Components/Badge',
  component: BadgeComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Badge text content',
    },
    variant: {
      control: 'select',
      options: ['default', 'defaultBold', 'primary', 'primaryInverted', 'important', 'added', 'removed'],
      description: 'Badge variant style',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Badge size',
    },
  }
};

export default meta;
type Story = StoryObj<BadgeComponent>;

// Default Badge
export const Default: Story = {
  args: {
    label: '25',
    variant: 'default',
    size: 'medium',
  },
};

// Default Bold Badge
export const DefaultBold: Story = {
  args: {
    label: '25',
    variant: 'defaultBold',
    size: 'medium',
  },
};

// Primary Badge
export const Primary: Story = {
  args: {
    label: '25',
    variant: 'primary',
    size: 'medium',
  },
};

// Primary Inverted Badge
export const PrimaryInverted: Story = {
  args: {
    label: '25',
    variant: 'primaryInverted',
    size: 'medium',
  },
};

// Important Badge
export const Important: Story = {
  args: {
    label: '25',
    variant: 'important',
    size: 'medium',
  },
};

// Added Badge
export const Added: Story = {
  args: {
    label: '5',
    variant: 'added',
    size: 'medium',
  },
};

// Removed Badge
export const Removed: Story = {
  args: {
    label: '3',
    variant: 'removed',
    size: 'medium',
  },
};

// Size variants
export const Small: Story = {
  args: {
    label: '25',
    variant: 'primary',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    label: '25',
    variant: 'primary',
    size: 'large',
  },
};
