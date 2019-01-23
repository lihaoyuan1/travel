import storage from 'good-storage'

const mutations = {
  changeCity (state, city) {
    state.city = city
    storage.set('__city__', city)
  }
}

export default mutations
