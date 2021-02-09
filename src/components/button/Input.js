import React, { useRef } from 'react'
import { Form } from "react-bootstrap"
import PropTypes from 'prop-types'

export default function Input({ forwardedRef, id, label, type, placeholder, defaultValue, disabled, required }) {
  const localRef = useRef(null);
  const inputRef = forwardedRef || localRef;

  return (
    <Form.Group id={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        ref={inputRef}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </Form.Group>
  )
}

Input.propTypes = {
  forwardedRef: PropTypes.object,
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool
}

Input.defaultProps = {
  forwardedRef: null,
  id: "",
  label: "",
  type: "",
  placeholder: "",
  defaultValue: "",
  disabled: false,
  required: false
}
