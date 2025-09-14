import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "./Loader.jsx";

const LoadingScreen = ({ isVisible }) => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowLoader(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <StyledWrapper>
      {/* Animated background particles */}
      <div className="particles">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Pulsing circles */}
      <div className="pulse-circles">
        <div className="pulse-circle pulse-1"></div>
        <div className="pulse-circle pulse-2"></div>
      </div>

      <div className="loading-container">
        <div className="content">
          {showLoader ? (
            <>
              <Loader />
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 1;
  transition: opacity 1s ease-out;
  overflow: hidden;

  /* Particle effects */
  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .particle {
    position: absolute;
    background: rgba(99, 102, 241, 0.6);
    border-radius: 50%;
    animation: float 5s ease-in-out infinite;
    box-shadow: 0 0 10px rgba(99, 102, 241, 0.8);
  }

  @keyframes float {
    0%,
    100% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(15px, 20px);
    }
    50% {
      transform: translate(30px, 10px);
    }
    75% {
      transform: translate(10px, 25px);
    }
  }

  /* Geometric shapes */
  .shapes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .shape {
    position: absolute;
    border: 2px solid rgba(99, 102, 241, 0.3);
    animation: rotate 20s linear infinite;
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.2);
  }

  .shape-1 {
    top: 10%;
    left: 10%;
    width: 60px;
    height: 60px;
    transform: rotate(45deg);
    animation-duration: 25s;
  }

  .shape-2 {
    bottom: 20%;
    right: 15%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    animation-duration: 15s;
    animation-direction: reverse;
  }

  .shape-3 {
    top: 30%;
    right: 20%;
    width: 50px;
    height: 50px;
    transform: rotate(30deg);
    animation-duration: 30s;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* Pulsing circles */
  .pulse-circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pulse-circle {
    position: absolute;
    width: 100px;
    height: 100px;
    border: 2px solid rgba(99, 102, 241, 0.2);
    border-radius: 50%;
    animation: pulse 3s infinite;
  }

  .pulse-1 {
    animation-delay: 0s;
  }

  .pulse-2 {
    animation-delay: 1s;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.8);
      opacity: 0.7;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.3;
    }
    100% {
      transform: scale(0.8);
      opacity: 0.7;
    }
  }

  .loading-container {
    text-align: center;
    position: relative;
    z-index: 10;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .title {
    color: white;
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
    text-align: center;
  }

  .loading-text {
    color: white;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 1.5rem;
    }

    .shape-1 {
      top: 5%;
      left: 5%;
      width: 40px;
      height: 40px;
    }

    .shape-2 {
      bottom: 10%;
      right: 10%;
      width: 30px;
      height: 30px;
    }

    .shape-3 {
      top: 20%;
      right: 15%;
      width: 35px;
      height: 35px;
    }

    .pulse-circle {
      width: 70px;
      height: 70px;
    }
  }
`;

export default LoadingScreen;
