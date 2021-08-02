import React from 'react';
import DogCardList from 'src/components/Home/DogCardList';
import Search from 'src/components/Home/Search';
import Sort from 'src/components/Home/Sort';

function Home() {
  return (
    <>
      <Sort />
      <Search />
      <DogCardList />
    </>
  );
}

export default Home;
