import Circles from '@/user-components/circles'
import Typer from '@/user-components/typer'
import React from 'react'

type Props = {}

export default function Hero({}: Props) {
    
return (
    <div>
        <Circles/>
        <Typer/>
    </div>
  )
}