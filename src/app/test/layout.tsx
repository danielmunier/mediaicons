import authConfig from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authConfig);
  console.log(" Server side: " + session);
  if (!session) {
    redirect("/auth");
  }

  return <>{children}</>;
}
