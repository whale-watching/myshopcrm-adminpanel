import AddressList from '../components/address/List'
import AddressCreate from '../components/address/Create'
import AddressUpdate from '../components/address/Update'
import AddressShow from '../components/address/Show'

export default [
  {
    name: 'AddressList', path: '/addresses/', component: AddressList, meta: {
      requiresAuth: true
    }
  },
  {
    name: 'AddressCreate', path: '/addresses/create', component: AddressCreate, meta: {
      requiresAuth: true
    }
  },
  {
    name: 'AddressUpdate', path: '/addresses/edit/:id', component: AddressUpdate, meta: {
      requiresAuth: true
    }
  },
  {
    name: 'AddressShow', path: '/addresses/show/:id', component: AddressShow, meta: {
      requiresAuth: true
    }
  }
]
