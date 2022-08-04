import React, { PureComponent, createContext } from 'react'
import { Button, Field, Input, Panel, Provider } from '../../my-ui'
import { section1Context, section2Context } from './contexts'
import Section1 from './Section1'
import Section2 from './Section2'

const Section1Provider = Provider.bindTo(section1Context)
const Section2Provider = Provider.bindTo(section2Context)

/**
 * An advanced usage scenario where additional context values are
 * needed to scope areas of the application with different configs.
 */
class MultipleContexts extends PureComponent {
  state = {
    section1Theme: 'dark',
    section2Theme: 'light'
  }

  swapThemes = () => {
    this.setState({
      section1Theme: this.state.section1Theme === 'dark' ? 'light' : 'dark',
      section2Theme: this.state.section2Theme === 'dark' ? 'light' : 'dark'
    })
  }

  render() {
    const { section1Theme, section2Theme } = this.state

    return (
      <Provider theme="blue">
        <Panel>
          <form>
            <Section1Provider theme={section1Theme}>
              <Section1 />
            </Section1Provider>
            <Section2Provider theme={section2Theme}>
              <Section2 />
            </Section2Provider>
          </form>
          <Button onClick={this.swapThemes}>Swap Themes!</Button>
        </Panel>
      </Provider>
    )
  }
}

export default MultipleContexts
