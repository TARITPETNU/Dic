//rfce
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Topbar from '../component/topBar'
import AddWordPage from './AddWordPage'
import Homepage from './homepage'

const mainPage = () => {
    return (
        <div>
            <Topbar />
            <Switch>
                <Route path = '/AddWordPage'>
                    <AddWordPage />
                </Route>
                <Route path = '/'>
                    <Homepage />
                </Route>
            </Switch>
        </div>
    )
}

export default mainPage
