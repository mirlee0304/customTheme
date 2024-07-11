import React, { useState } from 'react';
import DateItem from './DateItem';

const NameInput: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [inputValue, setInputValue] = useState<string>('');

    const addName = (text: string) => {
        setName(text);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addName(inputValue);
            setInputValue('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='이름을 입력하세요'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} 
                />
                <button type="submit">확인</button>
            </form>
            {name && <p>{name} <DateItem /></p>}
        </div>
    );
}

export default NameInput;
