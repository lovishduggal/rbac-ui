import { ArrowUpDownIcon } from 'lucide-react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

interface SortingDropdownMenuProps {
  onSortChange: (field: string) => void;
  onOrderChange: (order: string) => void;
  currentSortBy: string;
  currentOrder: string;
}

export default function SortingDropdownMenu({
  onSortChange,
  onOrderChange,
  currentSortBy,
  currentOrder,
}: SortingDropdownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="shrink-0">
          <ArrowUpDownIcon className="w-4 h-4 mr-2" />
          Sort by
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px] " align="end">
        <DropdownMenuRadioGroup
          value={currentSortBy}
          onValueChange={(value) => {
            onSortChange(value);
          }}
        >
          <DropdownMenuRadioItem value="username">Name</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="email">Email</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="role">Role</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="status">Status</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={currentOrder}
          onValueChange={(value) => {
            onOrderChange(value);
          }}
        >
          <DropdownMenuRadioItem value="asc">Ascending</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="desc">Descending</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
