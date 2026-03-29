import angeliqia from "../assets/angeliqia.jpg";

export default function Angeliqia() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white">

      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-md text-center">

        <img
          src={angeliqia}
          className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-white"
        />

        <h2 className="text-2xl font-bold mt-4">angeliqia</h2>

        <p className="opacity-80">Teknik Informatika</p>

        <p className="mt-4 text-sm leading-relaxed">
          Saya merupakan mahasiswa Teknologi Informasi di Universitas Brawijaya dengan latar belakang Rekayasa Perangkat Lunak dari SMK Negeri 5 Malang. Ia memiliki minat besar dalam bidang pemrograman, pengembangan aplikasi, serta sistem informasi. Fidho telah mengerjakan berbagai proyek seperti aplikasi mobile berbasis API, aplikasi web menggunakan Laravel, dan aplikasi kalkulator dengan Python Kivy. Selain itu, ia juga memiliki pengalaman magang sebagai desain dan web developer. Dikenal sebagai pribadi yang teliti, bertanggung jawab, dan cepat belajar, Fidho mampu bekerja secara individu maupun dalam tim untuk menyelesaikan berbagai permasalahan teknis secara efektif dan efisien.
        </p>

      </div>
    </div>
  );
}