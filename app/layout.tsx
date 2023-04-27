import "./globals.css";

export const metadata = {
  title: "Izohli lug'at",
  icons: {
    icon: { url: '/dic.png', type: 'image/png' },
    shortcut: { url: '/dic.png', type: 'image/png' }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-body">{children}</body>
    </html>
  );
}
