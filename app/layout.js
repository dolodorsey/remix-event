import DirectEventActions from './DirectEventActions';

export const metadata = {
  title: 'REMIX | Curated Social Magnetism · Atlanta',
  description: 'Then & Now, Done Right. Premium sound, deep rhythm, future vibes. A KHG HugLife Event.',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700;800;900&family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#080808' }}>
        {children}
        <DirectEventActions />
      </body>
    </html>
  )
}
