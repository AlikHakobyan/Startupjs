import React, { useState, useEffect } from 'react'
import { observer, useApi, useDoc } from 'startupjs'
import { Div, H5, TextInput, Span, Button } from '@startupjs/ui'
import './index.styl'

export default observer(function CommentCart() {
  return pug`
    Div.comment_cart
      Div.cart_number
        Span.number_text 1
      Div
        Span.title_text dasdasd
        Span.user_name sdgwegwegweg
  `
})
