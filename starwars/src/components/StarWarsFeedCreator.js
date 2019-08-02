import React from 'react'
import CharacterCard from './StarWarsFeedCard'

export default function CharacterCreator(props){

    console.log(props)
    return(
        <div>
            <CharacterCard 
                name={props.name}
                birthYear={props.birth_year}
                height={props.height}
                mass={props.mass}
                eyeColor={props.eye_color}
            />
        </div>
    )
}