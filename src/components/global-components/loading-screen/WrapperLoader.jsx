import styled from "styled-components";

const Wrapper = styled.div`
  height: 100dvh;
  width: 100dvw;
  position: fixed;
  flex-direction: column;
  background: var(--texture-wall) center / cover;
  gap: 1rem;

  &,
  div,
  .text_box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    opacity: 0.95;
    background: var(--color-primary);
  }

  .text_box {
    flex-direction: column;
    gap: 0.5rem;
    width: 18.7rem;

    h2,
    span {
      font-family: var(--font-subtitle-3);
    }

    h2,
    h3 {
      text-transform: uppercase;
      color: var(--color-white);
    }

    h2 {
      font-size: clamp(2rem, 2.5vw, 2.5rem);
      word-spacing: -1rem;
    }

    span {
      color: var(--color-secondary);
    }

    h3 {
      font-family: var(--font-subtitle);
      font-size: clamp(1rem, 1.5vw, 1.5rem);
      letter-spacing: 0.9rem;
      padding-left: 1rem;
    }
  }

  .dekstop-title,
  .mobile-title {
    letter-spacing: 0.1rem;
    font-size: clamp(0.55rem, 0.8vw, 0.8rem);
    color: var(--color-white);
    text-transform: uppercase;
    animation: brinkStart 0.4s infinite;

    @keyframes brinkStart {
      0% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      100% {
        opacity: 0;
      }
    }
  }

  .mobile-title {
    display: none;
  }

  //* <-- RESPONSIVE DESING --> //

  //? devices screen <= 1024px //
  @media (max-width: 1024px) {
    .mobile-title {
      margin-top: 0.3rem;
      display: inline-block;
    }

    .dekstop-title {
      display: none;
    }
  }
`;

const WrapperLoader = () => {
  return (
    <Wrapper>
      <div className="text_box">
        <h2>
          juan <span>quez</span>
        </h2>
        <h3>developer</h3>
      </div>
        <>
          <h3 className="dekstop-title">pulsa una tecla para iniciar</h3>
          <h3 className="mobile-title">Toca la pantalla para iniciar</h3>
        </>
    </Wrapper>
  );
};

export default WrapperLoader;
