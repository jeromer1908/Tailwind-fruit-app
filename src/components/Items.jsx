import React, { useState } from 'react';
import Card from './Card';

const Items = () => {
  const [fruits] = useState([
    { id: 1, image: '1', name: 'Green Grapes', price: 100 },
    { id: 2, image: '2', name: 'Pomegranate', price: 200 },
    { id: 3, image: '3', name: 'Black Grapes', price: 250 },
    { id: 4, image: '4', name: 'Grape Fruit', price: 300 },
    { id: 5, image: '5', name: 'Berry', price: 250 },
    { id: 6, image: '6', name: 'Lemon', price: 150 },
  ]);

  return (
    <section className="max-w-6xl mx-auto my-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {fruits.map((fruit) => (
          <Card key={fruit.id} fruit={fruit} />
        ))}
      </div>
    </section>
  );
};

export default Items;
