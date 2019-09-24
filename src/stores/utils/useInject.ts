import React from 'react';

export default function useInject<IStore>(store: IStore) {
    const createStoreContext = React.createContext<IStore>(store);

    return React.useContext(createStoreContext);
}
