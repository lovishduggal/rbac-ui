import { Button } from '../ui/button';
import { GlobeIcon, MenuIcon } from 'lucide-react';
import { SheetTrigger, SheetContent, Sheet } from '../ui/sheet';
import Nav from './nav';

export default function SideBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <div className="flex h-full flex-col justify-between py-6 px-4">
          <div className="space-y-6">
            <nav className="space-y-1">
              <Nav />
            </nav>
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
      </SheetContent>
    </Sheet>
  );
}
