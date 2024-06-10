import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
// FRAMER MOTION ANIMATION
import TransitionRoute from "../../global-components/route-transition/TransitionRoute";
// IMPORT CDN SWIPER LIBRARY: https://swiperjs.com/
import "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js";
// IMPORT DATA JSON
import reviewData from "/src/data/reviews-data/review.json";
// IMPORT RESOURCES
import ScrollArrowDown from "/public/assets/svg/reviews-svg/menu-down-fill-svgrepo-com.svg";
import QuotesIcon from "/public/assets/svg/reviews-svg/quotes-pixel.svg";
// GOBACK HOME BUTTOTN COMPONENT
import GoBack from "../../global-components/go-back-button/GoBack";

const Review = () => {
  return (
    <ReviewsBox>
      <div className="main_reviews_box">
        <GoBack />
        <swiper-container
          className="mySwiper"
          slides-per-view="3"
          space-between="100"
          speed="5000"
          loop="true"
          autoplay-delay="4000"
          pagination="enabled"
          breakpoints={JSON.stringify({
            1: {
              slidesPerView: 1,
              pagination: true,
            },

            900: {
              slidesPerView: 2,
              pagination: false,
            },

            1510: {
              slidesPerView: 3,
              pagination: false,
            },

            2000: {
              slidesPerView: 4,
              pagination: false,
            },
          })}
        >
          {reviewData.map((review, index) => (
            <swiper-slide key={index}>
              <div className="head_card">
                <div className="picture_box">
                  <img src={review.iconProfile} alt="profile-image" />
                </div>
                <div className="title_box">
                  <h3>{review.name}</h3>
                  <h4>{review.profesion}</h4>
                </div>
              </div>
              <div className="main_testimonial_box">
                <ReactSVG className="quotes_icon" src={QuotesIcon} />
                <div className="testimonial_box">
                  <p>{review.testimonial}</p>
                </div>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </ReviewsBox>
  );
};

export default TransitionRoute(Review);

//? <-- COMPONENT STYLES --> //
const ReviewsBox = styled.section`
  .main_reviews_box {
    height: 100dvh;
    width: 100dvw;
    opacity: 0;
    animation: var(--animation-text-in) 0.5s alternate 1.1s forwards;
    display: grid;
    place-content: center;

    swiper-container {
      padding: 2rem;

      &,
      .picture_box img {
        width: 100%;
      }

      /* custom properties swiper pagination */
      --swiper-pagination-color: var(--color-secondary);
      --swiper-pagination-bullet-inactive-color: var(--color-shade-primary-2);
      --swiper-pagination-bullet-inactive-opacity: 0.3;
      --swiper-pagination-bullet-horizontal-gap: 0.3rem;
      --swiper-pagination-bullet-border-radius: none;

      swiper-slide {
        height: 35rem;
        width: 40rem;
        padding: 3rem 4rem;
        gap: 2rem;
        justify-content: space-between;

        background: var(--color-primary);
        box-shadow: inset 0 5px 0px rgba(255, 255, 255, 0.2),
          inset 5px 0px 0px rgba(255, 255, 255, 0.1),
          inset 0 -5px 0px rgba(0, 0, 0, 0.2),
          inset -5px 0px 0px rgba(0, 0, 0, 0.1),
          5px 0px 0px var(--color-shade-primary-2),
          -5px 0px 0px var(--color-shade-primary-2);

        &,
        .head_card {
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        h4,
        p {
          color: var(--color-white);
        }

        .head_card {
          gap: 1.5rem;

          .picture_box {
            height: clamp(5.5rem, 6vw, 8rem);
            width: clamp(5.5rem, 6vw, 8rem);

            box-shadow: 5px 0px 0px var(--color-shade-primary-2),
              -5px 0px 0px var(--color-shade-primary-2),
              0px 5px 0px var(--color-shade-primary-2),
              0px -5px 0px var(--color-shade-primary-2);

            img {
              height: 100%;
              object-fit: cover;
            }
          }

          .title_box {
            text-align: center;

            h3 {
              word-spacing: -0.2rem;
              font-size: clamp(1.5rem, 1.8vw, 3rem);
              color: var(--color-secondary);
              margin-bottom: 0.2rem;
            }

            h4 {
              font-size: clamp(0.85rem, 1vw, 1.7rem);
              line-height: 1.5rem;
              letter-spacing: 0.05rem;
              word-spacing: -0.5rem;
            }
          }
        }

        .main_testimonial_box {
          height: 100%;
          padding: 2rem 1.5rem 2rem 4rem;
          position: relative;
          text-align: left;

          &,
          .testimonial_box {
            overflow: auto;
          }

          background: var(--color-shade-primary-2);
          box-shadow: 5px 0px 0px var(--color-shade-primary-2),
            -5px 0px 0px var(--color-shade-primary-2),
            0px 5px 0px var(--color-shade-primary-2),
            0px -5px 0px var(--color-shade-primary-2);

          .quotes_icon {
            width: clamp(2rem, 2vw, 2.7rem);
            left: 2.3%;
            top: 0;
            position: absolute;
            opacity: 0.6;
            color: var(--color-primary);
          }

          /* Custom window scrollbar */
          ::-webkit-scrollbar {
            width: clamp(1.2rem, 1.3vw, 1.8rem);
          }

          /* Down */
          ::-webkit-scrollbar-button:single-button:vertical:increment {
            background: url(${ScrollArrowDown}) center/cover no-repeat;
          }

          .testimonial_box {
            height: 100%;

            p {
              font-size: clamp(1.4rem, 1.5vw, 2rem);
              padding-right: 0.5rem;
            }
          }
        }
      }
    }

    //* <-- RESPONSIVE DESING --> //
    //? devices screen <= 900px //
    @media (width <= 900px) {
      swiper-container {
        margin: 0;
        padding: 1rem;

        swiper-slide {
          margin: 0;

          .main_testimonial_box {
            padding: 2rem 1rem 1.5rem 3.2rem;

            .quotes_icon {
              left: 1%;
            }
          }
        }
      }
    }
  }
`;
