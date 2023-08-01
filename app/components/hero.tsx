import Circles from '@/user-components/circles'
import Typer from '@/user-components/typer'
import React from 'react'

type Props = {}

export default function Hero({}: Props) {
    
return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <Circles/>
        <Typer/>
    </div>
  )
}