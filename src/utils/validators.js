export const isRequiredField = (values) => {
  if (!values) {
    return 'Поле является обязательным.'
  }

  return undefined
}

export const maxLength = (length) => {
  return (values) => {
    if (values && values.length > length) {
      return `Содержит больше ${length} символов.`
    }

    return undefined
  }
}