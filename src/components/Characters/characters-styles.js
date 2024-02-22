import styled from "styled-components";

export const CharacterSection = styled.section`
    height: 100rem;
    width: 100%;
    display: grid;
    text-align: center;
    align-items: center;
    justify-content: center;

    .character {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, minmax(250px, 1fr));
        justify-content: center;
        gap: 2rem;
    }

    .search-container {
        height: 40rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & .primary-button {
            font-family: 'Ropa Sans', sans-serif;
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
            z-index: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
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


/* Agregar media queries para hacerlo responsivo */
@media screen and (max-width: 1200px) {
        .character {
            grid-template-columns: repeat(3, minmax(200px, 1fr));
        }
    }

    @media screen and (max-width: 768px) {
        .character {
            grid-template-columns: repeat(2, minmax(150px, 1fr));
        }
    }

    @media screen and (max-width: 680px) {
        .character {
            grid-template-columns: 1fr;
        }
    }
`;

export const ContainerCharacter = styled.div`
    height: 80rem;
    flex-direction: column;
`;

export const ContainerButtonRefresh = styled.div`
    height: 10rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;