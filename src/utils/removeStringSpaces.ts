import { allSpaces } from "../data/regex/regex";

const removeStringSpaces = (stringValue: string) => {
  if (typeof stringValue !== 'string') {
    return stringValue;
  }
  return stringValue.replace(allSpaces, '');
}

export default removeStringSpaces;