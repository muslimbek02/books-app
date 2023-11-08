export const setItem = (key, data) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log("Error setting data");
  }
};

export const getItem = key => {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (error) {
    console.log("Error getting data");
  }
};

export const removeItem = key => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.log("Error removing data");
  }
}
