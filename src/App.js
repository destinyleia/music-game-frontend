import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { PickPicture } from 'pages/PickPicture'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PickPicture />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
