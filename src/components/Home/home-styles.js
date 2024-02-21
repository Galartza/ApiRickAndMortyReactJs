// En home-styles.js
import styled from "styled-components";

export const HomeSection = styled.section`
        height: 55rem;
        @media only screen and (max-width: 680px) {
        height: 75rem;
      }

        & .input {
        width: 100%;
        height: 40px;
        line-height: 28px;
        padding: 0 1rem;
        padding-left: 2.5rem;
        border: 2px solid transparent;
       
        outline: none;
        background-color: #f3f3f4;
        color: #0d0c22;
        transition: .3s ease;
        }

        & .input::placeholder {
        color: #9e9ea7;
        }

        & .input:focus, input:hover {
        outline: none;
        border-color: #88e23b;
        background-color: #fff;
        box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
        }

        & .icon {
        position: absolute;
        left: 1rem;
        fill: #9e9ea7;
        width: 1rem;
        height: 1rem;
        }
        & .primary-button {
            font-family: 'Ropa Sans', sans-serif;
                /* font-family: 'Valorant', sans-serif; */
            color: white;
            cursor: pointer;
            font-size: 13px;
            font-weight: bold;
            letter-spacing: 0.05rem;
            border: 1px solid #0E1822;
            padding: 0.8rem 2.1rem;
            background-color: #0E1822;
            background-size: 200%;
            background-position: 200%;
            background-repeat: no-repeat;
            transition: 0.3s ease-in-out;
            transition-property: background-position, border, color;
            position: relative;
            z-index: 1;
            }

            & .primary-button:hover {
            border: 1px solid #88e23b;
            color: white;
            background-position: 40%;
            }

            & .primary-button:before {
            content: "";
            position: absolute;
            background-color: #0E1822;
            width: 0.2rem;
            height: 0.2rem;
            top: -1px;
            left: -1px;
            transition: background-color 0.15s ease-in-out;
            }

            & .primary-button:hover:before {
            background-color: white;
            }

            & .primary-button:hover:after {
            background-color: white;
            }

            & .primary-button:after {
            content: "";
            position: absolute;
            background-color: #88e23b;
            width: 0.3rem;
            height: 0.3rem;
            bottom: -1px;
            right: -1px;
            transition: background-color 0.15s ease-in-out;
            }

            & .button-borders {
            position: relative;
            width: fit-content;
            height: fit-content;
            }

            & .button-borders:before {
            content: "";
            position: absolute;
            width: calc(100% + 0.5em);
            height: 50%;
            left: -0.3em;
            top: -0.3em;
            border: 1px solid #0E1822;
            border-bottom: 0px;
                /* opacity: 0.3; */
            }

            & .button-borders:after {
            content: "";
            position: absolute;
            width: calc(100% + 0.5em);
            height: 50%;
            left: -0.3em;
            bottom: -0.3em;
            border: 1px solid #0E1822;
            border-top: 0px;
                /* opacity: 0.3; */
            z-index: 0;
            }

            & .shape {
            fill: #0E1822;
            }
`
export const HomeContainerUno = styled.div`
           height: 30rem;
           width: 100%;
           display: flex;
           justify-content: space-around;
           align-self: center;
           background-color: black;
           @media only screen and (max-width: 680px) {
            height: 30rem;
            padding: 2rem;
            flex-direction: column;
      }
       
`
export const ContainerIzq = styled.div `
            height: 30rem;
             width: 100%;
             display: flex;
             align-items: center;
             justify-content: center;
                 @media only screen and (max-width: 680px) {
            height: 10rem;
            flex-direction: column;
      }
`
export const ContainerDer = styled.div `
            height: 30rem;
             width: 100%;
             display: flex;
             align-items: center;
             justify-content: center;
                 @media only screen and (max-width: 680px) {
            height: 10rem;
            flex-direction: column;
      }
`
export const ImgIzq = styled.img`
             height: 25rem;
             max-width: 1200px;
             width: 100%;
                 @media only screen and (max-width: 680px) {
                height: 15rem;
                flex-direction: column;
      }
             

`
export const ImgDer = styled.img`
            height: 25rem;
            width: 25rem;
                @media only screen and (max-width: 680px) {
            height: 20rem;
            width: 20rem;
            flex-direction: column;
      }

`
export const HomeContainerDos = styled.div`
        height: 20rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        @media only screen and (max-width: 680px) {
            height: 30rem;
            flex-direction: column;
      }
`
export const SearchContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`
export const Group = styled.div`
          display: flex;
        line-height: 28px;
        align-items: center;
        position: relative;
        max-width: 190px;
`
export const TextHome = styled.p`
            font-size: 1.2rem;
        color: #a6cccc;
        font-family: "Barlow Condensed", sans-serif;
        padding: 1rem;
        width: 50%;
        text-align: center;
        @media only screen and (max-width: 480px) {
           font-size: 1.2rem;
           width: 100%;
      }
`
