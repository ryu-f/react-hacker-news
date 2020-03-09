import { addParameters, addDecorator } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import globalDecorator from './globalDecorator'

addParameters({
  backgrounds: [{ name: 'basic', value: 'rgb(238, 238, 238)', default: true }]
})

addDecorator(
  globalDecorator,
  withOptions({
    addonPanelInRight: true
  })
)
