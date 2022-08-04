import React from 'react'
import { Field, Input, bindComponentsTo } from '../../my-ui'
import { section1Context } from './contexts'

const [Section1Field, Section1Input] = bindComponentsTo(section1Context)(
  Field,
  Input
)

const Section1 = () => (
  <Section1Field label="First Name">
    <Section1Input type="text" />
  </Section1Field>
)

export default Section1
