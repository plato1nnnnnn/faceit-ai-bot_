import './globals.css';

export const metadata = {
  title: 'Faceit AI Bot',
  description: 'AI-ассистент для Faceit и CS2',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
