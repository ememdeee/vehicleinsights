'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Zap, ShieldCheck, BarChart2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const stickerFeatures = [
  {
    icon: FileText,
    title: "Comprehensive Details",
    description: "Full list of features, options, and specifications.",
    color: "text-blue-500"
  },
  {
    icon: Zap,
    title: "Performance Insights",
    description: "Engine specs, fuel economy, and more.",
    color: "text-blue-500"
  },
  {
    icon: ShieldCheck,
    title: "Build Trust",
    description: "Transparency that buyers appreciate and trust.",
    color: "text-blue-500"
  },
  {
    icon: BarChart2,
    title: "Value Justification",
    description: "Helps justify your asking price with facts.",
    color: "text-blue-500"
  }
]

export function WindowStickerSectionLayout() {
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % stickerFeatures.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-12">
          Window Stickers: Empowering Buyers with Insights
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl text-gray-600">
              A window sticker is more than just a label—it&apos;s a gateway to everything buyers need to know about your car. From features and options to performance details and history, it provides a clear, comprehensive snapshot that builds confidence and streamlines the buying process.
            </p>
            <div className="relative bg-gray-100 rounded-lg overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-6 bg-white flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Explore the Sticker</h3>
                <p className="text-gray-700 mb-4">Discover how a window sticker provides crucial information to potential buyers.</p>
                <p className="text-lg font-semibold text-blue-600">
                  {stickerFeatures[activeFeature].title}
                </p>
              </div>
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <Image
                  src="/Cars.png"
                  alt="Interactive Window Sticker"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Key Benefits of Window Stickers</h3>
            <div className="grid gap-6">
              {stickerFeatures.map((feature, index) => (
                <Card key={index} className={`transition-all duration-300 ${index === activeFeature ? 'scale-105 shadow-lg' : 'opacity-70'}`}>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    <div>
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Link href={'/window-sticker'}>
                <Button size="lg" className="mt-4">
                  Get Your Window Sticker
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

