import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, initialName: string, initialTime: Date) => {
    const [name, setName] = useState<string>(() => {
        const storedName = localStorage.getItem(`${key}-name`);
        return storedName ? JSON.parse(storedName) : initialName;
    });

    const [time, setTime] = useState<Date>(() => {
        const storedTime = localStorage.getItem(`${key}-time`);
        return storedTime ? new Date(JSON.parse(storedTime)) : initialTime;
    });

    useEffect(() => {
        localStorage.setItem(`${key}-name`, JSON.stringify(name));
    }, [key, name]);

    useEffect(() => {
        localStorage.setItem(`${key}-time`, JSON.stringify(time));
    }, [key, time]);

    return { name, setName, time, setTime };
};

export default useLocalStorage;
