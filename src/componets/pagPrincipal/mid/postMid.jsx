import Image from "next/image";
export default function PostMid(props) {
  return (
    <div className="p-[20px] max-h-[160px]">
      <div className="flex flex-row p-[8px_16px]">
        <div className="bg-black">
          <Image
            id="imagenPerfil"
            className="bg-black "
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
            }
            alt={""}
            width={32}
            height={32}
          />
        </div>

        <div className="">
          <p className="text-[rgb(61_61_61)] hover:text-[rgb(9_9_9)] text-[0.875rem] font-semibold">
            Juan Paco Pedro de La Mar {props._id}
          </p>
          <p className="text-[rgb(82_82_82)]  text-xs ">22/02/1992</p>
        </div>
      </div>
      <div className="text-[rgb(9_9_9)]  font-extrabold hover:text-[rgb(59_73_223)] text-[1.5rem]] p-[20px]">
        <p id="tituloPost" className=" hover:text-[rgb(59_73_223)]">
          {props.titulo}
          {props.articuloTitulo}
          {props.articuloPost}
          {props.updatedAt}
        </p>
      </div>

      <div className="flex flex-row align-middle justify-start items-center  p-[8px_16px]  ">
        <div className="flex font-normal  ">
          <button className="hover:bg-[rgba(113,234,139,0.14)]  text-center text-[rgb(14,14,15)] hover:text-[rgb(13,13,13)] border-[rgba(113,234,139,0.52)] border-[1px] hover:border-2 rounded-md  font-semibold">
            #Discuss
          </button>
        </div>
        <div className="flex font-normal  ">
          <button className="hover:bg-[rgba(113,234,139,0.14)]   text-center text-[rgb(14,14,15)] hover:text-[rgb(13,13,13)] border-[rgba(113,234,139,0.52)] border-[1px] hover:border-2 rounded-md  font-semibold">
            #Coding
          </button>
        </div>
      </div>

      <div className=" flex font-normal flex-row align-middle justify-between p-[2px_16px] ">
        <div className=" flex font-normal flex-row ">
          <a className=" flex w-[176px]">💖🦄😮🫷🔥</a>
          <a className=" flex w-[176px] "> 41 reactions</a>
        </div>
        <div className=" flex align-middle w-[176px] ">
          <Image
            id="imagenPerfil"
            className="bg-black "
            src={"https://cdn-icons-png.flaticon.com/512/1947/1947247.png"}
            alt={""}
            width={24}
            height={24}
          />
          <a> 6 Comments</a>
        </div>
        <div id="hora" className=" flex align-middle w-[176px]  ">
          <a className="">22:02hrs</a>
          <Image
            id="imagenPerfil"
            className="bg-black "
            src={"https://cdn-icons-png.flaticon.com/128/5662/5662990.png"}
            alt={""}
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
}
