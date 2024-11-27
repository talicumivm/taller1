import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <strong>{item.name}</strong> - {item.price}€
      </div>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => onRemove(item.id)}
      >
        Eliminar
      </button>
    </li>
  );
};

export default CartItem;
