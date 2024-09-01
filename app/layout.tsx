
import Link from 'next/link';

function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link> |
            <Link href="/dashboard">Dashboard</Link>
          </nav>
        </header>
        <main>{children}</main>
        {/* <footer>Footer content here</footer> */}
      </body>
    </html>
  );
}

export default RootLayout;
