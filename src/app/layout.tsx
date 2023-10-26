import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'By Shefeena E S',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen" >
        <Providers>
        <Navbar/>
        <div className="flex-1 container pt-12 bg-white">{children}</div>
        <footer className="footer footer-center p-4 text-base-content">
          <aside>
            <p>Copyright © 2023 - All rights reserved by Shefeena E S</p>
          </aside>
        </footer>
        </Providers>
        
      </body>
    </html>
  )
}
