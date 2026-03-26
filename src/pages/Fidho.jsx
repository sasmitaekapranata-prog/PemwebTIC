import fidho from "../assets/fidho.jpg";

export default function Fidho() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white">

      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-md text-center">

        <img
          src={fidho}
          className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-white"
        />

        <h2 className="text-2xl font-bold mt-4">Fidho</h2>

        <p className="opacity-80">Teknik Informatika</p>

        <p className="mt-4 text-sm leading-relaxed">
          Saya adalah mahasiswa yang memiliki minat dalam pengembangan web,
          khususnya frontend menggunakan React dan Tailwind CSS...
        </p>

      </div>
    </div>
  );
}