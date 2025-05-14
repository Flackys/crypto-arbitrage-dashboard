import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold mb-4">Крипто Арбитраж Бот</h1>
      <p className="mb-8 text-center max-w-xl">Следи за арбитражными возможностями в реальном времени через нашего Telegram-бота или веб-дэшборд.</p>
      <Link href="/dashboard" className="bg-purple-600 px-6 py-3 rounded text-white hover:bg-purple-700">Перейти в дашборд</Link>
    </div>
  );
}