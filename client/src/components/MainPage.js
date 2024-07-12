import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div
      style={{
        backgroundImage: `url('/Bg image.png')`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'column',
        overflow: 'hidden', // Prevent scrolling
      }}
    >
      <nav
        style={{
          position: 'absolute',
          top: 30,
          right: 10,
          padding: 20,
        }}
      >
        <ul
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          <li>
          <Link
  to="/join-room"
  style={{
    color: '#fff',
    textDecoration: 'none',
    padding: '20px 30px', // Increased padding for a larger clickable area
    backgroundColor: 'black',
    borderRadius: '5px',
    border: '1px solid #fff',
    transition: 'background-color 0.3s, transform 0.3s',
    fontSize: '25px', // Increased font size to make the text larger
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    e.target.style.transform = 'scale(1.05)';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = 'black';
    e.target.style.transform = 'scale(1)';
  }}
>
  Join Room
</Link>

          </li>
        </ul>
      </nav>
      <img
        src="/images/Logo.png"
        alt="CodeSynth"
        style={{
          width: 120,
          height: 120,
          position: 'absolute',
          top: 20,
          left: 20,
        }}
      />
      <div
        style={{
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          color: 'black', // Set text color to black
          textShadow: '0px 0px 10px rgba(0,0,0,0.2)',
        }}
      >
        <h1 style={{ fontSize: 35, fontWeight: 'bold', margin: '5px 0', fontStyle: 'italic', fontFamily: 'cursive' }}>
          Welcome to
        </h1>
        <h1 style={{ fontSize: 40, fontWeight: 'bold', margin: '5px 0' }}>
          CodeSynth
        </h1>
      </div>

      {/* Bg2 image */}
      <img
        src="/Bg2 image.png"
        alt="Bg2"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '100%',
          maxHeight: '100%',
          zIndex: 0,
        }}
      />
     
      {/* Slogan */}
      <div
        style={{
          position: 'absolute',
          bottom: -10, // Adjusted position to move it up slightly
          width: '100%',
          textAlign: 'center',
          zIndex: 1,
          padding: '20px', // Added padding for a more premium look
          backgroundColor: 'rgba(0, 0, 0, 0.2)', // Added a subtle background color
          borderRadius: '10px', // Added a rounded corner effect
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)', // Added a subtle shadow effect
        }}
      >
        <p
          style={{
            fontSize: 30, // Increased font size for a more dramatic effect
            fontWeight: 'bold',
            fontFamily: 'cursive', // Changed font family to cursive for a stylish look
            color: '#fff', // Set text color to white
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)', // Added text shadow for reflection effect
            letterSpacing: '1px', // Added letter spacing for a more premium look
          }}
        >
          <span style={{ color: '#fff' }}>Empower Your Code:</span> 
          <br />
          <span style={{ fontSize: 28, fontWeight: 'normal' }}>Collaborate, Create, Innovate</span>
        </p>
      </div>
    </div>
  );
}

export default MainPage;
