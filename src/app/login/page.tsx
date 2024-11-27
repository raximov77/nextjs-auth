import Header from "@/components/Header";
import LoginForm from "./login-form";

export default async function LoginPage() {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 1000000);
  // });
  return (
    <>
      <Header />
      <section className="bg-ct-blue-600 min-h-screen grid place-items-center">
        <div className="w-full">
          <h2 className="text-4xl lg:text-6xl text-center font-[600] text-ct-yellow-600 mb-8">
          Login to have access
          </h2>
          <LoginForm />
        </div>
      </section>
    </>
  );
}
