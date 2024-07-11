import { timeStamp } from 'console';
import React from 'react';
import './DateItem.css';

const DateItem: React.FC = () => {

    const today = new Date();
    const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분`;

    return (
        <div>
            {formattedDate}
        </div>
    )
};

export default DateItem;