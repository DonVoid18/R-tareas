import React from 'react'

export const themesAplication = ({ activateTheme }) => {
  return (
    <>
        {activateTheme}
    </>
  )
}

const theme1 = () =>{
    return(
        <h1>
            Este es el tema 1
        </h1>
    );
}