import React, { useState, useEffect } from "react";
import { Progress } from "semantic-ui-react";
import { CheckCircle, Clock, AlertCircle, ChevronLeft } from "lucide-react";

const KecermatanQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 50;
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(90 * 60);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswer = (questionNumber, option) => {
    setAnswers((prev) => ({
      ...prev,
      [questionNumber]: option,
    }));

    if (!answeredQuestions.includes(questionNumber)) {
      setAnsweredQuestions([...answeredQuestions, questionNumber]);
    }

    // Jika belum soal terakhir, langsung pindah ke soal berikutnya
    if (questionNumber < totalQuestions) {
      setTimeout(() => setCurrentQuestion(questionNumber + 1), 200);
    }
  };

  const handleFinish = () => {
    setShowModal(true);
  };

  const confirmFinish = () => {
    console.log("Jawaban yang telah dipilih:", answers);
    alert("Jawaban telah disimpan. Periksa konsol untuk melihat hasilnya.");
    setShowModal(false);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-lg md:text-xl font-bold">Tes Kecerdasan Paket 1</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-md md:text-lg">
            <Clock className="w-5 h-5" />
            {formatTime(timeLeft)}
          </div>
          <button
            onClick={handleFinish}
            className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg text-sm font-semibold"
          >
            SELESAI
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 gap-4 flex flex-col lg:flex-row">
        {/* Question Section */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-4 md:p-6">
          <div className="mb-4">
            <p className="text-md md:text-lg font-semibold">
              Soal {currentQuestion}/{totalQuestions}
            </p>
            <Progress percent={(currentQuestion / totalQuestions) * 100} size="tiny" />
          </div>
          <div className="mb-6">
            <p className="text-sm md:text-md font-medium">
              Pertanyaan nomor {currentQuestion}
            </p>
            <div className="mt-4 space-y-3">
              {["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D", "Pilihan E"].map((option, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    className="form-radio text-blue-600"
                    checked={answers[currentQuestion] === option}
                    onChange={() => handleAnswer(currentQuestion, option)}
                  />
                  <label className="cursor-pointer text-sm md:text-md">{option}</label>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="flex justify-start">
            <button
              disabled={currentQuestion === 1}
              onClick={handlePrevious}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm ${
                currentQuestion === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
          </div> */}
        </div>

        {/* Navigation Section */}
        <aside className="lg:w-1/4 bg-white rounded-lg shadow-lg p-4 md:p-6">
          <p className="font-semibold mb-4 text-sm md:text-md">Navigasi Soal</p>
          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-5 gap-2">
            {Array.from({ length: totalQuestions }, (_, index) => (
              <button
                key={index + 1}
                className={`p-2 text-xs md:text-sm rounded-md font-semibold ${
                  currentQuestion === index + 1
                    ? "bg-blue-900 text-white"
                    : answeredQuestions.includes(index + 1)
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => setCurrentQuestion(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </aside>
      </main>

      {/* Footer */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Konfirmasi</h2>
            <p className="text-gray-700 mb-6">Apakah Anda yakin ingin menyelesaikan tes?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg text-sm font-semibold"
              >
                Batal
              </button>
              <button
                onClick={confirmFinish}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm text-white font-semibold"
              >
                Ya, Selesai
              </button>
            </div>
          </div>
        </div>
      )}
      <footer className="bg-white shadow-md p-4 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-green-600">
          <CheckCircle className="w-5 h-5" />
          Terjawab: {answeredQuestions.length}
        </div>
        <div className="flex items-center gap-2 text-yellow-600">
          <AlertCircle className="w-5 h-5" />
          Belum Terjawab: {totalQuestions - answeredQuestions.length}
        </div>
      </footer>
    </div>
  );
};

export default KecermatanQuiz;
