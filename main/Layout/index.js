import React from 'react'
import { observer, emit, useValue, useLocal } from 'startupjs'
import { Button, Div, H1, Layout, Menu, Row, SmartSidebar } from '@startupjs/ui'
import './index.styl'

const MenuItem = observer(({ url, children }) => {
  const [currentUrl] = useLocal('$render.url')
  return pug`
    
      Div.menu-item
        Menu.Item(
          active=currentUrl === url
          onPress=() => emit('url', url)
        )= children
  `
})

export default observer(function ({ children }) {
  function RenderSidebar() {
    return pug`
      Div.header-menu
        Div.header-logo
        MenuItem(url='/') valentines
        MenuItem(url='/vpeeps') v peeps
        MenuItem(url='/vprep') v prep
        MenuItem(url='/bareit') bare it
        MenuItem(url='/bareit') culture
        MenuItem(url='/bareit') tribe
        MenuItem(url='/bareit') resources
        MenuItem(url='/bareit') v well
    `
  }

  return pug`
    Layout.homePage
      RenderSidebar
      Div.body= children
  `
})
