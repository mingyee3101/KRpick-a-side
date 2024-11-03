import './App.css';
import React from 'react';
import FlagList from './flag/FlagList';
import flag_ger from './flag/assets/Kaiserreich.svg';
import flag_chi from './flag/assets/kuomintang.png';

const App: React.FC = () => {
    const questions = [
        {
            id: 1,
            text: '제5차 영국-아프가니스탄 전쟁',
            flags: [
                { id: 1, src: '/path-to-flag1.png', name: '협상국' },
                { id: 2, src: '/path-to-flag2.png', name: '아프가니스탄 왕국' },
            ],
        },
        {
            id: 2,
            text: '화동대전',
            flags: [
                { id: 3, src: '/path-to-flag3.png', name: '남직예군벌' },
                { id: 4, src: '/path-to-flag4.png', name: '안휘군벌' },
                { id: 5, src: '/path-to-flag5.png', name: '산동군벌' },
                { id: 6, src: flag_chi, name: '국민당' },
            ],
        },
    ];

    return (
        <div>
            {questions.map((question) => (
                <div key={question.id}>
                    <h2>{question.text}</h2>
                    <FlagList flags={question.flags} />
                </div>
            ))}
        </div>
    );
};

export default App;
