import "@/app/globals.css";
import { ModeToggle } from "@/components/ModeToggle";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const loading = false;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen h-full w-full flex flex-col justify-center items-center">
      {children}
      <div className="absolute top-20 right-20">
        <ModeToggle />
      </div>
    </div>
  );
};

export default layout;
