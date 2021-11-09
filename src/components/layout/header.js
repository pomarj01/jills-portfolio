import React from 'react';
import Navigation from '../navigation';

export default function Header({ children }) {
  return (
    <>
      <Navigation />
      { children }
    </>
  )
};