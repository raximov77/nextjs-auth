import Header from "@/components/Header";
import RegisterForm from "./register-form";

export default async function RegisterPage() {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 1000);
  // });
  return (
    <>
      <Header />
      <section className="py-7 bg-ct-blue-600 min-h-screen grid place-items-center">
        <div className="w-full">
          <p className="text-4xl xl:text-5xl text-center font-[600] text-ct-yellow-600 mb-5">
          Sign Up To Get Started!
          </p>
          <RegisterForm />
        </div>
      </section>
    </>
  );
}
