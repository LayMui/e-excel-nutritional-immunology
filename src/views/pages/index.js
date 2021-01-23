import NI_1 from './NI_1'
import NI_2 from './NI_2'
import NI_3 from './NI_3'
import NI_4 from './NI_4'
import NI_5 from './NI_5'
import NI_6 from './NI_6'
import NI_7 from './NI_7'
import NI_8 from './NI_8'
import NI_9 from './NI_9'
import NI_10 from './NI_10'
import NI_11 from './NI_11'
import NI_12 from './NI_12'
import NI_13 from './NI_13'
import NI_14 from './NI_14'
import NI_15 from './NI_15'
import NI_16 from './NI_16'
import NI_17 from './NI_17'
import NI_18 from './NI_18'
import NI_19 from './NI_19'

const pages = [
  {
    name: 'Page 1',
    meta: {
      title: 'Health is Wealth'
    },
    component: NI_1
  },
  {
    name: 'Page 2',
    meta: {
      title: 'Modern Lifestyle'
    },
    component: NI_2
  },
  {
    name: 'Page 3',
    meta: {
      title: 'Healthy and unhealthy windpipe'
    },
    component: NI_3
  },
  {
    name: 'Page 4',
    meta: {
      title: 'Healthy and unhealthy liver'
    },
    component: NI_4
  },
  {
    name: 'Page 5',
    meta: {
      title: '-'
    },
    component: NI_5
  },
  {
    name: 'Page 6',
    meta: {
      title: '-'
    },
    component: NI_6
  },
  
]

pages.forEach((page, index) => page.path = `${index + 1}`)

export default pages