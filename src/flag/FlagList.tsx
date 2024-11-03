import React, { useState } from 'react';
import FlagSelection from './FlagSelection';


interface Flag {
    id: number;
    src: string;
    name: string;
    isChecked: boolean;
  }
  
  interface FlagListProps {
    flags: { id: number; src: string; name: string }[];
  }
  
  const FlagList: React.FC<FlagListProps> = ({ flags }) => {
    const [flagStates, setFlagStates] = useState<Flag[]>(
      flags.map(flag => ({ ...flag, isChecked: false }))
    );
  
    const handleCheck = (id: number) => {
      setFlagStates(prevFlags =>
        prevFlags.map(flag =>
          flag.id === id ? { ...flag, isChecked: !flag.isChecked } : flag
        )
      );
    };
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {flagStates.map(flag => (
          <FlagSelection
            key={flag.id}
            flagSrc={flag.src}
            flagName={flag.name}
            isChecked={flag.isChecked}
            onCheck={() => handleCheck(flag.id)}
          />
        ))}
      </div>
    );
  };
  
  export default FlagList;
