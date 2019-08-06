import React from 'react'
import * as All from './StarWarsFeedCreatorStyling'

export default function CharacterCard(props){

    console.log(props)
    return(
        <All.CharacterFeedAll className='feedall'>

         <All.CharacterFeedCard className='feedcard'>
                <All.CharacterInfo>
                    
                    <All.CharacterName>Name: {props.charInfo.name}<br></br></All.CharacterName>
                    <All.OtherCharacterInfo>Birth Year: {props.charInfo.birth_year}<br></br></All.OtherCharacterInfo>
                    <All.OtherCharacterInfo>Height: {props.charInfo.height}<br></br></All.OtherCharacterInfo>
                    <All.OtherCharacterInfo>Mass: {props.charInfo.mass}<br></br></All.OtherCharacterInfo>
                    <All.OtherCharacterInfo>Eye Color: {props.charInfo.eye_color} <br></br></All.OtherCharacterInfo>
                    <All.LastInfo>Gender: {props.charInfo.gender}<br></br></All.LastInfo>

                </All.CharacterInfo>
            </All.CharacterFeedCard>

        </All.CharacterFeedAll>
    )
}