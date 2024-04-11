import Image from "next/image";
export default function BotonPost(props) {
  return (
    <div className="flex-row   flex items-center text-justify align-middle ">
      <button className="flex  hover:bg-[rgb(59_73_223/10%)] p-[8px] mr-[4px] file:text-center min-w-[39px] hover:text-[rgb(47_58_178)] rounded-md">
        <div>
          <Image src={props.icono} alt={props.alt} width={20} height={20} />
        </div>
      </button>
    </div>
  );
}
