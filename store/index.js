export const state = () => ({
  isOpen: false,
  url: ""
})

export const mutations = {
  openModal(state, data) {
    state.isOpen = true
    state.url = data
  },
  closeModal(state) {
    state.isOpen = false
    state.url = ""
  }
}
