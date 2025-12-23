'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  // Generate WhatsApp message
  const generateWhatsAppMessage = () => {
    if (cart.length === 0) return '';
    
    let message = 'Bonjour, je souhaite commander :\n\n';
    
    cart.forEach((item) => {
      message += `- ${item.product.name} (${item.variant}) x${item.quantity}\n`;
      message += `  Prix : ${(item.product.price * item.quantity).toLocaleString()} FCFA\n\n`;
    });
    
    message += `Total : ${getCartTotal().toLocaleString()} FCFA`;
    
    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/779706850?text=${message}`, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-dark-300 flex items-center justify-center py-12">
        <div className="text-center max-w-md px-4">
          {/* Empty Cart Icon */}
          <div className="w-32 h-32 mx-auto mb-8 bg-dark-200 rounded-full flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">Votre Panier est Vide</h2>
          <p className="text-gray-400 mb-8">
            Ajoutez des produits à votre panier pour commencer !
          </p>
          
            <Link
              href="/shop"
              className="inline-block bg-primary text-white font-bold py-4 px-8 rounded-xl hover:bg-accent transition-all duration-300 shadow-lg"
            >
              Commencer les Achats
            </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Panier</h1>
          <p className="text-gray-400">
            {cart.length} {cart.length === 1 ? 'article' : 'articles'} dans votre panier
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={`${item.product.id}-${item.variant}`}
                className="glass p-6 rounded-2xl animate-slide-up"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Product Image */}
                  <div className="relative w-full sm:w-32 h-32 bg-dark-200 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      quality={100}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {item.product.name}
                        </h3>
                        <p className="text-gray-400">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.variant)}
                        className="text-red-500 hover:text-red-400 transition-colors p-2"
                        aria-label="Remove item"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.variant,
                              item.quantity - 1
                            )
                          }
                          className="w-8 h-8 bg-dark-200 border border-gray-700 text-white rounded-lg hover:bg-dark-100 transition-colors"
                        >
                          -
                        </button>
                        <span className="text-white font-bold w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.variant,
                              item.quantity + 1
                            )
                          }
                          className="w-8 h-8 bg-dark-200 border border-gray-700 text-white rounded-lg hover:bg-dark-100 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="text-xl font-bold text-white">
                          {(item.product.price * item.quantity).toLocaleString()} FCFA
                        </div>
                        <div className="text-sm text-gray-400">
                          {item.product.price.toLocaleString()} FCFA chacun
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart Button */}
            <button
              onClick={clearCart}
              className="w-full sm:w-auto text-red-500 hover:text-red-400 transition-colors py-2 px-4 text-sm"
            >
              Vider le Panier
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass p-6 rounded-2xl sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">Résumé de la Commande</h2>

              {/* Cart Items Summary */}
              <div className="space-y-3 mb-6">
                {cart.map((item) => (
                  <div
                    key={`${item.product.id}-${item.variant}`}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-gray-400">
                      {item.product.name} x{item.quantity}
                    </span>
                    <span className="text-white">
                      {(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-700 my-4"></div>

              {/* Total */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-semibold text-white">Total</span>
                <span className="text-2xl font-bold text-primary">
                  {getCartTotal().toLocaleString()} FCFA
                </span>
              </div>

              {/* WhatsApp Order Button */}
              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-accent transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Commander via WhatsApp</span>
              </button>

              {/* Continue Shopping */}
              <Link
                href="/shop"
                className="block w-full text-center text-gray-400 hover:text-white transition-colors py-3 mt-4"
              >
                Continuer les Achats
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

