export const getCart = () => {
  const preItems = JSON.parse(localStorage.getItem("cart")) || { items: [] };
  return preItems.items;
};

export const addToCart = (item) => {
  if (!item || !item._id) return;

  const preItems = getCart();
  const newCart = { items: [...preItems, item._id] };

  localStorage.setItem("cart", JSON.stringify(newCart));
};

export const removeCartItem = (itemId) => {
  if (!itemId) return;

  const preItems = getCart();
  const filteredItems = preItems.filter((id) => id !== itemId);
  const newCart = { items: filteredItems };

  localStorage.setItem("cart", JSON.stringify(newCart));
};
