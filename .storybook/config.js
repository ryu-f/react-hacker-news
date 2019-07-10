import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

const req = require.context('../src', true, /\.stories\.tsx$/)

function loadStories() {
  addDecorator(withInfo)
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)