
export const Actions = {
    Notify: "NOTIFY",
    Auth: "AUTH",
    Cart: "CART",
}

export const addToCart = (product, cart) => {
    if (product.inStock === 0)
        return ({ type: 'NOTIFY', payload: { msg: { err: `The product has been added to cart` } } })

    const check = cart.every(item => {
        return item._id !== product._id
    })
    if (!check)
        return ({ type: 'NOTIFY', payload: { msg: { err: `The product has been added to cart` } } })

    return ({ type: 'CART', payload: [...cart, { ...product, quantity: 1 }] })
}

export const inCrease = (data, id) => {
    const newData = [...data]
    newData.forEach(item => {
        if (item._id === id) item.quantity += 1
    })

    return ({ type: 'CART', payload: newData })

}

export const deCrease = (data, id) => {
    const newData = [...data]
    newData.forEach(item => {
        if (item._id === id) item.quantity -= 1
    })

    return ({ type: 'CART', payload: newData })

}


export const deleteItem = (data, id) => {
    const newData = data.filter(item => item._id !== id)
    return ({ type: 'CART', payload: newData })

}