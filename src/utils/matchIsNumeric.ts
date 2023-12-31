export function matchIsNumeric(text: unknown) {
  const isNumber = typeof text === 'number'
  const isString = typeof text === 'string';
  return (isNumber || (isString && text !== '')) && !isNaN(Number(text))
}