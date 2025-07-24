import styled from "styled-components";

const CommingSoon = () => {
  return (
    <SoonBox>
      <section className="container">
        <h2 className="container__title">¡Se viene mi glow up!</h2>
        <p className="container__text">
          Estoy creando un revamp a mi casa. Nuevas animaciones, nueva interfaz,
          mejor ambientación. Tranqui, regresaré pronto.
        </p>
        <img
          className="container__kirby"
          src="https://cdn3.emoji.gg/emojis/15647-kirbyrides.gif"
          alt="KirbyRides"
        />
      </section>
    </SoonBox>
  );
};

export default CommingSoon;

const SoonBox = styled.section`
  height: 100dvh;
  width: 100dvw;

  &,
  .container {
    display: flex;
    justify-content: center;
  }

  .container {
    height: 100%;
    width: 60rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;

    .container__title {
      color: var(--color-secondary);
      font-size: clamp(2rem, 3vw, 3.5rem);
      -webkit-text-stroke: 0.02rem;
      -webkit-text-stroke-color: var(--color-white);
    }

    .container__text {
      color: var(--color-white);
      font-size: clamp(1.5rem, 2.2vw, 2.2rem);
    }

    .container__kirby {
      width: clamp(9rem, 12vw, 13rem);
      filter: drop-shadow(0 0 1rem var(--color-secondary));
    }
  }
`;
