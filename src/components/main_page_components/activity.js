import { NavLink } from "react-router-dom";

export default function Activity({ src, title, page }) {
  return (
    <NavLink
      to={page}
      className="flex flex-col items-center justify-center bg-[#1C1D1D] w-[380px] h-[345px] mb-6 rounded-xl hover:bg-black"
    >
      <div>
        {src ? (
          <img
            src={src}
            alt={title}
            className="w-[350px] h-[280px] rounded-xl"
          />
        ) : (
          <div className="bg-gray-950 w-[350px] h-[280px] rounded-xl" />
        )}
        <p className="w-[350px] mt-2 text-white font-semibold text-center text-base">
          {title}
        </p>
      </div>
    </NavLink>
  );
}
