import Image from "next/image";
export default function BotonRedes(props) {
  return (
    <a
      href={props.link}
      className="hover:bg-[rgb(59_73_223/10%)] text-[rgb(47_58_178)] w-min-[40px] h-min-[40px] rounded-md flex items-center justify-center align-middle "
    >
      <Image src={props.imagen} alt={props.alt} width={20} height={20} />
    </a>
  );
}
