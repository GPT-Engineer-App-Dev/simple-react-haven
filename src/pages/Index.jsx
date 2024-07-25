import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [greeting, setGreeting] = useState('Hello');

  const toggleGreeting = () => {
    setGreeting(greeting === 'Hello' ? 'Goodbye' : 'Hello');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">{greeting}, World!</h1>
      <Button onClick={toggleGreeting}>Toggle Greeting</Button>
    </div>
  );
};

export default Index;