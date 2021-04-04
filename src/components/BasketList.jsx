import { BasketItem } from './BasketItem';

function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incrQuantity,
        decrQuantity,
    } = props;
    const totalPrice = order.reduce((sum, elem) => {
        return sum + elem.price * elem.quantity;
    }, 0);
    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Basket</li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.id}
                        removeFromBasket={removeFromBasket}
                        incrQuantity={incrQuantity}
                        decrQuantity={decrQuantity}
                        {...item}
                    />
                ))
            ) : (
                <li className="collection-item active">Basket empty</li>
            )}
            <li className="collection-item active">
                Final Price :{totalPrice}
            </li>
            <i
                className="material-icons basket-close"
                onClick={handleBasketShow}
            >
                close
            </i>
            <button className="secondary-content btn-small">Checkout</button>
        </ul>
    );
}
export { BasketList };
