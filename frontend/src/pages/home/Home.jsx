import React from 'react';

// import Button from '../../components/button/Button';
import HeroCTA from './components/HeroCTA';
import KnowMe from './components/KnowMe';
import SendEmail from './components/SendEmail';

import '../../index.css';

function Home() {
  return (
    <>
      {/* <div className="container-2xl"> */}
      {/* max-width: 1536px; */}
      <div>
        <div>
          <HeroCTA />
        </div>
        <div>
          <KnowMe />
        </div>
        <div>
          <SendEmail />
        </div>
      </div>
    </>
  );
}

export default Home;
