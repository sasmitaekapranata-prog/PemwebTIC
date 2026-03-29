import { Link } from "react-router-dom";
import logoUB from "../assets/ub-logo.png";
import sasmita from "../assets/sasmita.jpg";
import angeliqia from "../assets/angeliqia.jpg";
import rachel from "../assets/rachel.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex flex-col items-center justify-center px-6">

      {/* LOGO + TITLE */}
      <div className="text-center mb-16">
        <img
          src={logoUB}
          alt="Logo UB"
          className="w-20 mx-auto mb-4 opacity-90 hover:scale-110 transition-transform duration-300"
        />
        <h1 className="text-4xl font-bold tracking-wide drop-shadow-lg">
          Our Team
        </h1>
        <p className="text-gray-400 text-sm mt-2 italic">
          Tugas Pemrograman Web - Kelompok CANTIK
        </p>
      </div>

      {/* CARD CONTAINER */}
      <div className="grid md:grid-cols-3 gap-10 w-full max-w-5xl">


        {/* Angeliqia */}
        <Link to="/angeliqia">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:-translate-y-2 hover:scale-105 hover:shadow-2xl transition duration-300">
            <img
              src={angeliqia}
              alt="Angeliqia"
              className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-pink-400 shadow-md"
            />
            <h2 className="mt-4 text-lg font-semibold">ANGELIQIA</h2>
            <p className="text-xs text-gray-400">253140707111029</p>
            <p className="text-gray-300 text-sm mt-2">Frontend Developer</p>
            <p className="text-pink-300 text-sm mt-1 font-medium">Anggota</p>
          </div>
        </Link>
            {/* Sasmita */}
        <Link to="/sasmita">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:-translate-y-2 hover:scale-105 hover:shadow-2xl transition duration-300">
            <img
              src={sasmita}
              alt="Sasmita"
              className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-indigo-400 shadow-md"
            />
            <h2 className="mt-4 text-lg font-semibold">SASMITA EKA PRANATA</h2>
            <p className="text-xs text-gray-400">253140701111045</p>
            <p className="text-gray-300 text-sm mt-2">UI/UX Designer</p>
            <p className="text-indigo-300 text-sm mt-1 font-medium">Ketua Kelompok</p>
          </div>
        </Link>

        {/* Rachel */}
        <Link to="/rachel">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:-translate-y-2 hover:scale-105 hover:shadow-2xl transition duration-300">
            <img
              src={rachel}
              alt="Rachel"
              className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-green-400 shadow-md"
            />
            <h2 className="mt-4 text-lg font-semibold">TRI DIAS INDRA</h2>
            <p className="text-xs text-gray-400">253140707111031</p>
            <p className="text-gray-300 text-sm mt-2">Backend Developer</p>
            <p className="text-green-300 text-sm mt-1 font-medium">Anggota</p>
          </div>
        </Link>

      </div>
    </div>
  );
}