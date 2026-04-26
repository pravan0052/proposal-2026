"use client";
import React, { useState } from 'react';

export default function Proposal() {
  const [choice, setChoice] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ top: '50%', left: '60%' });

  const moveButton = () => {
    const randomTop = Math.floor(Math.random() * 80) + '%';
    const randomLeft = Math.floor(Math.random() * 80) + '%';
    setNoButtonPos({ top: randomTop, left: randomLeft });
  };

  if (choice) {
    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffe4e6', textAlign: 'center' }}>
        <h1 style={{ color: '#db2777', fontSize: '3rem' }}>YAYYY! ❤️</h1>
        <img src="https://media.giphy.com/media/11T1ycqTG2Ec92/giphy.gif" alt="Shinchan Dance" style={{ borderRadius: '20px', width: '300px' }} />
        <p style={{ marginTop: '20px', fontSize: '1.5rem' }}>See you soon, partner!</p>
      </div>
    );
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fffbeb', overflow: 'hidden' }}>
      <img src="https://pngimg.com/uploads/shinchan/shinchan_PNG45.png" alt="Shinchan" style={{ width: '200px', marginBottom: '20px' }} />
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Hiii! It's me, Shin-chan!</h2>
        <p style={{ marginBottom: '30px' }}>Praveen wants to know... will you be his partner forever? 💍</p>
        <button 
          onClick={() => setChoice(true)}
          style={{ padding: '15px 40px', backgroundColor: '#22c55e', color: 'white', borderRadius: '50px', border: 'none', fontSize: '1.2rem', cursor: 'pointer', marginRight: '20px' }}
        > YES! 😍 </button>
        <button 
          onMouseEnter={moveButton}
          style={{ position: 'absolute', top: noButtonPos.top, left: noButtonPos.left, padding: '10px 30px', backgroundColor: '#d1d5db', borderRadius: '50px', border: 'none' }}
        > No ❌ </button>
      </div>
    </div>
  );
}
