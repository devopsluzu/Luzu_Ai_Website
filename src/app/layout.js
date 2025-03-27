import '@styles/globals.css';
import { Navbar } from '@components/navbar/Navbar';
import { Footer } from '@components/footer/Footer';
import { AuthContextProvider } from '@context/AuthContext';
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Luzu AI",
  description: "Luzu AI is your go-to platform for AI-powered business solutions.",
    openGraph: {
      type: "website",
      url: "https://luzu.ai",
      title: "Luzu AI",
      description: "Luzu AI is your go-to platform for AI-powered business solutions.",
      // images: [
      //   {
      //     url: "https://firebasestorage.googleapis.com/v0/b/Luzuai-data.firebasestorage.app/o/opengraph-image.png?alt=media&token=a26b8e43-5b48-448b-a25a-2468bfe77041",
      //     width: 1200,
      //     height: 630,
      //     alt: "Luzu AI - Business Solutions"
      //   }
      // ],
    },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      {/* <script
        dangerouslySetInnerHTML={{
          __html: ``
        }}
      /> */}
      </head>
      <body>
        <AuthContextProvider>
        <Navbar/>
        {children}
        <Footer/>
        {/* <GoogleAnalytics gaId="" /> */}

        </AuthContextProvider>
      </body>
    </html>
  );
}
