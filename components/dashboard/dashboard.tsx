import Link from 'next/link';
import { FingerprintIcon } from 'lucide-react';
import TopBar from './top-bar';
import Nav from './nav';
import { ModeToggle } from '../mode-toggle/mode-toggle';

export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:block lg:w-64 lg:shrink-0 lg:border-r">
        <div className="flex h-full flex-col justify-between py-6 px-4">
          <div className="space-y-6">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold px-3"
              prefetch={false}
            >
              <FingerprintIcon className="h-6 w-6" />
              <span className="text-lg ">RBAC UI</span>
            </Link>
            <Nav />
          </div>
          <div className="space-y-4 flex items-center justify-center">
            <ModeToggle />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full overflow-auto">
        <TopBar />
        <main className="p-4 lg:p-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p>
            Welcome to your dashboard. You can oversee your users, roles, and
            permissions here.
          </p>
          <div className="mt-8 w-full max-w-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
