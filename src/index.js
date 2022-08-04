import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink as RouterNavLink
} from 'react-router-dom'
import WithoutContext from './demos/WithoutContext'
import SingleContext from './demos/SingleContext'
import MultipleContexts from './demos/MultipleContexts'

const NavLink = props => (
  <RouterNavLink activeStyle={{ fontWeight: 'bold' }} {...props} />
)

render(
  <Router>
    <>
      <nav>
        Demos
        <ul>
          <li>
            <NavLink to="/withoutContext">Without Context</NavLink>
          </li>
          <li>
            <NavLink to="/singleContext">Single Context</NavLink>
          </li>
          <li>
            <NavLink to="/multipleContexts">Multiple Contexts</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/withoutContext" exact component={WithoutContext} />
        <Route path="/singleContext" exact component={SingleContext} />
        <Route path="/multipleContexts" exact component={MultipleContexts} />
        <Route render={() => <Redirect to="/withoutContext" />} />
      </Switch>
    </>
  </Router>,
  document.querySelector('.app')
)
