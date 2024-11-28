// src/pages/LandingPage.js
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 to-indigo-900 text-white flex flex-col items-center justify-center px-6 space-y-12">
      
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Selamat Datang di Try-Out Interpolation!</h1>
        <p className="text-lg font-light">
          Persiapkan dirimu menghadapi tes TNI, Polisi, dan berbagai ujian lainnya dengan latihan soal terstruktur dan akurat.
        </p>
      </header>

      {/* Features Section */}
      <section className="text-center max-w-3xl">
        <h2 className="text-3xl font-semibold mb-6">Jenis Ujian yang Kami Sediakan</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mx-auto text-lg font-light">
          <li className="flex items-center space-x-3">
            <Icon name="shield" color="blue" size="big" />
            <span>Try-Out untuk TNI - Persiapkan dirimu untuk menjadi bagian dari TNI dengan soal yang relevan dan update.</span>
          </li>
          <li className="flex items-center space-x-3">
            <Icon name="user secret" color="black" size="big" />
            <span>Try-Out untuk Kepolisian - Tingkatkan peluangmu untuk lolos tes polisi dengan latihan yang terstruktur.</span>
          </li>
          <li className="flex items-center space-x-3">
            <Icon name="building" color="grey" size="big" />
            <span>Try-Out untuk Kedinasan - Dapatkan pengalaman ujian untuk berbagai lembaga kedinasan di Indonesia.</span>
          </li>
          <li className="flex items-center space-x-3">
            <Icon name="graduation cap" color="green" size="big" />
            <span>Try-Out untuk Perguruan Tinggi - Sukseskan tes masuk perguruan tinggi dengan soal-soal terbaru.</span>
          </li>
        </ul>
      </section>

      {/* Call-to-Action Button */}
      <div className="text-center">
        <Button 
          color="blue" 
          size="huge"
          className="px-12 py-4 text-lg font-bold bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 rounded-lg shadow-lg"
          href="/register"
        >
          <Icon name="signup" />
          Bergabung Sekarang
        </Button>
        <p className="mt-4 text-sm font-light text-gray-200">
          Daftar dan mulai persiapkan dirimu untuk masa depan yang sukses!
        </p>
      </div>

    </div>
  );
}

export default LandingPage;
