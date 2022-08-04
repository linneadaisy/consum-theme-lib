import { connectContext } from 'react-connect-context-map'
import DefaultContext from '../DefaultContext'

/**
 * Adds a `bindTo` method on the given component, which binds it to
 * a context Consumer component. Returns the component bound to the
 * default context.
 *
 * @example
 * addBindTo(context => ({ theme: context.theme }))(MyComponent)
 */
const addBindTo = (mapContextToProps, mergeProps) => Component => {
  Component.bindTo = Consumer =>
    connectContext(Consumer, mapContextToProps, mergeProps)(Component)

  return Component.bindTo(DefaultContext.Consumer)
}

export default addBindTo
