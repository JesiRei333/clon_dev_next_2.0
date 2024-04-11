export default function BotonHeaderMid(props) {
  return (
    <a
      href={props.link}
      className=" w-min-[40px]  justify-center align-middle "
    >
      {props.bandera == true && (
        <p className="font-semibold">{props.contenido}</p>
      )}
      {!props.bandera == true && (
        <p className="font-normal text-black">{props.contenido}</p>
      )}
    </a>
  );
}
