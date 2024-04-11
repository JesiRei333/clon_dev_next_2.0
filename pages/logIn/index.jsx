import EnterBoton from "@/src/componets/createAccount/enterBoton";
import Image from "next/image";
import Link from "next/link";
import { enterLoginBoton } from "@/src/constants/enterLoginboton";

export default function LogIn(props) {
  return (
    <main className=" h-full w-full min-h-screen bg-[rgb(255_255_255)] min-w-screen align-middle justify-center  ">
      <div
        className="flex h-full w-full min-h-[580px] min-w-screen   items-center  align-middle flex-col  rounded-md pt-10
    "
      >
        <div className="flex w-[580px]   flex-col items-center rounded-md pb-[20px]">
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
        <div className="w-[580px] items-center align-middle h-[50px] pt-[12] flex flex-col">
          {enterLoginBoton.map((item, index) => {
            return (
              <div
                key={`enterLoginDivBoton-${index}`}
                className=" flex flex-col w-min-[40px] min-w-[301.368px] p-1.5 rounded-md items-center text-justify align-middle text-sm font-semibold "
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
        </div>
      </div>
      <div className="flex  justify-center flex-col items-center rounded-md font-light italic text-sm ">
        <p>
          {" "}
          By signing up, you are agreeing to our{" "}
          <span className="text-[rgb(59_73_223)] font-normal">
            <a href="https://dev.to/privacy"> privacy policy, terms of use</a>
          </span>
        </p>
        <p>
          {" "}
          and
          <span className="text-[rgb(59_73_223)] font-normal">
            <a href="https://dev.to/code-of-conduct">code of conduct.</a>
          </span>
        </p>
        <br />
        <div className="w-min-[40px]  h-min-[40px] flex justify-center items-center text-justify align-middle text-base font-normal min-w-[580px] max-h-[580px] text-[rgb(23_23_23)] not-italic border-t-2 p-3">
          Already have an account?{" "}
          <span className="text-[rgb(59_73_223)] font-normal">
            <Link href="/logIn/logInEmail"> Log in. </Link>
          </span>
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
