import './globals.css'
import { Inter } from 'next/font/google'
// import Font Awesome CSS
// import "@fortawesome/fontawesome-svg-core/styles.css"; 

// import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
// config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'A portfolio site for a web developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
