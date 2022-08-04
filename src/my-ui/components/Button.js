import React from 'react'
import addBindTo from '../hocs/addBindTo'

const Button = ({ theme, children, onClick }) => (
  <button className={`button theme-${theme}`} onClick={onClick}>
    {children}
  </button>
)

Button.defaultProps = {
  theme: 'light'
}

export default addBindTo(context => ({
  theme: context.theme
}))(Button)
