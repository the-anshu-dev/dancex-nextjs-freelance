export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mx-auto   px-2">{children}</div>;
}
