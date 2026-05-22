// src/utils/helpers.js
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

export const truncateText = (text, limit) => {
  return text.length > limit ? text.substring(0, limit) + '...' : text;
};
