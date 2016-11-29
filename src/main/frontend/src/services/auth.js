const key = 'carsellAuthId';

export default {
  set(value) {
    window.localStorage.setItem(key, value)
  },
  get() {
    return window.localStorage.getItem(key)
  },
  remove() {
    window.localStorage.setItem(key, null)
  },
  isEmpty() {
    return window.localStorage.getItem(key) == "null"
  }
}