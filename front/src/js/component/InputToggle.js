import React from 'react'
import PropTypes from 'prop-types'

const InputToggle = ({ value, cb, params }) => {

  const toggle = () => {
    cb(...params)
  }

  return (
    <div className="input-toggle-6e7e7eeb">
      <div className={`toggle ${!value ? "disable" : ""}`} onClick={toggle}></div>
    </div>
  )
}

InputToggle.propTypes = {
  cb: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
  params: PropTypes.array
}

export default InputToggle