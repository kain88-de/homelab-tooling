import { Metadata } from 'next'
import HomePage from './home-page'

export const metadata: Metadata = {
  title: 'Homelab Tooling',
}


export default function Page() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            HomeLab Tooling
          </h1>
          <HomePage />
        </div>
      </main>
    </>
  );
}
