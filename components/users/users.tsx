'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '../ui/input';
import { SearchIcon } from 'lucide-react';
import SortingDropdownMenu from './sorting-dropdown-menu';
import UsersTable from './users-table';
import UserDialog from './user-dialog';
import { Button } from '../ui/button';
import { useState } from 'react';
import CustomPagination from '../ui/custom-pagination';

export default function Users() {
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortBy, setSortBy] = useState('username');
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [totalPages, setTotalPages] = useState(1); // State for total pages
  const itemsPerPage = 1; // Number of items per page

  // Calculate the current users to display based on pagination
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  // const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

  // const totalPages = Math.ceil(sortedUsers.length / itemsPerPage); // Calculate total pages
  function handleTotalPages(totalUsers: number) {
    const newTotalPages = Math.ceil(totalUsers / itemsPerPage);
    console.log('totalUsers', totalUsers, newTotalPages);
    setTotalPages(newTotalPages);

    // Check if the current page exceeds the total pages
    if (currentPage > newTotalPages) {
      setCurrentPage(newTotalPages); // Move to the last valid page
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Users Management</CardTitle>
            <CardDescription>Manage your users here.</CardDescription>
          </div>
          <UserDialog
            title="Add User"
            description="Enter user details"
            btnText="Add"
          >
            <Button>Add User</Button>
          </UserDialog>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4 space-x-8">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              value={search} // Bind search input to state
              onChange={(e) => setSearch(e.target.value)} // Update search state
              className="pl-8 w-full"
            />
          </div>
          <SortingDropdownMenu
            onSortChange={setSortBy}
            onOrderChange={setSortOrder}
            currentSortBy={sortBy}
            currentOrder={sortOrder}
          />
        </div>
        <UsersTable
          search={search}
          sortBy={sortBy}
          sortOrder={sortOrder}
          indexOfLastUser={indexOfLastUser}
          indexOfFirstUser={indexOfFirstUser}
          handleTotalPages={handleTotalPages}
        />
      </CardContent>
      <CardFooter>
        {/* <Pagination>
          <PaginationContent className="w-full flex justify-between items-center">
            <PaginationItem>
              <PaginationPrevious
              className={`cursor-pointer ${
                currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
              />
            </PaginationItem>
            <div className="text-sm">
              Showing {Math.min((currentPage - 1) * PER_PAGE + 1, totalCount)}{' '}
              to {Math.min(currentPage * PER_PAGE, totalCount)} of {totalCount}{' '}
              items
            </div>
            <PaginationItem>
              <PaginationNext
              className={`cursor-pointer ${
                isLoading ||
                usersVideosData?.data?.length === 0 ||
                currentPage === totalPages
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination> */}
        <CustomPagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </CardFooter>
    </Card>
  );
}
