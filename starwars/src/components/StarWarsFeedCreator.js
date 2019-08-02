import React from 'react'
import CharacterCard from './StarWarsFeedCard'
import {CharacterFeedAll} from './StarWarsFeedCreatorStyling'

export default function CharacterCreator(props){

    console.log(props)
    return(
        <CharacterFeedAll>
                {props.charInfo.map(info => {
                    return <CharacterCard 
                    charInfo={info}
                    key={info}
                    />    
                })
            }
        </CharacterFeedAll>
    )
}