import Image from "next/image";
export default function DevAsideLComuni() {
  return (
    <div
      className="flex flex-col align-middle bg-[rgb(255_255_255)]  justify-stretch text-justify text-base pl-[8px]  
    w-[300px] max-h-[23.983px]  rounded-md p-[8px_16px] text-[rgb(64_64_64)] "
    >
      <div className="flex flex-row align-middle bg-[rgb(255_255_255)] items-center justify-around text-justify pb-[16px] ">
        <div className="flex pb-[16px]">
          <p className="">DEV Community</p>
        </div>
        <div
          id="imagenBecome"
          className="flex flex-row align-middle items-center justify-around text-justify pb-[16px]"
        >
          <Image
            className="flex flex-row align-middle items-center justify-around  "
            src={"https://cdn-icons-png.flaticon.com/128/512/512142.png"}
            alt={"Become"}
            width={20}
            height={11}
          />
        </div>
      </div>

      <div className="gap-3">
        <Image
          src={
            "https://res.cloudinary.com/practicaldev/image/fetch/s--KfYhPrXu--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gxatl8njvv45ht30hcx9.png"
          }
          alt={"Become"}
          width={208}
          height={117}
        />
      </div>
      <div className="max-w-[208px] max-h-[23.983px]   ">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfrhAb82gHqbmf4jWhay0MrkAZe7ZX092Sp7Doz0MQt1ic79w/viewform"
          className="no-underline  text-[rgb(59_73_223)] hover:text-[rgba(59,73,223,0.84) text-base font-bold]"
        >
          <p className="font-bold hover:underline"> Fill out this survey </p>
        </a>
        <p id="parrafoAsideI" className="no-underline font-bold text-base  ">
          and help us moderate our community by becoming a tag moderator here at
          DEV.
        </p>
      </div>
    </div>
  );
}
