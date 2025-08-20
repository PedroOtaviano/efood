import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Menu } from '../../ListaRestaurantes'

type CartState = {
  items: Menu[]
  isOpen: boolean
  isCheckoutOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isCheckoutOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Menu>) => {
      const prato = state.items.find((item) => item.id === action.payload.id)
      if (!prato) {
        state.items.push(action.payload)
      } else {
        alert('Esse prato já foi selecionado, confira seu carrinho.')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
      state.isCheckoutOpen = false
    },
    openCheckout: (state) => {
      state.isCheckoutOpen = true
    },
    closeCheckout: (state) => {
      state.isCheckoutOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, remove, openCheckout, closeCheckout, clear } =
  cartSlice.actions
export default cartSlice.reducer
