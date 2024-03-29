// import { Poppins } from '@next/font/google';

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['600', '700']
// })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}
