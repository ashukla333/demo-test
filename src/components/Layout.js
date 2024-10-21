
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="max-w-md mx-auto h-screen flex flex-col items-center justify-center bg-background">
      {children}
    </div>
  );
};

export default Layout;
