import React from 'react';

interface FlagSelectionProps {
    flagSrc: string;
    flagName: string;
    isChecked: boolean;
    onCheck: () => void;
}

const FlagSelection: React.FC<FlagSelectionProps> = ({ flagSrc, flagName, isChecked, onCheck }) => {
    return (
        <div style={{ textAlign: 'center', margin: '10px' }}>
            <img src={flagSrc} alt={flagName} style={{ width: '100px', height: 'auto' }} />
            <div>
                <input type="checkbox" checked={isChecked} onChange={onCheck} />
            </div>
        </div>
    );
};

export default FlagSelection;
