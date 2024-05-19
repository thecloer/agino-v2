export default function Header() {
  return (
    <header class="bg-indigo-400 shadow-sm">
      <div class="h-full flex justify-between items-center text-white container mx-auto">
        <a href="/" class="text-3xl font-bold tracking-wide p-4">
          Agino
        </a>

        <div class="font-semibold">
          <a
            href="/"
            class="p-4 hover:text-indigo-700 transition-colors duration-200"
          >
            통계
          </a>
          <a
            href="/record"
            class="p-4 hover:text-indigo-700 transition-colors duration-200"
          >
            기록
          </a>
        </div>
      </div>
    </header>
  );
}
