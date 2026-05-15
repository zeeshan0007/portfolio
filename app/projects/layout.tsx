import Link from 'next/link';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Link href="/#projects" className="no-underline muted">
        [← back to projects]
      </Link>
      <div className="mt-6">{children}</div>
    </div>
  );
}
