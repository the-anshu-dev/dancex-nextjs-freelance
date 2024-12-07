export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-7xl mx-auto px-2">{children}</div>;
}
