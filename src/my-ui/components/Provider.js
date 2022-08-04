import React, { PureComponent } from 'react'
import { omit } from 'lodash-es'
import shallowEqual from 'shallowequal'
import DefaultContext from '../DefaultContext'

/**
 * Renders a context Provider for the given config.
 *
 * @example
 * <Provider theme="dark">
 *   <MyComponent />
 * </Provider>
 *
 * @example
 * const context = createContext({})
 * const BoundMyComponent = MyComponent.bindTo(context)
 *
 * <Provider theme="dark" context={context}>
 *   <BoundMyComponent />
 * </Provider>
 *
 * @example
 * const context = createContext({})
 * const BoundProvider = Provider.bindTo(context)
 * const BoundMyComponent = MyComponent.bindTo(context)
 *
 * <BoundProvider theme="dark">
 *   <BoundMyComponent />
 * </BoundProvider>
 */
class Provider extends PureComponent {
  static defaultProps = {
    theme: 'light',
    linkComponent: 'a',

    // User can provide the whole context object or just the Provider
    context: DefaultContext
  }

  static getConfig(props) {
    return omit(props, 'children', 'context', 'provider')
  }

  static bindTo(context) {
    return props => <Provider {...props} context={context} />
  }

  constructor(props) {
    super(props)

    this.state = {
      config: Provider.getConfig(props)
    }
  }

  componentWillReceiveProps(nextProps) {
    const currentConfig = Provider.getConfig(this.props)
    const newConfig = Provider.getConfig(nextProps)

    if (!shallowEqual(currentConfig, newConfig)) {
      this.setState({ config: newConfig })
    }
  }

  render() {
    const { children, context } = this.props
    const { config } = this.state

    const ContextProvider = context.Provider || context

    return <ContextProvider value={config}>{children}</ContextProvider>
  }
}

export default Provider
