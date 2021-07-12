export default function guest ({ next, store }){
    console.log('teeteteas;l;fmkaoshf')
    if(store.getters.auth.loggedIn){
        return next({
            name: 'Profile'
        })
    }

    return next()
}
