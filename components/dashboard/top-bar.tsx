import { FingerprintIcon } from 'lucide-react';
import Link from 'next/link';
import SideBar from './side-bar';

export default function TopBar() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-900 lg:hidden">
      <div className="flex items-center justify-between">
        <Link
          href="#"
          className="flex items-center gap-2 font-bold"
          prefetch={false}
        >
          <FingerprintIcon className="h-6 w-6" />
          <span className="text-lg">RBAC UI</span>
        </Link>
        <SideBar />
      </div>
    </header>
  );
}
