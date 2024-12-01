import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { GlobeIcon, FingerprintIcon } from 'lucide-react';
import TopBar from './top-bar';
import Nav from './nav';

export default function Dashboard() {
  return (
    <div className="flex h-screen w-full">
      <div className="hidden lg:block lg:w-64 lg:shrink-0 lg:border-r lg:bg-gray-100 dark:lg:bg-gray-800">
        <div className="flex h-full flex-col justify-between py-6 px-4">
          <div className="space-y-6">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold"
              prefetch={false}
            >
              <FingerprintIcon className="h-6 w-6" />
              <span className="text-lg">RBAC UI</span>
            </Link>
            <Nav />
          </div>
          <div className="space-y-4">
            <Button variant="outline" size="sm" className="w-full">
              Upgrade to Pro
            </Button>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <GlobeIcon className="h-5 w-5" />
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <TopBar />
        <main className="p-4 lg:p-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Welcome to your dashboard. You can oversee your users, roles, and
            permissions here.
          </p>
          <div className="mt-8">
            <h2>Here will render the children</h2>
          </div>
        </main>
      </div>
    </div>
  );
}
