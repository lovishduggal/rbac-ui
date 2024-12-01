import { KeyIcon, ShieldIcon } from 'lucide-react';
import { UsersIcon } from 'lucide-react';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="space-y-1">
      <Link
        href="/users"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
        prefetch={false}
      >
        <UsersIcon className="h-5 w-5" />
        Users
      </Link>
      <Link
        href="/roles"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
        prefetch={false}
      >
        <ShieldIcon className="h-5 w-5" />
        Roles
      </Link>
      <Link
        href="/permissions"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
        prefetch={false}
      >
        <KeyIcon className="h-5 w-5" />
        Permissions
      </Link>
    </nav>
  );
}
