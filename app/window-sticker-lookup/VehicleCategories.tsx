'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { HoverToForm } from '../components/HoverToForm'

const categories = [
  {
    name: "Cars",
    image: "/Cars.png",
    buttonText: "View Car Window Sticker",
    // link: "/car-window-sticker"
  },
  {
    name: "SUVs and Pickups",
    image: "/SUVs and Pickup.png",
    buttonText: "View SUV Window Sticker",
    // link: "/suv-window-sticker"
  },
  {
    name: "Electric vehicles",
    image: "/Cars.png",
    buttonText: "View EV Window Sticker",
    // link: "/ev-window-sticker"
  },
  {
    name: "Classic cars",
    image: "/Classic.png",
    buttonText: "View Classic Car Window Sticker",
    // link: "/classic-car-window-sticker"
  },
  {
    name: "Trucks",
    image: "/Trucks.png",
    buttonText: "View Truck Window Sticker",
    // link: "/truck-window-sticker"
  },
  {
    name: "Motorcycles",
    image: "/Motorcycle.png",
    buttonText: "View Motorcycle Window Sticker",
    // link: "/motorcycle-window-sticker"
  }
]

export function VehicleCategories() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name)

  const activeTab = categories.find(category => category.name === activeCategory) || categories[0]

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold text-center mb-8">
        Find Window Stickers for all types of vehicles
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={category.name === activeCategory ? "default" : "outline"}
            className={`min-w-[140px] ${category.name === activeCategory ? "bg-blue-100 hover:bg-blue-200 text-blue-800" : ""}`}
            onClick={() => setActiveCategory(category.name)}
          >
            {category.name}
          </Button>
        ))}
      </div>
      <div className="mt-8 max-w-4xl mx-auto">
        <Image
          src={activeTab.image}
          alt={`${activeTab.name} Window Sticker`}
          width={800}
          height={600}
          className="w-full rounded-lg shadow-lg"
        />
        <div className="mt-4 text-center flex justify-center">
          <HoverToForm>
            <Button size="lg">
              {activeTab.buttonText}
            </Button>
          </HoverToForm>
        </div>
      </div>
    </section>
  )
}

