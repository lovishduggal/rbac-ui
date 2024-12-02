import { FingerprintIcon } from 'lucide-react';
import Link from 'next/link';
import SideBar from './side-bar';
import { ModeToggle } from '../mode-toggle/mode-toggle';

export default function TopBar() {
  return (
    <header className="sticky top-0 z-10 border-b px-4 py-3  lg:hidden">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold"
          prefetch={false}
        >
          <FingerprintIcon className="h-6 w-6" />
          <span className="text-lg">RBAC UI</span>
        </Link>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <SideBar />
        </div>
      </div>
    </header>
  );
}
