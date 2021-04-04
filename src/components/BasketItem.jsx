function BasketItem(props) {
    const {
        id,
        price,
        name,
        quantity,
        removeFromBasket = Function.prototype,
        incrQuantity = Function.prototype,
        decrQuantity = Function.prototype,
    } = props;
    return (
        <li className="collection-item">
            {name}{' '}
            <i
                className="material-icons basket-quantity"
                onClick={() => decrQuantity(id)}
            >
                remove
            </i>
            x{quantity}
            <i
                className="material-icons basket-quantity"
                onClick={() => incrQuantity(id)}
            >
                add
            </i>{' '}
            = {price * quantity}
            <span href="#!" class="secondary-content">
                <i
                    class="material-icons basket-delete"
                    onClick={() => removeFromBasket(id)}
                >
                    close
                </i>
            </span>
        </li>
    );
}
export { BasketItem };
