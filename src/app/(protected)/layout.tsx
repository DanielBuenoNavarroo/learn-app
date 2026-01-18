import { auth } from "@/auth";
import Header from "@/components/common/Header";
import MainSidebar from "@/components/MainSidebar";
import MainContext from "@/components/providers/main-context";

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
    <MainContext>
      <div className="flex h-screen ">
        <MainSidebar />
        <div className="flex-1 flex-col flex overflow-hidden">
          <Header session={session} />
          <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>
      {/* <div className="min-h-screen h-full w-full flex flex-col">
        <Header session={session} />
        <main className="flex-1 grid grid-cols-[180px_auto]">
          <MainSidebar />
          {children}
        </main>
      </div> */}
    </MainContext>
  );
};

export default layout;
