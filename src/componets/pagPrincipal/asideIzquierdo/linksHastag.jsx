export default function ParrafoLink(props) {
  return (
    <a
      className="flex align-middle items-center justify-between text-justify text-sm hover:bg-[rgb(59_73_223/10%)]  hover:text-[rgb(47_58_178)] min-w-[208px] min-h-[23.983px] no-underline hover:underline rounded-md p-[8px_16px]"
      href={props.link}
    >
      <p id="parrafoAsideI" className="no-underline hover:underline">
        {props.contenido}
      </p>
    </a>
  );
}
