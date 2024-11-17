"use client";

import { useState } from "react";
import { Heart, SnowflakeIcon } from "lucide-react";
import type { NextPage } from "next";

const Marketplace: NextPage = () => {
  const [snowmen] = useState([
    {
      id: 1,
      name: "Chilly Charlie",
      price: 250,
      rarity: "Common",
      imageUrl:
        "https://olive-exceptional-viper-654.mypinata.cloud/ipfs/QmPYamu9UBXecU47etWpeYZjN4uWDD82F8GwRGB953sWHb",
    },
    {
      id: 2,
      name: "Frostbite Fred",
      price: 500,
      rarity: "Rare",
      imageUrl:
        "https://olive-exceptional-viper-654.mypinata.cloud/ipfs/QmTK3SDUKWjcnJotvh8XoNP25g3vrEcJY549dv61BDD1Bh",
    },
    {
      id: 3,
      name: "Princess Powder",
      price: 1000,
      rarity: "Legendary",
      imageUrl:
        "https://olive-exceptional-viper-654.mypinata.cloud/ipfs/QmWaJDA4TnEkZzq6EyEsWfc3PiQZ9wh4PiBbELf9XyCYUA",
    },
  ]);

  const getRarityColor = rarity => {
    switch (rarity.toLowerCase()) {
      case "common":
        return "bg-gray-500";
      case "rare":
        return "bg-blue-500";
      case "legendary":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frosty Friends Marketplace</h1>
          <p className="text-lg text-gray-600">Adopt your perfect frosty companion today!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {snowmen.map(snowman => (
            <div
              key={snowman.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative">
                <img src={snowman.imageUrl} alt={snowman.name} className="w-full h-64" />
                <span
                  className={`absolute top-4 right-4 ${getRarityColor(snowman.rarity)} 
                    text-white px-3 py-1 rounded-full text-sm font-semibold`}
                >
                  {snowman.rarity}
                </span>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <SnowflakeIcon className="text-blue-500 h-5 w-5" />
                    <span className="font-bold text-xl">{snowman.price}</span>
                    <span className="text-gray-500">crystals</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <button
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg 
                      transition-colors duration-200"
                  >
                    Adopt Now
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
