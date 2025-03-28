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
      <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GT-MBH8FXW4');`
          }}
        />

      <script
        dangerouslySetInnerHTML={{
          __html:  `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '972063055038946');
              fbq('track', 'PageView');`
      }}
      />
      </head>
      <body>
        <AuthContextProvider>
        <Navbar/>
        {children}
        <Footer/>
        <GoogleAnalytics gaId="G-G37BHRS780" />

        </AuthContextProvider>
      </body>
    </html>
  );
}
