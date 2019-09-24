import React from 'react';

import {useWebmStore} from 'stores/hooks';

const Controls: React.FC = () => {
    const store = useWebmStore();

    return (
        <div>
            <button onClick={store.prevWebm} disabled={store.cursor === 0}>
                prev
            </button>

            <button
                onClick={store.nextWebm}
                disabled={store.cursor === store.webms.length - 1}
            >
                next
            </button>
        </div>
    );
};

export default Controls;
