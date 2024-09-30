export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-bg h-screen w-full flex justify-center items-center">
      {children}
    </div>
  );
}
