import React, { useState, useEffect } from 'react'
import { observer, useApi, useDoc } from 'startupjs'
import { Div, H5, TextInput, Span, Button } from '@startupjs/ui'
import CommentCart from './CommentCart'
import './index.styl'

export default observer(function LeftContent() {
  const [value, setValue] = useState()
  const [textarea, setTextarea] = useState()
  

  return pug`
    Div.leftContant
      Div.root
        H5.suggestion_text add a suggestion
        Div.suggestion_description we love to hear new ideas on now to be even more awesome
        TextInput.test1(placeholder="Title of suggestion?" value=value onChangeText=setValue)
        TextInput.test2(placeholder='Make a suggestion' value=textarea onChangeText=setTextarea multiline resize numberOfLines=4)
        Div.send_post
          Div
            Span To Send a private suggestion email us at:
            Span.email_text culture@virginhotels.com
          Button POST
        Div.comment_container
          CommentCart

  `
})
