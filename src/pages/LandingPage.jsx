import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, UserCheck, Building2, GraduationCap,User } from 'lucide-react';
import Clients from '../components/Clients';
import HeroImage from '../assets/img-1.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};
const testimonials = [
  { name: 'Arman', text: 'Saya berhasil lulus tes TNI berkat latihan di platform ini. Soalnya sangat membantu!', image: <User size={40} className="text-blue-600" /> },
  { name: 'Sinta', text: 'Materi try-outnya lengkap dan selalu up-to-date. Sangat membantu saya lulus tes kedinasan.', image: <User size={40} className="text-blue-600" /> },
  { name: 'Budi', text: 'Simulasi real sangat membantu dalam meningkatkan kepercayaan diri saya.', image: <User size={40} className="text-blue-600" /> },
];
function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-blue-900 to-indigo-800 text-white min-h-screen">
      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center justify-center h-screen md:justify-between space-y-6 md:space-y-0 pt-24 px-6 max-w-6xl mx-auto">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-lg">
            Selamat Datang di <span className="text-yellow-400">Try-Out Interpolation!</span>
          </h1>
          <p className="text-lg font-light mt-4">
            Persiapkan diri menghadapi tes TNI, Polisi, Kedinasan, dan ujian lainnya dengan latihan soal yang terstruktur dan akurat.
          </p>
          <button 
            onClick={() => navigate('/Login')}
            className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 text-lg font-bold rounded-lg shadow-lg flex items-center gap-2 transition-transform transform hover:scale-105"
          >
            Bergabung Sekarang <ArrowRight size={20} />
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={HeroImage} alt="Hero" className="w-full max-w-md md:max-w-lg" />
        </div>
      </header>

      {/* About Us Section */}
      <section className="text-center max-w-4xl mx-auto mt-16 px-6">
        <h2 className="text-4xl font-semibold">Tentang Kami</h2>
        <p className="text-lg font-light mt-4">
          Try-Out Interpolation adalah platform latihan soal yang dirancang untuk membantu Anda mempersiapkan diri menghadapi berbagai ujian penting.
        </p>
      </section>

      {/* Services Section */}
      <section className="max-w-5xl mx-auto mt-16 px-6">
        <h2 className="text-4xl font-semibold text-center">Layanan Kami</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {[
            { icon: Shield, title: 'Try-Out TNI', description: 'Soal latihan terkini untuk menghadapi tes TNI dengan lebih percaya diri.' },
            { icon: UserCheck, title: 'Try-Out Kepolisian', description: 'Tingkatkan peluang lolos seleksi polisi dengan latihan yang tepat sasaran.' },
            { icon: Building2, title: 'Try-Out Kedinasan', description: 'Persiapkan ujian kedinasan dengan soal yang terupdate.' },
            { icon: GraduationCap, title: 'Try-Out Perguruan Tinggi', description: 'Dapatkan latihan soal terbaru untuk menghadapi ujian masuk PTN.' },
          ].map(({ icon: Icon, title, description }, index) => (
            <div key={index} className="bg-white text-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center space-y-3">
              <Icon size={40} className="text-blue-600" />
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-sm font-light">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <div className="mt-16">
        <Clients />
      </div>

      {/* Testimonials Section */}
      <section className="text-center max-w-4xl mx-auto mt-16 px-6">
        <h2 className="text-4xl font-semibold">Apa Kata Mereka?</h2>
        <div className="mt-8">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={5000}
            infinite={true}
            className="w-full h-full   mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-white w-full h-full  text-gray-900 rounded-lg shadow-lg flex flex-col items-center">
                {testimonial.image}
                <p className="text-lg font-light mt-4">"{testimonial.text}"</p>
                <p className="mt-2 text-sm font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      {/* Contact Section */}
      <section className="text-center max-w-4xl mx-auto mt-16 px-6">
        <h2 className="text-4xl font-semibold">Hubungi Kami</h2>
        <p className="text-lg font-light mt-4">Butuh informasi lebih lanjut? Hubungi kami di:</p>
        <div className="mt-4 space-y-2">
          <p className="text-md">📞 +62 812 3456 7890</p>
          <p className="text-md">📧 support@tryoutinterpolation.com</p>
          <p className="text-md">🏢 Jakarta, Indonesia</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full text-center py-6 bg-gray-800 text-gray-300 mt-16">
        <p>&copy; {new Date().getFullYear()} Try-Out Interpolation. Semua Hak Dilindungi.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
