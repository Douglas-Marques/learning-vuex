import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        products: [
            { name:'Banana Skin',  price: 20 },
            { name:'Shiny Star',   price: 40 },
            { name:'Green Shells', price: 60 },
            { name:'Red Shells',   price: 80 }
        ]
    },
    getters: {
        saleProducts: state => {
            return state.products.map(product => {
                return {
                    name: `** ${ product.name } **`,
                    price: product.price/2 
                }
            })
        }
    },
    mutations: {
        reducePrice: (state, payload) => {
            state.products.forEach(product => {
                product.price -= payload
            })
        }
    },
    actions: {
        reducePrice: (context, payload) => {
            context.commit('reducePrice', payload)
        }
    }
})
