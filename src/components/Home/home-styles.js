// En home-styles.js
import styled from "styled-components";

export const HomeSection = styled.section`
        height: 75rem;
        @media only screen and (max-width: 680px) {
        height: 90rem;
      }

        & .input {
        width: 100%;
        height: 40px;
        line-height: 28px;
        padding: 0 1rem;
        padding-left: 2.5rem;
        border: 2px solid transparent;
        outline: none;
        background-color: #f8f9fa;
        color: #0d0c22;
        transition: .3s ease;
        }

        & .input::placeholder {
        color: #0e0e52;
        }

        & .input:focus, input:hover {
        outline: none;
        border-color: #70e000;
        background-color: #fff;
        box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
        }

        & .icon {
        position: absolute;
        left: 1rem;
        fill: #0e0e52;
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
            border: 1px solid #090909;
            padding: 0.8rem 2.1rem;
            background-color: #090909;
            background-size: 200%;
            background-position: 200%;
            background-repeat: no-repeat;
            transition: 0.3s ease-in-out;
            transition-property: background-position, border, color;
            position: relative;
            z-index: 0;
            }

            & .primary-button:hover {
            border: 1px solid #70e000;
            color: white;
            background-position: 40%;
            }

            & .primary-button:before {
            content: "";
            position: absolute;
            background-color: #0e0e52;
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

            .modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
`
export const HomeContainerUno = styled.div`
           height: 30rem;
           width: 100%;
           display: flex;
           justify-content: space-around;
           align-self: center;
           background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1016%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(9%2c 9%2c 9%2c 1)'%3e%3c/rect%3e%3cuse xlink:href='%23SvgjsSymbol1023' x='0' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1023' x='720' y='0'%3e%3c/use%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1016'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpath d='M-1 0 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0z' id='SvgjsPath1018'%3e%3c/path%3e%3cpath d='M-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' id='SvgjsPath1020'%3e%3c/path%3e%3cpath d='M-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z' id='SvgjsPath1017'%3e%3c/path%3e%3cpath d='M2 -2 L-2 2z' id='SvgjsPath1021'%3e%3c/path%3e%3cpath d='M6 -6 L-6 6z' id='SvgjsPath1019'%3e%3c/path%3e%3cpath d='M30 -30 L-30 30z' id='SvgjsPath1022'%3e%3c/path%3e%3c/defs%3e%3csymbol id='SvgjsSymbol1023'%3e%3cuse xlink:href='%23SvgjsPath1017' x='30' y='30' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='30' y='90' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='30' y='150' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='30' y='210' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='30' y='270' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='30' y='330' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='30' y='390' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='30' y='450' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='30' y='510' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='30' y='570' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='90' y='30' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='90' y='90' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='90' y='150' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='90' y='210' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='90' y='270' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='90' y='330' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='90' y='390' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='90' y='450' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='90' y='510' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='90' y='570' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='150' y='30' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='150' y='90' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='150' y='150' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='150' y='210' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='150' y='270' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='150' y='330' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='150' y='390' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='150' y='450' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='150' y='510' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='150' y='570' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='210' y='30' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1022' x='210' y='90' stroke='rgba(136%2c 226%2c 59%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='210' y='150' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='210' y='210' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='210' y='270' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='210' y='330' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='210' y='390' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='210' y='450' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='210' y='510' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='210' y='570' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1022' x='270' y='30' stroke='rgba(136%2c 226%2c 59%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='270' y='90' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='270' y='150' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='270' y='210' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='270' y='270' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='270' y='330' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='270' y='390' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='270' y='450' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='270' y='510' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='270' y='570' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='330' y='30' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='330' y='90' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='330' y='150' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='330' y='210' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='330' y='270' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='330' y='330' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1022' x='330' y='390' stroke='rgba(136%2c 226%2c 59%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='330' y='450' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1022' x='330' y='510' stroke='rgba(136%2c 226%2c 59%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='330' y='570' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='390' y='30' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='390' y='90' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1022' x='390' y='150' stroke='rgba(136%2c 226%2c 59%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='390' y='210' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='390' y='270' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='390' y='330' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='390' y='390' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='390' y='450' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='390' y='510' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='390' y='570' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='450' y='30' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1022' x='450' y='90' stroke='rgba(136%2c 226%2c 59%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='450' y='150' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='450' y='210' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='450' y='270' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='450' y='330' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='450' y='390' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='450' y='450' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='450' y='510' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='450' y='570' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='510' y='30' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='510' y='90' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='510' y='150' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='510' y='210' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='510' y='270' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='510' y='330' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='510' y='390' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='510' y='450' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='510' y='510' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='510' y='570' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='570' y='30' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='570' y='90' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='570' y='150' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='570' y='210' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='570' y='270' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='570' y='330' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='570' y='390' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='570' y='450' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='570' y='510' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='570' y='570' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='630' y='30' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='630' y='90' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='630' y='150' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1022' x='630' y='210' stroke='rgba(136%2c 226%2c 59%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='630' y='270' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='630' y='330' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='630' y='390' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='630' y='450' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='630' y='510' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='630' y='570' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='690' y='30' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='690' y='90' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='690' y='150' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='690' y='210' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='690' y='270' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='690' y='330' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='690' y='390' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='690' y='450' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='690' y='510' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='690' y='570' stroke='rgba(136%2c 226%2c 59%2c 1)'%3e%3c/use%3e%3c/symbol%3e%3c/svg%3e");
           background-position: center;
           background-attachment: fixed;
           padding: 1rem;
           @media only screen and (max-width: 680px) {
            height: 50rem;
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
             filter: drop-shadow(5px 5px 5px  rgba(136, 226, 59, 0.65) );
             z-index: 0;
                 @media only screen and (max-width: 680px) {
                height: 15rem;
                flex-direction: column;
      }
             

`
export const ImgDer = styled.img`
            height: 25rem;
            width: 25rem;
           
            z-index: 0;
                @media only screen and (max-width: 680px) {
            height: 20rem;
            width: 20rem;
            flex-direction: column;
      }

`
export const HomeContainerDos = styled.div`
        height: 40rem;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        gap: 1rem;
        padding: 3rem;
        @media only screen and (max-width: 680px) {
            height: 40rem;
            flex-direction: column;
      }

      .character-card {
    background-color: #0E1822;
    border-radius: 2px;
    box-shadow:  -2px -2px 6px #0e0e52,
             2px 2px 6px #0e0e52;
    padding: 16px;
    margin: 8px;
    text-align: center;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.03);
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 2px;
      margin-bottom: 8px;
    }

    p {
    text-transform: uppercase;
    font-family: "Barlow Condensed", sans-serif;
      font-size: 16px;
      color: #f8f9fa;

    }
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
        margin-top: 3rem;
`
export const TextHome = styled.p`
            font-size: 1.2rem;
        color: #f8f9fa;
        background-color: #0e0e52;
        font-family: "Barlow Condensed", sans-serif;
        padding: 1rem;
        width: 100%;
        text-align: center;
        @media only screen and (max-width: 480px) {
           font-size: 1.2rem;
           width: 100%;
      }
`
