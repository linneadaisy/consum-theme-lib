import React from 'react'
import addBindTo from '../hocs/addBindTo'

const Field = ({ theme, label, children }) => (
  <div className={`field theme-${theme}`}>
    <label>{label}</label>
    {children}
  </div>
)

Field.defaultProps = {
  theme: 'light'
}

export default addBindTo(context => ({
  theme: context.theme
}))(Field)
