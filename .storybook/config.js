import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

addDecorator(withInfo)

configure(require.context('../src', true, /\.stories\.tsx$/), module)
