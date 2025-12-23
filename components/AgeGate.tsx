'use client';

import { useEffect, useState } from 'react';

export default function AgeGate() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if user has already verified their age
    const ageVerified = localStorage.getItem('zizounation_age_verified');
    if (!ageVerified) {
      setShowModal(true);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('zizounation_age_verified', 'true');
    setShowModal(false);
    document.body.style.overflow = 'unset';
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-dark-100 border-2 border-primary rounded-2xl p-8 md:p-12 max-w-md w-full text-center shadow-2xl animate-slide-up">
        {/* Warning Icon */}
        <div className="w-20 h-20 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
          <svg
            className="w-10 h-10 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Vérification d'Âge Requise
        </h2>

        {/* Message */}
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Ce site est strictement réservé aux personnes âgées de{' '}
          <span className="text-primary font-bold">18 ans et plus</span>.
        </p>

        {/* Accept Button */}
        <button
          onClick={handleAccept}
          className="w-full bg-primary text-white font-bold py-4 px-8 rounded-xl hover:bg-accent transition-all duration-300 shadow-lg"
        >
          J'ai 18 ans ou plus
        </button>

        {/* Disclaimer */}
        <p className="text-gray-500 text-sm mt-6">
          En cliquant sur le bouton ci-dessus, vous confirmez que vous êtes majeur.
        </p>
      </div>
    </div>
  );
}

