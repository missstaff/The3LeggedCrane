import { sizes } from "./ScreenSizes";

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

export const isMatch = (media) => {
  const query = `(min-width: ${sizes[media]})`;
  return window.matchMedia(query).matches;
}

export const findClosest = (queries) =>  {
  for (let i = queries.length - 1; i >= 0; i--) {
      if (isMatch(queries[i])) {
          return queries[i];
      }
  }
  return 'xs';
}