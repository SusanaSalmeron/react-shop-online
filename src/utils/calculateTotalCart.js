const FREE_SHIPPING_THRESHOLD = 50

export const calculateTotal = (cart, shipping = 5) => {
    let total = 0
    const itemTotal = cart?.map(item => item.price * item.quantity)
    for (let i = 0; i < itemTotal.length; i++) {
        total = total + itemTotal[i]
    }

    return total > FREE_SHIPPING_THRESHOLD ? total : total + shipping
}


