import { Link } from "react-router-dom";
import logoUB from "../assets/ub-logo.png";
import fidho from "../assets/fidho.jpg";
import ardan from "../assets/ardan.jpg";
import dias from "../assets/dias.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center px-6">

      {/* LOGO + TITLE */}
      <div className="text-center mb-16">

        <img
          src={logoUB}
          className="w-20 mx-auto mb-4 opacity-90 hover:scale-105 transition"
        />

        <h1 className="text-4xl font-semibold tracking-wide">
          Our Team
        </h1>

        <p className="text-gray-500 text-xs mt-1">
          Tugas Pemrograman Web - Kelompok ETHICADVISOR
        </p>

      </div>

      {/* CARD CONTAINER */}
      <div className="grid md:grid-cols-3 gap-10">

        {/* ARDAN */}
        <Link to="/ardan">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-2 hover:shadow-xl transition duration-300">

            <img
              src={ardan}
              className="w-24 h-24 mx-auto rounded-full object-cover border border-gray-500"
            />

            <h2 className="mt-4 text-lg font-semibold">
              Muhammad Ardan Al Ayubi
            </h2>

            <p className="text-xs text-gray-400">
              253140707111030
            </p>

            <p className="text-gray-400 text-sm mt-2">
              UI/UX Designer
            </p>

 <p className="text-gray-400 text-sm mt-2">
              Anggota
            </p>

          </div>
        </Link>

          {/* FIDHO */}
        <Link to="/fidho">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-2 hover:shadow-xl transition duration-300">

            <img
              src={fidho}
              className="w-24 h-24 mx-auto rounded-full object-cover border border-gray-500"
            />

            <h2 className="mt-4 text-lg font-semibold">
              Muhammad Fidho Pratama
            </h2>

            <p className="text-xs text-gray-400">
              253140707111029
            </p>

            <p className="text-gray-400 text-sm mt-2">
              Frontend Developer
            </p>

             <p className="text-gray-400 text-sm mt-2">
              Ketua Kelompok
            </p>

          </div>
        </Link>

        {/* DIAS */}
        <Link to="/dias">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-2 hover:shadow-xl transition duration-300">

            <img
              src={dias}
              className="w-24 h-24 mx-auto rounded-full object-cover border border-gray-500"
            />

            <h2 className="mt-4 text-lg font-semibold">
              Tri Dias Indra
            </h2>

            <p className="text-xs text-gray-400">
              253140707111031
            </p>

            <p className="text-gray-400 text-sm mt-2">
              Backend Developer
            </p>

 <p className="text-gray-400 text-sm mt-2">
              Anggota
            </p>
            
          </div>
        </Link>

      </div>

    </div>
  );
}