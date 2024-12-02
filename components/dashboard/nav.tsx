import { KeyIcon, ShieldIcon } from 'lucide-react';
import { UsersIcon } from 'lucide-react';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="space-y-1">
      <Link
        href="/users"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium"
        prefetch={false}
      >
        <UsersIcon className="h-5 w-5" />
        Users
      </Link>
      <Link
        href="/roles"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium"
        prefetch={false}
      >
        <ShieldIcon className="h-5 w-5" />
        Roles
      </Link>
      <Link
        href="/permissions"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium"
        prefetch={false}
      >
        <KeyIcon className="h-5 w-5" />
        Permissions
      </Link>
    </nav>
  );
}
