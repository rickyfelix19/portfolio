import React from 'react';

// import Button from '../../components/button/Button';
import HeroCTA from './components/HeroCTA';
import KnowMe from './components/KnowMe';

import '../../index.css';

function Home() {
  return (
    <>
      <div className="container-2xl">
        {/* max-width: 1536px; */}
        <div>
          <HeroCTA />
        </div>
        <div>
          <KnowMe />
        </div>
      </div>
    </>
  );
}

export default Home;
