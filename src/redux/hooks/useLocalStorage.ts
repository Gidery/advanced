import { Cargo } from '../redusers/cargoReducer';
import { Direction } from '../redusers/directionsReducer';

type Key = 'cargo' | 'directions';

export const useLocalStorage = (itemKey: Key) => {
  interface InitialStorage {
    cargo: Cargo[];
    directions: Direction[];
  }

  const initialStorage: InitialStorage = {
    cargo: [
      {
        id: '1',
        name: 'Cargo with food',
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
        name: 'Main direction',
        start: 'Moscow',
        end: 'Voronezh',
        processedCargo: [
          {
            id: '1',
            name: 'Voronezh cargo',
            status: 'delivered',
            goods: [
              {
                id: '1',
                name: 'product',
                quantity: 13,
              },
            ],
          },
        ],
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

  const deleteItem = (id: Cargo['id'] | Directions['id']) => {
    const storageValue = getStorageValue();
    const newValue = storageValue.filter(
      (item: Cargo | Directions) => item.id !== id
    );
    localStorage.setItem(itemKey, JSON.stringify(newValue));
  };

  const editItem = (value: Cargo | Directions) => {
    const storageValue = getStorageValue();
    const newValue = storageValue.map((item: Cargo | Directions) => {
      if (item.id !== value.id) return item;
      return value;
    });
    localStorage.setItem(itemKey, JSON.stringify(newValue));
  };

  return { storageValue: getStorageValue(), addItem, deleteItem, editItem };
};
