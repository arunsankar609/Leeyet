import React from 'react';
import { ColorRing } from 'react-loader-spinner';

function MyLoader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <ColorRing
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
        className="inline-block animate-spin"
        transparent={true}
      />
    </div>
  );
}