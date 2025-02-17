import '@styles/globals.css';
import { Navbar } from '@components/navbar/Navbar';
import { Footer } from '@components/footer/Footer';
import { AuthContextProvider } from '@context/AuthContext';
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Prfec AI",
  description: "Prfec AI is your go-to platform for AI-powered business solutions.",
    openGraph: {
      type: "website",
      url: "https://prfec.ai",
      title: "Prfec AI",
      description: "Prfec AI is your go-to platform for AI-powered business solutions.",
      images: [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/prfecai-data.firebasestorage.app/o/opengraph-image.png?alt=media&token=a26b8e43-5b48-448b-a25a-2468bfe77041",
          width: 1200,
          height: 630,
          alt: "Prfec AI - Business Solutions"
        }
      ],
    },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5C4LF8HN');`
        }}
      />
      </head>
      <body>
        <AuthContextProvider>
        <Navbar/>
        {children}
        <Footer/>
        <GoogleAnalytics gaId="G-GDMZWFDVF2" />

        </AuthContextProvider>
      </body>
    </html>
  );
}
