import React from 'react'
import { Field, Input, Panel } from '../my-ui'

/**
 * Demonstrates how the properties are repeated without the
 * help of context.
 */
const WithoutContext = () => (
  <Panel theme="dark">
    <form>
      <Field label="First Name" theme="dark">
        <Input type="text" theme="dark" />
      </Field>
      <Field label="Last Name" theme="dark">
        <Input type="text" theme="dark" />
      </Field>
    </form>
  </Panel>
)

export default WithoutContext
