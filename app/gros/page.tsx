'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import { Product } from '@/types';
import Image from 'next/image';

interface WholesaleItem {
  productId: string;
  variant: string;
  quantity: number;
}

export default function GrosPage() {
  const [wholesaleItems, setWholesaleItems] = useState<WholesaleItem[]>([]);

  const addItem = (productId: string, variant: string) => {
    const existingItem = wholesaleItems.find(
      (item) => item.productId === productId && item.variant === variant
    );

    if (existingItem) {
      setWholesaleItems(
        wholesaleItems.map((item) =>
          item.productId === productId && item.variant === variant
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setWholesaleItems([...wholesaleItems, { productId, variant, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId: string, variant: string, quantity: number) => {
    if (quantity <= 0) {
      setWholesaleItems(
        wholesaleItems.filter(
          (item) => !(item.productId === productId && item.variant === variant)
        )
      );
    } else {
      setWholesaleItems(
        wholesaleItems.map((item) =>
          item.productId === productId && item.variant === variant
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  const getTotal = () => {
    return wholesaleItems.reduce((total, item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) return total;
      return total + product.price * item.quantity;
    }, 0);
  };

  const getBoxTotal = () => {
    const rodmanItems = wholesaleItems.filter((item) => item.productId === 'rodman');
    const coolbarItems = wholesaleItems.filter((item) => item.productId === 'coolbar');
    
    const rodmanBoxes = Math.ceil(
      rodmanItems.reduce((sum, item) => sum + item.quantity, 0) / 10
    );
    const coolbarBoxes = Math.ceil(
      coolbarItems.reduce((sum, item) => sum + item.quantity, 0) / 10
    );

    const rodman = products.find((p) => p.id === 'rodman');
    const coolbar = products.find((p) => p.id === 'coolbar');

    let total = 0;
    if (rodman && rodman.boxPrice) total += rodmanBoxes * rodman.boxPrice;
    if (coolbar && coolbar.boxPrice) total += coolbarBoxes * coolbar.boxPrice;

    return { total, rodmanBoxes, coolbarBoxes };
  };

  const generateWhatsAppMessage = () => {
    let message = 'Bonjour, je souhaite passer une commande en gros :\n\n';

    // Group by product
    const rodmanItems = wholesaleItems.filter((item) => item.productId === 'rodman');
    const coolbarItems = wholesaleItems.filter((item) => item.productId === 'coolbar');

    if (rodmanItems.length > 0) {
      const rodman = products.find((p) => p.id === 'rodman');
      message += `📦 RODMAN :\n`;
      rodmanItems.forEach((item) => {
        message += `  - ${item.variant} : ${item.quantity} unité(s)\n`;
      });
      message += `  Sous-total : ${rodmanItems.reduce((sum, item) => sum + (rodman?.price || 0) * item.quantity, 0).toLocaleString()} FCFA\n\n`;
    }

    if (coolbarItems.length > 0) {
      const coolbar = products.find((p) => p.id === 'coolbar');
      message += `📦 Coolbar :\n`;
      coolbarItems.forEach((item) => {
        message += `  - ${item.variant} : ${item.quantity} unité(s)\n`;
      });
      message += `  Sous-total : ${coolbarItems.reduce((sum, item) => sum + (coolbar?.price || 0) * item.quantity, 0).toLocaleString()} FCFA\n\n`;
    }

    const boxInfo = getBoxTotal();
    if (boxInfo.rodmanBoxes > 0 || boxInfo.coolbarBoxes > 0) {
      message += `💼 Option Boîtes (économies) :\n`;
      if (boxInfo.rodmanBoxes > 0) {
        const rodman = products.find((p) => p.id === 'rodman');
        message += `  - ${boxInfo.rodmanBoxes} boîte(s) RODMAN (10 vapes) : ${(boxInfo.rodmanBoxes * (rodman?.boxPrice || 0)).toLocaleString()} FCFA\n`;
      }
      if (boxInfo.coolbarBoxes > 0) {
        const coolbar = products.find((p) => p.id === 'coolbar');
        message += `  - ${boxInfo.coolbarBoxes} boîte(s) Coolbar (10 vapes) : ${(boxInfo.coolbarBoxes * (coolbar?.boxPrice || 0)).toLocaleString()} FCFA\n`;
      }
      message += `  Total avec boîtes : ${boxInfo.total.toLocaleString()} FCFA\n\n`;
    }

    message += `💰 Total : ${getTotal().toLocaleString()} FCFA\n\n`;
    message += `Merci de me confirmer la disponibilité et les modalités de paiement.`;

    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/779706850?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-dark-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center space-x-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span className="text-sm font-semibold text-primary">Commandes Professionnelles</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Commande <span className="text-primary">en Gros</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-4">
            Sélectionnez vos produits, choisissez vos saveurs et spécifiez les quantités. Profitez de nos tarifs préférentiels pour les commandes en gros.
          </p>
          <div className="inline-flex items-center space-x-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-semibold text-primary">Livraison en 45 minutes maximum partout à Dakar</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Products Selection */}
          <div className="lg:col-span-2 space-y-8">
            {products.map((product) => (
              <ProductWholesaleSelector
                key={product.id}
                product={product}
                onAddItem={addItem}
                selectedItems={wholesaleItems.filter((item) => item.productId === product.id)}
                onUpdateQuantity={updateQuantity}
              />
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass p-6 rounded-2xl border border-gray-700 sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">Résumé de la Commande</h2>

              {wholesaleItems.length === 0 ? (
                <div className="text-center py-8">
                  <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <p className="text-gray-400">Aucun article sélectionné</p>
                  <p className="text-gray-500 text-sm mt-2">Sélectionnez des produits ci-contre</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    {wholesaleItems.map((item) => {
                      const product = products.find((p) => p.id === item.productId);
                      if (!product) return null;
                      return (
                        <div key={`${item.productId}-${item.variant}`} className="bg-dark-100 p-4 rounded-xl">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <div className="font-semibold text-white">{product.name}</div>
                              <div className="text-sm text-gray-400">{item.variant}</div>
                            </div>
                            <button
                              onClick={() => updateQuantity(item.productId, item.variant, 0)}
                              className="text-red-500 hover:text-red-400"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                                className="w-8 h-8 bg-dark-200 border border-gray-700 text-white rounded-lg hover:bg-dark-300"
                              >
                                -
                              </button>
                              <span className="text-white font-bold w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                                className="w-8 h-8 bg-dark-200 border border-gray-700 text-white rounded-lg hover:bg-dark-300"
                              >
                                +
                              </button>
                            </div>
                            <div className="text-white font-bold">
                              {(product.price * item.quantity).toLocaleString()} FCFA
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="border-t border-gray-700 my-6"></div>

                  {/* Box Option */}
                  {(() => {
                    const boxInfo = getBoxTotal();
                    if (boxInfo.rodmanBoxes > 0 || boxInfo.coolbarBoxes > 0) {
                      return (
                        <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 p-4 rounded-xl mb-6">
                          <div className="text-sm text-gray-400 mb-2">Option Boîtes (économies)</div>
                          <div className="text-2xl font-bold text-primary mb-2">
                            {boxInfo.total.toLocaleString()} FCFA
                          </div>
                          <div className="text-xs text-gray-400">
                            {boxInfo.rodmanBoxes > 0 && `${boxInfo.rodmanBoxes} boîte(s) RODMAN`}
                            {boxInfo.rodmanBoxes > 0 && boxInfo.coolbarBoxes > 0 && ' + '}
                            {boxInfo.coolbarBoxes > 0 && `${boxInfo.coolbarBoxes} boîte(s) Coolbar`}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })()}

                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-semibold text-white">Total</span>
                    <span className="text-3xl font-bold text-primary">
                      {getTotal().toLocaleString()} FCFA
                    </span>
                  </div>

                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-gradient-to-r from-secondary to-primary text-white font-bold py-4 rounded-xl hover:from-secondary/90 hover:to-primary/90 transition-all shadow-lg flex items-center justify-center space-x-2"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>Envoyer la Commande</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProductWholesaleSelectorProps {
  product: Product;
  onAddItem: (productId: string, variant: string) => void;
  selectedItems: WholesaleItem[];
  onUpdateQuantity: (productId: string, variant: string, quantity: number) => void;
}

function ProductWholesaleSelector({
  product,
  onAddItem,
  selectedItems,
  onUpdateQuantity,
}: ProductWholesaleSelectorProps) {
  return (
    <div className="glass p-8 rounded-3xl border border-gray-700/50">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="relative w-full md:w-32 h-32 bg-gray-800 rounded-xl overflow-hidden flex-shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            quality={100}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
          <p className="text-gray-400 mb-4">{product.description}</p>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              <span className="font-semibold text-white">{product.price.toLocaleString()} FCFA</span> / unité
            </div>
            {product.boxPrice && (
              <div className="text-sm text-primary">
                Boîte {product.boxQuantity} : <span className="font-semibold">{product.boxPrice.toLocaleString()} FCFA</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-white font-semibold mb-4">Sélectionner les Saveurs</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {product.variants.map((variant) => {
            const selectedItem = selectedItems.find((item) => item.variant === variant);
            return (
              <div key={variant} className="relative">
                <button
                  onClick={() => onAddItem(product.id, variant)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    selectedItem
                      ? 'border-primary bg-primary/10 text-white'
                      : 'border-gray-700 bg-dark-100 text-gray-400 hover:border-gray-600 hover:bg-dark-200'
                  }`}
                >
                  <div className="font-medium">{variant}</div>
                  {selectedItem && (
                    <div className="text-xs text-primary mt-1">
                      {selectedItem.quantity} sélectionné(s)
                    </div>
                  )}
                </button>
                {selectedItem && (
                  <div className="absolute -top-2 -right-2 flex items-center space-x-1 bg-primary text-white rounded-full px-2 py-1 text-xs">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onUpdateQuantity(product.id, variant, selectedItem.quantity - 1);
                      }}
                      className="hover:bg-primary/80 rounded-full w-4 h-4 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="mx-1">{selectedItem.quantity}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onUpdateQuantity(product.id, variant, selectedItem.quantity + 1);
                      }}
                      className="hover:bg-primary/80 rounded-full w-4 h-4 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

