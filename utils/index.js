export const ClassCombiner = (arr = []) => {
  try {
    return [].concat(arr).join(" ").replace(/\s\s+/g, ' ')
  } catch (error) {
    console.error(error)
    return ""
  }
}