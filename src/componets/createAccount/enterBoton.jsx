import Image from "next/image";
import Link from "next/link";

export default function EnterBoton(props) {
  return (
    <Link
      href={props.link}
      className="flex flex-row justify-center items-center align-middle w-[580px] h-[50px] border-2 rounded-lg p-1 "
    >
      <div className="p-2">
        <Image src={props.imagen} alt={props.alt} width={24} height={24} />
      </div>

      <button className=" flex justify-center items-center align-middle w-[580px] h-[50px] p-[12px]  ">
        {" "}
        {props.contenido}
      </button>
    </Link>
  );
}
