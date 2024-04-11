import EnterBoton from "@/src/componets/createAccount/enterBoton";
import Image from "next/image";
import OrLinea from "@/src/componets/logIn/orLinea";
import { enterLoginContinue } from "@/src/constants/enterLoginContinue";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function LogInEmail(props) {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();

  async function onSubmit(dataLogIn) {
    // const response = await fetch(
    //  "https://nextdevrep-2044e667dfb2.herokuapp.com/users/login",{
    const response = await fetch("http://localhost:3001/users/login", {
      method: "Post",
      body: JSON.stringify({
        email: dataLogIn.email,
        password: dataLogIn.password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).catch((error) => {
      console.log("Error", error);
    });

    const json = await response.json();
    if (json.token) {
      localStorage.setItem("token", json.token);

      console.log("Login Exitoso");
      router.push("/userIndex");
      return;
    }
    console.log("Usuario o contraseña inválidos");
    setError("root", { message: "Usuario o contraseña inválidos" });
  }

  return (
    <main className=" h-full bg-[rgb(255_255_255)] w-full min-h-screen min-w-screen align-middle justify-center  ">
      <div
        className="flex h-full w-full min-h-[530px] min-w-screen   items-center  align-middle flex-col  rounded-md pt-10
    "
      >
        <div className="flex w-[530px] flex-col items-center rounded-md pb-[20px]">
          <Link href="/">
            <Image
              className="rounded-md pb-4"
              src={
                "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
              }
              alt={"Dev"}
              width={60}
              height={48}
            />
          </Link>
          <p className="text-[rgb(23_23_23)] text-[1.875rem] font-bold">
            Join the DEV Community
          </p>
          <p>DEV Community is a community of 1,394,581 amazing developers</p>
        </div>
        <div className="w-[580px] h-[50px] p-[12]">
          {enterLoginContinue.map((item, index) => {
            return (
              <div
                key={`enterLoginDivBoton-${index}`}
                className="w-min-[40px] min-w-[301.368px]  h-min-[40px] p-1.5 rounded-md flex items-center text-justify align-middle text-sm font-semibold "
                id="redes"
              >
                <EnterBoton
                  key={`enterLoginBoton-${index}`}
                  link={item.link}
                  contenido={item.contenido}
                  alt={item.alt}
                  imagen={item.imagen}
                  className={""}
                />
              </div>
            );
          })}
          <div className="">
            <OrLinea />
          </div>
          <form name="form" className="" onSubmit={handleSubmit(onSubmit)}>
            <div
              className=" flex-col h-min-[40px]  rounded-md flex  text-justify align-middle text-sm font-semibold  "
              id="redes"
            >
              <p className="flex w-[100px] h-[20px] text-center pt-4 pb-4 text-base">
                Email{" "}
              </p>
              <br />
              <input
                required
                name="email"
                type="text"
                className=" flex flex-row text-sm font-light justify-center items-center align-middle w-[580px] h-[38px] border-2 rounded-lg p-1 hover:border-[rgb(47_58_178)] outline-none  "
                {...register("email", {
                  minLength: {
                    value: 3,
                    message: "Email o password inválido",
                  },
                })}
              />

              <p className=" flex w-[100px] h-[20px] text-center pt-4 pb-4 text-base  ">
                Password{" "}
              </p>
              <br />
              <input
                required
                name="password"
                type="password"
                className=" flex flex-row text-sm font-light justify-center items-center align-middle w-[580px] h-[38px] border-2 rounded-lg p-1 hover:border-[rgb(47_58_178)] outline-none "
                {...register("password", {
                  minLength: {
                    value: 3,
                    message: "Email o password inválido",
                  },
                })}
              />
              <div id="errorPasswordEmail" className="p-1">
                {(errors.password || errors.email) && (
                  <p
                    className=" text-base flex justify-center items-center "
                    id="letra"
                  >
                    {"⚠ "} {errors.password.message}
                  </p>
                )}
              </div>
              <br />
              {errors.root && (
                <p
                  className=" text-base flex justify-center items-center "
                  id="letra"
                >
                  {"⚠ "} {errors.root.message}
                </p>
              )}
              <button className="hover:bg-[rgb(47_58_178)] bg-[rgb(59_73_223)] p-3 text-center text-base text-[rgb(255_255_255)] rounded-lg  ">
                Log in
              </button>

              <br />
              <div className="flex  justify-center flex-col items-center rounded-md pb-[20px] font-light italic text-sm ">
                <p>
                  {" "}
                  By signing up, you are agreeing to our{" "}
                  <span className="text-[rgb(59_73_223)] font-normal">
                    <a href="https://dev.to/privacy">
                      {" "}
                      privacy policy, terms of use
                    </a>
                  </span>
                </p>
                <p>
                  {" "}
                  and
                  <span className="text-[rgb(59_73_223)] font-normal">
                    <a href="https://dev.to/code-of-conduct">
                      code of conduct.
                    </a>
                  </span>
                </p>
                <div className="w-min-[40px]  h-min-[40px] flex justify-center items-center text-justify align-middle text-base font-normal min-w-[580px] max-h-[580px] text-[rgb(23_23_23)] not-italic border-t-2 p-3">
                  New to DEV Community?{" "}
                  <span className="text-[rgb(59_73_223)] font-normal">
                    {" "}
                    <Link href="/logIn"> Create account.</Link>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
export async function getStaticProps(ctx) {
  return {
    props: {},
  };
}
