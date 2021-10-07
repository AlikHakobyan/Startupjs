import React from 'react'
import { ScrollView } from 'react-native'
import { observer } from 'startupjs'
import { Content } from '@startupjs/ui'
import { HomeContainer } from 'components'
import { H1, Div } from '@startupjs/ui'

import './index.styl'

export default observer(function PHome() {
  return pug`
    HomeContainer.root
  `
})
