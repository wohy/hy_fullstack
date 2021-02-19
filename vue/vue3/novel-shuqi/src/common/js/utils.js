export const setLocal = (name, value) => {
  localStorage.setItem(name, value)
}
// 取出
export const getLocal = (name) => {
  return localStorage.getItem(name)
}