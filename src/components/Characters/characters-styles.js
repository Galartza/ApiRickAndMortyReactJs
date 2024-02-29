import styled from "styled-components";

export const CharacterSection = styled.section`
@media screen and (max-width: 1042px) {
    height: 150rem;
}

@media screen and (max-width: 712px) {
    height: 250rem;
}
    height: 100rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 2rem;


    .character {
        max-width: 1200px;
        width: 100%;
        margin: 10rem auto 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
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
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            }

            & .primary-button:hover {
            border: 1px solid #70e000;
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
            background-color: #70e000;
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





`;


export const ContainerButtonRefresh = styled.div`
    height: 10rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;