import Dashboard from '@/components/dashboard/dashboard';

export default function GroupedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Dashboard>{children}</Dashboard>;
}
