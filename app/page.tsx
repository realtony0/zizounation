import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark-300 via-dark-200 to-dark-100 py-24 md:py-40 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-slide-up">
            {/* Main Title with Gradient */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 bg-gradient-to-r from-white via-primary/90 to-white bg-clip-text text-transparent animate-fade-in">
                Zizounation
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Découvrez notre collection exclusive de vapes de haute qualité. Du RODMAN avec 15 000 bouffées aux saveurs rafraîchissantes de Coolbar - nous avons tout ce qu'il vous faut.
            </p>

            {/* CTA Buttons with enhanced design */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="/shop"
                className="group relative w-full sm:w-auto bg-primary text-white font-bold py-5 px-10 rounded-2xl hover:bg-accent transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-primary/30 hover:shadow-primary/50 overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Acheter Maintenant</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link
                href="/gros"
                className="group relative w-full sm:w-auto bg-gradient-to-r from-secondary to-primary text-white font-bold py-5 px-10 rounded-2xl hover:from-secondary/90 hover:to-primary/90 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-secondary/30 hover:shadow-secondary/50 overflow-hidden border-2 border-secondary/50"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span>Commande en Gros</span>
                </span>
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="glass p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{products.length}</div>
                <div className="text-sm text-gray-400">Produits</div>
              </div>
              <div className="glass p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {products.reduce((sum, p) => sum + p.variants.length, 0)}
                </div>
                <div className="text-sm text-gray-400">Saveurs</div>
              </div>
              <div className="glass p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15K</div>
                <div className="text-sm text-gray-400">Bouffées</div>
              </div>
              <div className="glass p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-gray-400">Qualité</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-200 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pourquoi Choisir <span className="text-primary">Zizounation</span> ?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative text-center p-8 glass rounded-3xl border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Qualité Premium</h3>
                <p className="text-gray-400 leading-relaxed">Produits de vape haut de gamme avec des saveurs authentiques et une qualité irréprochable</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative text-center p-8 glass rounded-3xl border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Livraison Ultra-Rapide</h3>
                <p className="text-gray-400 leading-relaxed">Livraison en <span className="text-primary font-bold">45 minutes maximum</span> partout à Dakar. Service rapide et fiable pour une satisfaction garantie</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative text-center p-8 glass rounded-3xl border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Saveurs Multiples</h3>
                <p className="text-gray-400 leading-relaxed">Large sélection de saveurs uniques et rafraîchissantes à découvrir</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-dark-300 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos <span className="text-primary">Produits</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Explorez notre sélection premium de produits de vape de qualité supérieure
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/shop"
              className="group inline-flex items-center space-x-3 bg-primary text-white font-bold py-5 px-10 rounded-2xl hover:bg-accent transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-primary/30 hover:shadow-primary/50"
            >
              <span>Voir Tous les Produits</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Wholesale Section */}
      <section className="py-20 bg-gradient-to-br from-dark-200 via-dark-100 to-dark-200 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass p-12 md:p-16 rounded-3xl border-2 border-primary/30 backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div>
                <div className="inline-flex items-center space-x-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span className="text-sm font-semibold text-primary">Commandes Professionnelles</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Commandes <span className="text-primary">en Gros</span>
                </h2>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Vous êtes un revendeur ou souhaitez commander en grande quantité ? Profitez de nos tarifs préférentiels et de conditions spéciales pour les commandes en gros.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Prix dégressifs selon les quantités</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Livraison en 45 min max à Dakar</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Support dédié pour les professionnels</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Conditions de paiement flexibles</span>
                  </li>
                </ul>

                <Link
                  href="/gros"
                  className="group inline-flex items-center space-x-3 bg-gradient-to-r from-secondary to-primary text-white font-bold py-5 px-10 rounded-2xl hover:from-secondary/90 hover:to-primary/90 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-secondary/30 hover:shadow-secondary/50"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span>Créer une Commande en Gros</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>

              {/* Right Side - Visual */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-12 border border-primary/30">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="glass p-6 rounded-2xl text-center border border-primary/20">
                      <div className="text-4xl font-bold text-primary mb-2">-20%</div>
                      <div className="text-sm text-gray-400">Réduction</div>
                    </div>
                    <div className="glass p-6 rounded-2xl text-center border border-primary/20">
                      <div className="text-4xl font-bold text-primary mb-2">50+</div>
                      <div className="text-sm text-gray-400">Quantité Min</div>
                    </div>
                    <div className="glass p-6 rounded-2xl text-center border border-primary/20">
                      <div className="text-4xl font-bold text-primary mb-2">45</div>
                      <div className="text-sm text-gray-400">Minutes Max</div>
                    </div>
                    <div className="glass p-6 rounded-2xl text-center border border-primary/20">
                      <div className="text-4xl font-bold text-primary mb-2">100%</div>
                      <div className="text-sm text-gray-400">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-dark-200 to-secondary/10 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass p-12 md:p-16 rounded-3xl border-2 border-primary/30 backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div>
                <div className="inline-flex items-center space-x-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm font-semibold text-primary">Service Express</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Livraison <span className="text-primary">Ultra-Rapide</span>
                </h2>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Nous livrons partout à <span className="text-primary font-bold">Dakar</span> en maximum <span className="text-primary font-bold text-2xl">45 minutes</span>
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Zone de Livraison</div>
                      <div className="text-gray-400">Partout à Dakar</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Délai Maximum</div>
                      <div className="text-gray-400">45 minutes après confirmation</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Livraison Sécurisée</div>
                      <div className="text-gray-400">Emballage soigné et suivi en temps réel</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Visual */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-12 border border-primary/30">
                  <div className="text-center">
                    <div className="text-8xl font-black text-primary mb-4">45</div>
                    <div className="text-2xl font-bold text-white mb-2">Minutes</div>
                    <div className="text-gray-400">Maximum</div>
                    <div className="mt-8 pt-8 border-t border-primary/30">
                      <div className="text-lg text-gray-300">
                        <span className="text-primary font-bold">Dakar</span> - Zone complète
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

