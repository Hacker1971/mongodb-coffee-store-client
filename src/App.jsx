import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CoffeeCard from './components/CoffeeCard';

const App = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className='m-20'>
    <h1 className='text-6xl text-center my-20 text-purple-600'>Hot Hot Cold Coffee: {coffees.length}</h1>
    <div className='grid md:grid-cols-2 gap-4'>
      {
        coffees.map(coffee => <CoffeeCard
          key={coffee._id}
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
        ></CoffeeCard>)
      }
    </div>
    <div className='text-center my-7'>
      <Link to='/coffee'> <button className="btn btn-outline btn-success">ADD COFFEE</button> </Link>
    </div>
  </div>
  );
};

export default App;