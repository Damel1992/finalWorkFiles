import React, {useState} from 'react';

function useInput(defaultVal = '') {

    let [value, setValue] = useState(defaultVal);

    const onChange = (event) => {
        setValue(event.target.value)
    }

    return {
        value,
        onChange
    };
}

export default useInput;