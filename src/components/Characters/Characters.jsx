import React from 'react'
import { CharacterSection } from './characters-styles'


export const Characters = () => {
    return (
        <>
            <CharacterSection>
                <section id='Character'>
                    <div className="character">
                        <div className="search-container">
                            <br />
                            <div class="button-borders">
                                <button class="primary-button"> Refresh
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-refresh" width="20" height="20" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                                        <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </section>
            </CharacterSection>
        </>
    )
}


export default Characters;