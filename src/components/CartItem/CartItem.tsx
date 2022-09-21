import classNames from 'classnames';
import { Button, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import storeItems from '../../data/items.json';
import { formatCurrency } from '../../utilities/formatCurrency';
import styles from './CartItem.module.css';

type CartItemProp = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProp) {
  const { removeFromCart } = useShoppingCart();

  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        className={styles.cartItem__img}
      />
      <div className={classNames('me-auto')}>
        <div>
          {item.name}{' '}
          {quantity > 1 && (
            <span className={classNames('text-muted', styles.cartItem__quantity)}>
              x{quantity}
            </span>
          )}
        </div>
        <div className={classNames('text-muted', styles.cartItem__price)}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
    </Stack>
  );
}
