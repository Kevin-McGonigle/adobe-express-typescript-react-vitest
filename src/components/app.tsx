import '@/index.css';
import { Button } from '@swc-react/button';
import React, { useState } from 'react';

export function App() {
  const [buttonLabel, setButtonLabel] = useState('Click me');

  function handleClick() {
    setButtonLabel('Clicked');
  }

  return (
    <div className="flex min-h-screen mx-6">
      <div className="flex flex-col items-center m-auto space-y-2">
        <Button size="l" onClick={handleClick}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}
