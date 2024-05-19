import { PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

export default function Layout({ Component, state }: PageProps) {
  return (
    <div class="bg-indigo-300 min-h-screen grid grid-rows-[5rem_1fr]">
      <Header />
      <main className="mx-auto container pt-8 px-2">
        <Component />
      </main>
    </div>
  );
}
