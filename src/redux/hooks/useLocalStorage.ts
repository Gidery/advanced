import { Cargo } from '../redusers/cargoReducer';
import { Directions } from '../redusers/directionsReducer';

type Key = 'cargo' | 'directions';

export const useLocalStorage = (itemKey: Key) => {
  interface InitialStorage {
    cargo: Cargo[];
    directions: Directions[];
  }

  const initialStorage: InitialStorage = {
    cargo: [
      {
        id: '1',
        name: 'Cargo with food',
        status: null,
        goods: [
          {
            id: '1',
            name: 'Meat',
            quantity: 15,
          },
          {
            id: '2',
            name: 'Preserves',
            quantity: 9,
          },
          {
            id: '3',
            name: 'Bread',
            quantity: 32,
          },
        ],
      },
      {
        id: '2',
        name: 'Cargo with medicines',
        status: null,
        goods: [
          {
            id: '4',
            name: 'meds',
            quantity: 48,
          },
        ],
      },
    ],
    directions: [
      {
        id: '1',
        name: 'direction template #1',
        start: 'start point',
        end: 'end point',
        cargo: [],
      },
    ],
  };

  const setInitialValue = () => {
    localStorage.setItem(itemKey, JSON.stringify(initialStorage[itemKey]));
    const value = localStorage.getItem(itemKey);
    return JSON.parse(value!);
  };

  const getStorageValue = () => {
    const itemValue = localStorage.getItem(itemKey);
    if (itemValue === null) {
      return setInitialValue();
    }
    return JSON.parse(itemValue);
  };

  const addItem = (value: Cargo | Directions) => {
    const storageValue = getStorageValue();
    const newValue = storageValue.concat(value);
    localStorage.setItem(itemKey, JSON.stringify(newValue));
  };

  return { storageValue: getStorageValue(), addItem };
};
