import React from 'react'
import addBindTo from '../hocs/addBindTo'

const Input = ({ theme, type }) => (
  <input type={type} className={`input theme-${theme}`} />
)

Input.defaultProps = {
  theme: 'light'
}

export default addBindTo(context => ({
  theme: context.theme
}))(Input)
