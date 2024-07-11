import React, { useState } from 'react';
import DateItem from './DateItem';
import useLocalStorage from '../CustomHook';

const NameInput: React.FC = () => {
    const { name, setName, time, setTime } = useLocalStorage('user', '', new Date());
    const [inputValue, setInputValue] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setName(inputValue);
            setTime(new Date());
            setInputValue('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="이름을 입력하세요"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} 
                />
                <button type="submit">확인</button>
            </form>
            {name && (
                <p>
                    {name} <DateItem />
                </p>
            )}
        </div>
    );
};

export default NameInput;
