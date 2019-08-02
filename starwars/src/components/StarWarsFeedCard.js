import React from 'react'
import {CharacterName} from './StarWarsFeedCreatorStyling'

export default function CharacterCard(characterInfo){
    return(
        <CharacterName>
            {characterInfo.name}
        </CharacterName>
    )
}