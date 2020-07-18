export function loadFromLocalStorage(key: string) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  } catch (error) {
    console.log('Error retrieving local storage:', error);
    return undefined;
  }
}

export function saveToLocalStorage(key: string, value: any) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('Error saving local storage:', error);
  }
}
