export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-bg h-full w-full flex justify-center items-center">
      {children}
    </div>
  );
}
