'use client';
import Header from './components/header'
import AdminHeader from './components/adminHeader';
import './globals.css'
import type { Metadata } from 'next'
import { usePathname } from 'next/navigation';

export const metadata: Metadata = {
  title: 'ultimate profile website',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = usePathname();
  const isAdmin = router == '/admin'
  return (
    <html lang="en" className='snap-y snap-mandatory scroll-smooth overflow-y-scroll overflow-x-hidden'>
      <body className={`text-gray-300 ${isAdmin ? 'bg-[#E4E4E4]' : 'bg-[rgb(36,36,36)]'}`}>
        {
          isAdmin ? 
          <AdminHeader/>
          :
          <Header/>
        }
        {children}
      </body>
    </html>
  )
}
