import { ComponentMeta, Story } from '@storybook/react';
import ButtonComponent, { ButtonProps } from './';

export default {
  id: 'Button',
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
    children: {
      name: 'Inner text or element',
    },
    type: {
      name: 'Button type',
      control: {
        type: 'select',
        labels: {
          primary: 'Primary',
          secondary: 'Secondary',
          warning: 'Warning',
          error: 'Error',
          info: 'Info',
        }
      },
      options: ['primary', 'secondary', 'warning', 'error', 'info'],
    },
    onClick: {
      action: 'clicked',
    },
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template: Story<ButtonProps> = ({ children, type, onClick }) => (
  <ButtonComponent type={type} onClick={onClick}>
    {children}
  </ButtonComponent>
);

export const Primary = Template.bind({});
Primary.storyName = 'Primary';
Primary.args = { children: 'Primary type button', type: 'primary' };

export const Secondary = Template.bind({});
Secondary.storyName = 'Secondary';
Secondary.args = { children: 'Secondary type button', type: 'secondary' };

export const Warning = Template.bind({});
Warning.storyName = 'Warning';
Warning.args = { children: 'Warning button', type: 'warning' };

export const Error = Template.bind({});
Error.storyName = 'Error';
Error.args = { children: 'Error button', type: 'error' };

export const Info = Template.bind({});
Info.storyName = 'Info';
Info.args = { children: 'Info button', type: 'info' };
