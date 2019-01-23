import storage from 'good-storage'

const state = {
  city: storage.get('__city__', '北京')
}

export default state
