import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import NavUser from "@/pages/Nav/navUser";

export default function Detalles(props) {
  const router = useRouter();
  const [post, setPost] = useState([]);
  let id = router.query.id;

  useEffect(() => {
    fetch(`https://nextdevrep-2044e667dfb2.herokuapp.com/post/${id}`, {
      // fetch(`http://localhost:3001/post/${id}`, {
      method: "Get",
    })
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [id]);

  if (!post.data) {
    return (
      <article className="w-full bg-slate-800 animate-pulse min-h-20"></article>
    );
  }

  return (
    <main className=" h-full w-full min-h-screen min-w-screen   ">
      <nav className=" flex justify-center bg-[rgb(245_245_245)] min-h-[55.990px] min-w-full align-middle items-center ">
        <NavUser />
      </nav>

      <div
        className="flex md:justify-center w-[1500px] min-w-screen  align-middle rounded-md 
         ml-auto mr-auto text-[rgb(23_23_23)]"
      >
        <div
          className="flex flex-col items-center md:max-w-[506px] lg:max-w-[806px]  border-2 p-[64px]  rounded-md 
          "
        >
          <div className="flex min-w-[784.656px]  pb-3  ">
            <Image
              className="rounded-md"
              src={
                "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fu54jbz78cqibheqoqh85.jpg"
              }
              alt={"Montaña"}
              width={780}
              height={329.3}
            />
          </div>

          <div className=" align-top resize-none w-[100%] outline-none text-[7rem] pt-5 text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold ">
            {post.data.articuloTitulo}
          </div>

          <div className="resize-none  w-[100%] flex outline-none text-[7rem] pt-5 text-base sm:text-xl font-mono  ">
            {post.data.articuloPost}
          </div>
          <div className="text-xs p-4">{post.data.updatedAt}</div>
        </div>
      </div>
    </main>
  );
}
