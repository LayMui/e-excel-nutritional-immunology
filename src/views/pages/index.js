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
      title: 'Healthy and unhealthy joint'
    },
    component: NI_5
  },
  {
    name: 'Page 6',
    meta: {
      title: 'Nutritional Immunology'
    },
    component: NI_6
  },
  {
    name: 'Page 7',
    meta: {
      title: 'The Best Doctor is our Immune System'
    },
    component: NI_7
  },
  {
    name: 'Page 8',
    meta: {
      title: 'Healthy immune system'
    },
    component: NI_8
  },
  {
    name: 'Page 9',
    meta: {
      title: '3 Functions of Immune System'
    },
    component: NI_9
  },
  {
    name: 'Page 10',
    meta: {
      title: '3 Essentials Nutrients needed by the immune system'
    },
    component: NI_10
  },
  {
    name: 'Page 11',
    meta: {
      title: 'Phytochemical'
    },
    component: NI_11
  },
  {
    name: 'Page 12',
    meta: {
      title: 'Antioxidants'
    },
    component: NI_12
  },
  {
    name: 'Page 13',
    meta: {
      title: 'Polysacharides'
    },
    component: NI_13
  },
  {
    name: 'Page 14',
    meta: {
      title: 'E-Excel health management package'
    },
    component: NI_14
  },
  {
    name: 'Page 15',
    meta: {
      title: 'E-Excel International'
    },
    component: NI_15
  },
  {
    name: 'Page 16',
    meta: {
      title: 'E-Excel Production and Research'
    },
    component: NI_16
  },
  {
    name: 'Page 17',
    meta: {
      title: 'Dr Chen\'s Profile'
    },
    component: NI_17
  },
  {
    name: 'Page 18',
    meta: {
      title: 'Prevention is better than cure'
    },
    component: NI_18
  },
  {
    name: 'Page 19',
    meta: {
      title: '4 Keys to Good Health'
    },
    component: NI_19
  },

]

pages.forEach((page, index) => page.path = `${index + 1}`)

export default pages