export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const getMenu = (array, callback, type) => {
  const items = [];
  const filteredItems = array.filter((item) => item.type === type);
  items.push(...filteredItems);
  callback(items);
};

export const getFilterdItems = (array, callback, type) => {
  const items = [];
  for (let i = 0; i < array.length; i++) {
    const filteredItems = array[i].filter((item) => item.type === type);
    items.push(...filteredItems);
  }
  callback(items);
};