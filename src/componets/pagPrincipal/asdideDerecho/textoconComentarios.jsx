export default function TextoConHiper(props) {
  return (
    <div className="min-w-[301.368px]  min-h-[23.983px] rounded-md ">
      <a
        className="flex align-middle items-center justify-between text-justify text-base  hover:text-[rgb(47_58_178)] min-w-[208px] min-h-[23.983px] "
        href={props.link}
      >
        <p id="parrafoAsideI" className="">
          {props.contenido}
        </p>
      </a>
      <div className="text-sm text-[rgb(61_61_61)] ">
        {" "}
        {props.numRam} comments
      </div>
      <br />
    </div>
  );
}
