import Image from "next/image";

export default function AsideLLink(props) {
  return (
    <div className="p-[8px_16px] hover:bg-[rgb(59_73_223/10%)] min-w-[208px] min-h-[23.983px] rounded-md ">
      <a
        className="flex align-middle items-center justify-between text-justify text-sm hover:text-[rgb(47_58_178)] min-w-[208px] min-h-[23.983px] no-underline hover:underline"
        href={props.link}
      >
        <div>
          <Image src={props.imagen} alt={props.alt} width={24} height={24} />
        </div>
        <br />
        <div id="parrafoAsideI" className="no-underline hover:underline">
          <p id="parrafoAsideI" className="no-underline hover:underline">
            {props.contenido}
          </p>
        </div>
      </a>
    </div>
  );
}
