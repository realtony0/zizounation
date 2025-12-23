import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-200 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zizounation</span>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Expérience de vape premium livrée à votre porte.
            </p>
            <div className="flex items-center space-x-2 text-primary text-sm font-semibold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Livraison 45 min max à Dakar</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shop"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Boutique
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Panier
                </Link>
              </li>
              <li>
                <Link
                  href="/gros"
                  className="text-primary hover:text-accent transition-colors text-sm font-semibold"
                >
                  Commande en Gros
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nous Contacter</h3>
            <p className="text-gray-400 text-sm mb-3">
              Contactez-nous
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent transition-colors text-sm"
            >
              <span>Contact</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Zizounation. Tous droits réservés.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Avertissement : Ce produit contient de la nicotine. La nicotine est une substance addictive.
          </p>
        </div>
      </div>
    </footer>
  );
}

