export function inObject(hayStack, key, needle) {
  return hayStack.some( function(el) {
    return el[key] === needle;
  });
}