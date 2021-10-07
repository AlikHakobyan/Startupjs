import React, { useState, useEffect } from 'react'
import { observer, useApi, useDoc } from 'startupjs'
import { Div, Span, Button, Icon } from '@startupjs/ui'
import {
  faHouseUser,
  alert,
  faShareAlt,
  faBinoculars,
} from '@fortawesome/free-solid-svg-icons'
import './index.styl'

export default observer(function RightContent() {
  return pug`
    Div.rightContant
      Div.cart_1
        Span.text MAKE LOVE & STEAL HEARTS.
        Span.text #MLSH
      Div.cart_2
        Button.buttons(
          icon=faHouseUser
        ) BOOK OF LOVE
        Button.buttons(
          icon=faBinoculars
        ) CULTURE MAP
        Button.buttons(
          icon=faHouseUser
        )  SEND FEEDBACK
  `
})
