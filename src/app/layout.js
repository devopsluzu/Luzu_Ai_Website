import '@styles/globals.css';
import { Navbar } from '@components/navbar/Navbar';
import { Footer } from '@components/footer/Footer';
import { AuthContextProvider } from '@context/AuthContext';

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
      <body>
        <AuthContextProvider>
        <Navbar/>
        {children}
        <Footer/>
        </AuthContextProvider>
      </body>
    </html>
  );
}
