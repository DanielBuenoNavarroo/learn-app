const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const loading = true;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return children;
};

export default layout;
