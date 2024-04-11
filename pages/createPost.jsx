import Link from "next/link";
import Image from "next/image";
import BotonPost from "@/src/componets/createPost/botonPost";
import { botonPost } from "@/src/constants/botonPostImg";

import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function CreatePost(props) {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(dataPost) {
    //fetch("https://nextdevrep-2044e667dfb2.herokuapp.com/post", {
    fetch("http://localhost:3001/post", {
      method: "Post",
      body: JSON.stringify({
        articuloPost: dataPost.articuloPost,
        articuloTitulo: dataPost.articuloTitulo,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());

    reset();
    router.push("/userIndex");
    return;
  }

  return (
    <main className=" h-full w-full min-h-screen min-w-screen   ">
      <nav className=" flex justify-center  min-h-[55.990px] min-w-full align-middle items-center ">
        <div className=" flex flex-row justify-center  items-center  md:pr-60  ">
          <Link href="/userIndex">
            <div className="flex justify-center align-middle max-h-[40px] min-w-[50px]  ">
              <Image
                className=""
                src={
                  "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                }
                alt={"DEV Community"}
                width={50}
                height={40}
              />
            </div>
          </Link>
          <div className="p-4 font-semibold">Create Post</div>
        </div>

        <div className="flex flex-row pl-80   ">
          <button className="hidden md:flex hover:bg-[rgb(59_73_223/10%)] p-[8px_16px] text-center min-w-[39px] hover:text-[rgb(47_58_178)] rounded-md">
            Edit
          </button>
          <button className="hidden md:flex hover:bg-[rgb(59_73_223/10%)] p-[8px_16px] text-center min-w-[39px] hover:text-[rgb(47_58_178)] rounded-md">
            Preview
          </button>
        </div>
      </nav>

      <div
        className="flex md:justify-center w-[1500px] min-w-screen  align-middle rounded-md 
         ml-auto mr-auto text-[rgb(23_23_23)]"
      >
        <div
          className="flex flex-col justify-start bg-[rgb(255_255_255)] md:max-w-[506px] lg:max-w-[806px]  border-2 p-[64px]  rounded-md 
          "
        >
          <button
            className="flex hover:border-[rgb(163_163_163)] text-[1rem] w-[170px] h-[40px] p-[6px_14px] 
              text-[rgb(61_61_61)] hover:text-[rgb(9_9_9)] border-2 items-center rounded-md font-medium "
          >
            Add a cover image
          </button>

          <form name="form" className="" onSubmit={handleSubmit(onSubmit)}>
            <textarea
              className=" align-top resize-none w-[100%] outline-none text-[7rem] pt-5 text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold "
              placeholder="New post title here..."
              name="articuloTitulo"
              id="articuloTitulo"
              cols="40"
              rows="3"
              required
              autoComplete="off"
              {...register("articuloTitulo", {
                minLength: {
                  value: 3,
                  message: "Tu título debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 60,
                  message: "Tu título debe tener  menos de 60 caracteres",
                },
              })}
            ></textarea>
            <div id="errordeTitulo" className="p-1">
              {errors.articuloTitulo && (
                <p
                  className=" text-base flex justify-center items-center "
                  id="letra"
                >
                  {"⚠ "} {errors.articuloTitulo.message}
                </p>
              )}
            </div>
            <div className=" p-2 ">Add up 4 tags...</div>
            <div
              id="botones "
              className="flex flex-row  w-[100%] h-[50px]  bg-[rgb(245_245_245)]"
            >
              {botonPost.map((item, index) => {
                return (
                  <div
                    key={`DivPost-${index}`}
                    className=" rounded-md flex items-center  pl-2 text-justify align-middle text-sm font-semibold "
                    id="redes"
                  >
                    <BotonPost
                      key={`BotonPost-${index}`}
                      icono={item.icono}
                      alt={item.alt}
                      className={""}
                    />
                  </div>
                );
              })}
            </div>
            <div>
              <div id="errordePost" className="p-1">
                {" "}
                {errors.articuloPost && (
                  <p
                    className=" text-base flex justify-center items-center "
                    id="letra"
                  >
                    {"⚠ "} {errors.articuloPost.message}
                  </p>
                )}
              </div>

              <textarea
                className="resize-none  w-[100%] flex outline-none text-[7rem] pt-5 text-base sm:text-xl font-mono  "
                placeholder="Write your post"
                name="articuloPost"
                id="articuloPost"
                cols="10"
                rows="12"
                autoComplete="off"
                required
                {...register("articuloPost", {
                  minLength: {
                    value: 3,
                    message: "Add un post de al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 300,
                    message: "Tu post rebasado, usa menos de 300 caracteres",
                  },
                })}
              ></textarea>
            </div>
            <button
              className="hover:bg-[rgb(47_58_178)] p-[8px_16px] min-w-[95px] text-center text-[rgb(255_255_255)] bg-[rgb(59_73_223)] border-2 rounded-lg  font-semibold"
              type="submit"
            >
              Publish
            </button>
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
