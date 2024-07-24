import React from 'react';
import Galaxy from './Galaxy/Galaxy';
import Blob from './Blob/Blob';
import SaturnRing from './SaturnRing/SaturnRing';
const Layout = ({ children }) => {
  return (
//     <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
//     <Galaxy />
//     <div style={{ position: 'relative', zIndex: 1, color: 'white' }}>
//       {children}
//     </div>
//   </div>
<>
<div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Galaxy />
      <div style={{ position: 'absolute', zIndex: 1, color: 'white', width: '100%', height: '100%' }}>
        {children}
      </div>
      {/* <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '400px', height: '400px', zIndex: 2 }}>
        <Blob />
      </div>
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '400px', height: '400px', zIndex: 3 }}>
        <SaturnRing center={{ x: 1, y: 1, z: 1 }} />
      </div> */}
    </div>
</>
  );
};

export default Layout;
