import React from 'react';

// import Button from '../../components/button/Button';
import HeroCTA from './components/HeroCTA';
import KnowMe from './components/KnowMe';

import '../../index.css';

function Home() {
  const openURL = () => {
    window.open(`https://resume.io/r/1OGeGqGYN`);
  };

  return (
    <>
      <div>
        <HeroCTA />
      </div>

      <div>
        <KnowMe />
      </div>
    </>
  );
}

export default Home;
