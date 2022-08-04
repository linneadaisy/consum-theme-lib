import React from 'react'
import { Field, Input, bindComponentsTo } from '../../my-ui'
import { section2Context } from './contexts'

const [Section2Field, Section2Input] = bindComponentsTo(section2Context)(
  Field,
  Input
)

const Section2 = () => (
  <Section2Field label="First Name">
    <Section2Input type="text" />
  </Section2Field>
)

export default Section2
