import { auth } from "@/auth";
import Header from "@/components/common/Header";
import MainSidebar from "@/components/MainSidebar";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();
  const loading = false;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen h-full w-full flex flex-col">
      <Header session={session} />
      <main className="flex-1 grid grid-cols-[180px_auto]">
        <MainSidebar />
        {children}
      </main>
    </div>
  );
};

export default layout;
