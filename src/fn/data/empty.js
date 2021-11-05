import { clone } from '@/fn'
const map = {}
export default map
const detail = {
  weapon: { id: 0, name: '', phy: 0, bld: 0, createAt: '' },
}

createMap()
function createMap() {
  Object.keys(detail).map(k => {
    map[k] = () => clone(detail[k])
  })
}
