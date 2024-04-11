import Image from "next/image";
export default function AsideRScroll() {
  return (
    <div
      className="flex flex-col align-middle min-w-[301.368px]  justify-stretch text-justify pl-[8px]  
    w-[300px]  rounded-md p-[8px_16px] text-[rgb(64_64_64)] font-normal"
    >
      <p id="parrafoAsideI" className="no-underline font-normal text-base  ">
        Frontend Challenge winners were announced Tuesday
      </p>
      <a
        href="https://dev.to/devteam/congrats-to-our-frontend-challenge-winners-2h5f"
        className="no-underline  text-[rgb(59_73_223)] hover:text-[rgba(59,73,223,0.84) text-base font-bold]"
      >
        <p className="font-bold hover:underline"> announced Tuesday </p>
      </a>
      <p className="font-semibold text-[25px]">
        {" "}
        The new challenge is live now.
      </p>
      Join us for the
      <a
        href="https://dev.to/devteam/congrats-to-our-frontend-challenge-winners-2h5f"
        className="no-underline  text-[rgb(59_73_223)] hover:text-[rgba(59,73,223,0.84) text-base font-bold]"
      >
        <p className="font-bold hover:underline">Cloudflare AI Challenge</p>
      </a>
      <a
        href="https://www.cloudflare.com/developer-week/?utm_medium=paid-social&utm_source=reddit&utm_campaign=2024-q1-dev-gbl-developers-dp-ge-general-dev_to"
        className="no-underline  text-[rgb(59_73_223)] hover:text-[rgba(59,73,223,0.84) text-base font-bold]"
      >
        <br />
        <p
          id="titulo"
          className="text-[30px] underline font-bold hover:underline"
        >
          📽️Cloudflare Developer Week
        </p>
      </a>
      <p>Live streams and announcements all week, with some DEV tie-ins.</p>
      <ul>
        <li>• Monday: Kickoff</li>
        <li>• Tuesday AI Day</li>
        <li>• Wednesday: Data Day</li>
        <li>• Thursday: Media Day</li>
        <li>• Friday: Community Day </li>
      </ul>
      <br />
      Have a great week! ❤️
    </div>
  );
}
