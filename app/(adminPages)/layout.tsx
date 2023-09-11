import React from 'react'
import { Metadata } from 'next'

type Props = {}

export const metadata: Metadata = {
    title: 'Admin Page',
    description: 'control the content of the website'
}

export default function AdminLayout({
    children,
}: {children: React.ReactNode}) {
  return (
    <div>
    <div>{children}</div>
    
    </div>
  )
}