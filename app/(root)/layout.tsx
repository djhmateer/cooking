import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* 
          h-screen: sets height to 100vh (full viewport height)
          flex-col: sets flex direction to column (stacks children vertically) */}
      <div className="flex h-screen flex-col">
        <Header />

        {/* flex-1: allows this element to grow and take up remaining space
            which creates a sticky footer
            wrapper: custom class in globals.css, not a Tailwind class 
           <main className="flex-1 max-w-7xl lg:mx-auto p-5 md:px-10 w-full"> */}
        <main className="flex-1 wrapper">{children}</main>

        <Footer />
      </div>
    </>
  );
}
