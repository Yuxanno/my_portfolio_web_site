import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader-container">
        <div className="spinner"></div>
        <div className="loader">
          <p style={{ marginLeft: "-5px" }}>Saytdagi</p>
          <div className="words">
            <span className="word">buttons</span>
            <span className="word">texts</span>
            <span className="word">images</span>
            <span className="word">cards</span>
            <span className="word">buttons</span>
          </div>
          <p style={{ marginLeft: "10px" }}>yuklanyapti</p>
        </div>
        <div className="loading-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(99, 102, 241, 0.3);
    border-top: 5px solid #6366f1;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 10px;
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loader {
    color: rgb(124, 124, 124);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 25px;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 40px;
    padding: 10px 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
  }

  .loader::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(99, 102, 241, 0.2),
      transparent
    );
    animation: loading 2s infinite;
  }

  @keyframes loading {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }

  .words {
    overflow: hidden;
    position: relative;
  }

  .words::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      transparent 10%,
      rgba(15, 15, 35, 0.8) 30%,
      rgba(15, 15, 35, 0.8) 70%,
      transparent 90%
    );
    z-index: 20;
  }

  .word {
    display: block;
    height: 100%;
    padding-left: 6px;
    color: #956afa;
    animation: spin_4991 4s infinite;
  }

  @keyframes spin_4991 {
    10% {
      -webkit-transform: translateY(-102%);
      transform: translateY(-102%);
    }

    25% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }

    35% {
      -webkit-transform: translateY(-202%);
      transform: translateY(-202%);
    }

    50% {
      -webkit-transform: translateY(-200%);
      transform: translateY(-200%);
    }

    60% {
      -webkit-transform: translateY(-302%);
      transform: translateY(-302%);
    }

    75% {
      -webkit-transform: translateY(-300%);
      transform: translateY(-300%);
    }

    85% {
      -webkit-transform: translateY(-402%);
      transform: translateY(-402%);
    }

    100% {
      -webkit-transform: translateY(-400%);
      transform: translateY(-400%);
    }
  }

  .loading-dots {
    display: flex;
    gap: 5px;
  }

  .dot {
    width: 10px;
    height: 10px;
    background-color: #6366f1;
    border-radius: 50%;
    animation: bounce 1.5s infinite ease-in-out;
  }

  .dot:nth-child(1) {
    animation-delay: 0s;
  }

  .dot:nth-child(2) {
    animation-delay: 0.2s;
  }

  .dot:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes bounce {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }

  /* Add floating animation to the entire loader */
  .loader-container {
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

export default Loader;
