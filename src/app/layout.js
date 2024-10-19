import './globals.css' // Import your global styles
import ResponsiveNavbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar at the top */}
        <ResponsiveNavbar />

        <div>
          <main
            style={{
              minHeight: '100vh',
            }}
          >
            {children}
          </main>

          {/* Footer at the bottom */}
          <Footer />
        </div>
      </body>
    </html>
  )
}
