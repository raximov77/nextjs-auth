import Header from "@/components/Header";
import { apiGetAuthUser } from "@/lib/api-requests";
import { cookies } from "next/headers";
import { AuthPageInvisible } from "@/lib/protect-page";

export default async function ProfilePage() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  const user = await apiGetAuthUser(token?.value);

  return (
    <>
      <Header />
      <section className="bg-ct-blue-600  min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <div>
            <p className="mb-3 text-5xl text-center font-semibold">
              The App Profile Page
            </p>
            <div className="mt-8">
              <p className="mb-3 text-[20px]"><b>Id:</b> 1</p>
              <p className="mb-3 text-[20px]"><b>UserName:</b> {user.name}</p>
              <p className="mb-3 text-[20px]"><b>Email:</b> {user.email}</p>
              {/* <p className="mb-3">Role: {user.role}</p>
              <p className="mb-3">Verified: {String(user.verified)}</p> */}
            </div>
          </div>
        </div>
      </section>
      <AuthPageInvisible />
    </>
  );
}
