import React, {useState }from 'react';

function useCounter( defaultVal = 0 ) {

    let [count,setState] = useState(defaultVal);

    return {
        count,
        add: () => {
            setState(count + 1)},
        subtract: () => {
                setState(count - 1)}
    }
}

export default useCounter;