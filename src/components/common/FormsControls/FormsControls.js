import React from "react";
import styles from './formsControls.module.css'

export const Textarea = ({input, meta, ...otherProps}) => {
  const someError = meta.error && meta.touched

  return (
    <div className={styles.formsControl + ' ' + (someError ? styles.error : '') }>
      <div><textarea {...input} {...otherProps} /></div>
        {someError && <span>{meta.error}</span>}
    </div>
  )
}

export const Input = ({input, meta, ...otherProps}) => {
  const someError = meta.error && meta.touched

  return (
    <div className={styles.formsControl + ' ' + (someError ? styles.error : '') }>
      <div><input {...input} {...otherProps} /></div>
        {someError && <span>{meta.error}</span>}
    </div>
  )
}