import Header from "@/app/components/layout/Header";
import Sidebar from "@/app/components/layout/Sidebar"; // Fixed the path here!

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar remains fixed to the left */}
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Header remains at the top */}
        <Header />

        {/* Added 'p-10' for significant breathing room or 'p-8' for standard spacing */}
        <main className="flex-1 overflow-y-auto bg-gray-50/30 p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
