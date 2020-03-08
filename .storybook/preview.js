import { addParameters, addDecorator } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'

addParameters({
  backgrounds: [{ name: 'basic', value: 'rgb(238, 238, 238)', default: true }]
})

addDecorator(
  withOptions({
    addonPanelInRight: true
  })
)