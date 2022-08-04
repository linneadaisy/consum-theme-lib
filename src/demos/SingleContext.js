import React from 'react'
import { Field, Input, Panel, Provider } from '../my-ui'

/**
 * Uses the default global context from the UI library
 * to set some configuration.
 */
const SingleContext = () => (
  <Provider theme="dark">
    <Panel>
      <form>
        <Field label="First Name">
          <Input type="text" />
        </Field>
        <Field label="Last Name">
          <Input type="text" />
        </Field>
      </form>
    </Panel>
  </Provider>
)

export default SingleContext
