import React from 'react'; 
import rachel from "../assets/rachel.jpg";

export default function Rachel() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center max-w-md">
        <img
          src={rachel}
          alt="Foto Rachel"
          className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-white"
        />
        <h2 className="text-2xl font-bold mt-4">rachel</h2>
        <p className="opacity-80">Teknik Informatika</p>
        <p className="mt-4 text-sm">
          Saya tertarik pada backend development dan sistem database...
        </p>
      </div>
    </div>
  );
}
