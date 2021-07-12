export default function auth ({ next, store }){
    console.log('teetete')
    if(!store.getters.auth.loggedIn){
        console.log(store)
        return next({
            name: 'Login'
        })
    }
    return next()
}
