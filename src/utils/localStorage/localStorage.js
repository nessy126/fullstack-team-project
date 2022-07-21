const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return null;
  }
};

const get = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return null;
  }
};

const remove = key => {
  try {
    return localStorage.removeItem(key);
  } catch (error) {
    return null;
  }
};

const updateStorage = (key, nameField, value) => {
  const saveData = get(key);
        save(key, {...saveData, [nameField]: value});
}

export { get, save, remove, updateStorage };