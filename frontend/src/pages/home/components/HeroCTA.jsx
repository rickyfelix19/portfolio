import React from 'react';
import Typical from 'react-typical';

import '../../../index.css';

function HeroCTA() {
  const openURL = () => {
    window.open(`https://resume.io/r/1OGeGqGYN`);
  };

  return (
    <>
      <section>
        <div className="flex justify-between flex-wrap rounded-background">
          <div className="flex-col">
            <div>
              <h2 className="text-h2">Hi! My name is Ricky Felix</h2>
            </div>

            <div>
              <h1 className="text-title">
                Let's
                <Typical
                  steps={[
                    'Build Memorable',
                    2800,
                    'Design Engaging',
                    2800,
                    'Create Impactful',
                    2800
                  ]}
                  loop={Infinity}
                />
              </h1>
            </div>

            <div>
              <h2 className="text-h2">experiences together</h2>
            </div>
          </div>

          <div className="self-end">
            {/* image */}
            <button className="button-primary" onClick={openURL}>
              Download Resume
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroCTA;
