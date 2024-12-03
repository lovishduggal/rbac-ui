import { Button } from '../ui/button';
import { MenuIcon } from 'lucide-react';
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetDescription,
  SheetTitle,
  SheetHeader,
} from '../ui/sheet';
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
        <SheetHeader className="sr-only">
          <SheetTitle>RBAC UI</SheetTitle>
          <SheetDescription>Side navigation</SheetDescription>
        </SheetHeader>
        <div className="flex h-full flex-col justify-between py-6 px-4">
          <div className="space-y-6">
            <nav className="space-y-1">
              <Nav />
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
