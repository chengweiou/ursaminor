import { clone } from '@/fn'
const map = {}

const detail = {
  xxx: { id: 0, name: '', phy: 0, bld: 0, createAt: '' },
  weapon: { id: 0, name: '', phy: 0, bld: 0, createAt: '' },
}

createMap()
function createMap() {
  Object.keys(detail).map(k => {
    map[k] = () => clone(detail[k])
  })
}
export default map
