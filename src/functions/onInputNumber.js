export const onInputNumber = (refVal) => {
  return (refVal = refVal.replace(/[^0-9]/g, ''))
}
