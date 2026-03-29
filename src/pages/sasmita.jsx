import sasmita from "../assets/sasmita.jpg";

export default function Sasmita() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white">

      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center max-w-md">

        <jpg
          src={sasmita}
          className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-white"
        />

        <h2 className="text-2xl font-bold mt-4">sasmita</h2>

        <p className="opacity-80">Teknik Informatika</p>

        <p className="mt-4 text-sm">
          Saya adalah seorang mahasiswa Teknologi Informasi yang memiliki semangat besar untuk terus belajar dan berkembang di dunia digital. Saat ini, saya sedang fokus mendalami berbagai bidang seperti pemrograman, desain web, dan pengelolaan proyek IT. Saya percaya bahwa teknologi memiliki peran penting dalam membentuk masa depan, sehingga saya ingin menjadi bagian dari perubahan tersebut. Selain itu, saya juga memiliki tujuan pribadi untuk mencapai kesuksesan finansial dan menjadi orang kaya melalui kerja keras, konsistensi, serta pemanfaatan peluang di bidang teknologi. Saya tidak hanya ingin sukses untuk diri sendiri, tetapi juga ingin memberikan dampak positif bagi orang sekitar. Dengan tekad yang kuat dan kemauan untuk terus belajar, saya yakin dapat meraih impian saya di masa depan.
        </p>

      </div>
    </div>
  );
}