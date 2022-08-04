import React from 'react'
import addBindTo from '../hocs/addBindTo'

const Panel = ({ theme, size, children }) => (
  <div className={`panel theme-${theme} size-${size}`}>{children}</div>
)

Panel.defaultProps = {
  theme: 'light',
  size: 'medium'
}

/**
 * Renders a panel.
 *
 * @example
 * <Panel theme="dark">Foo</Panel>
 *
 * @example
 * const context = createContext({})
 * const BoundPanel = Panel.bindTo(context)
 * <Provider context={context}>
 *   <BoundPanel />
 * </Provider>
 */
export default addBindTo(context => ({
  theme: context.theme
}))(Panel)
