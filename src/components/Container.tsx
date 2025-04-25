export default function Container({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return <div className={`mx-auto px-2 ${className}`}>{children}</div>;
}
