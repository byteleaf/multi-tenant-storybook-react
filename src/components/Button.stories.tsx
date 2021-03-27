import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button } from './Button'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story = args => <Button {...args}>click mich</Button>

export const Default = Template.bind({})
Default.args = {
  primary: true,
  label: 'Button',
}
