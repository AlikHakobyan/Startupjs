import React, { useState, useEffect } from 'react'
import { observer, useApi, useDoc } from 'startupjs'
import { Br, Button, Card, Div, Row, Span, H1 } from '@startupjs/ui'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

export default observer(function Body() {
  return pug`
    Div.root
      LeftContent
      RightContent
  `
})
