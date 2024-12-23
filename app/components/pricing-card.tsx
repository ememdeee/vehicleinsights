'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Car, Clock, Shield, Users, AlertTriangle, Activity, Gavel, FileText, Calendar, Bell, Check } from 'lucide-react'
import { PricingPopup } from './PricingPopup'

type CardStyle = 'vehicleinsights' | 'motorcyclecheck' | 'canadawebsite'

const pricingOptions = [
  {
    title: "1 Report",
    price: "$19.99",
    description: "Complete Report for 1 Vehicle",
    buttonText: "Get Your Report",
    code: "DVH1"
  },
  {
    title: "2 Reports",
    price: "$29.99",
    description: "Complete Report for 2 Vehicles",
    buttonText: "Get Your Reports",
    code: "DVH2"
  },
  {
    title: "Unlimited Reports",
    price: "$49.99/month",
    description: "Annual Subscription",
    buttonText: "Start Subscription",
    code: "DVHYRS"
  }
]

const features = [
  { icon: Car, text: "Complete Report" },
  { icon: Clock, text: "Report Never Expires" },
  { icon: Shield, text: "Title Brand Verification" },
  { icon: Users, text: "Ownership Records" },
  { icon: AlertTriangle, text: "Accident Information" },
  { icon: Activity, text: "Vehicle Usage" },
  { icon: Gavel, text: "Auction Records" },
  { icon: FileText, text: "Detailed History Verification" },
  { icon: Calendar, text: "Event Verification" },
  { icon: Bell, text: "Recalls" },
]

const getThemeColors = (style: CardStyle) => {
  switch (style) {
    case 'vehicleinsights':
      return {
        bgGradient: 'from-blue-50 to-blue-100',
        buttonBg: 'bg-blue-600 hover:bg-blue-700',
        textColor: 'text-blue-600',
        cardBg: ['bg-white', 'bg-gray-50', 'bg-gray-100']
      }
    case 'motorcyclecheck':
      return {
        bgGradient: 'from-gray-800 to-gray-900',
        buttonBg: 'bg-blue-800 hover:bg-blue-900',
        textColor: 'text-blue-400',
        cardBg: ['bg-gray-800', 'bg-gray-700', 'bg-gray-600']
      }
    case 'canadawebsite':
      return {
        bgGradient: 'from-red-50 to-red-100',
        buttonBg: 'bg-red-600 hover:bg-red-700',
        textColor: 'text-red-600',
        cardBg: ['bg-white', 'bg-red-50', 'bg-red-100']
      }
  }
}

interface PricingCardsProps {
  cardStyle?: CardStyle
}

export function PricingCards({ cardStyle = 'vehicleinsights' }: PricingCardsProps) {
  const [selectedCode, setSelectedCode] = useState<string | null>(null)
  const themeColors = getThemeColors(cardStyle)

  const handleOpenPopup = (code: string) => {
    setSelectedCode(code)
  }

  const handleClosePopup = () => {
    setSelectedCode(null)
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingOptions.map((option, index) => (
          <Card key={index} className={`w-full overflow-hidden transition-all duration-300 hover:shadow-lg ${themeColors.cardBg[index]}`}>
            <CardHeader className={`text-center p-6 bg-gradient-to-br ${themeColors.bgGradient}`}>
              <div className={`text-2xl font-bold mb-2 ${themeColors.textColor}`}>{option.title}</div>
              <div className={`text-4xl font-bold ${themeColors.textColor}`}>
                {option.price}
              </div>
              <p className={`text-sm mt-2 ${cardStyle === 'motorcyclecheck' ? 'text-gray-300' : 'text-gray-600'}`}>
                {option.description}
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    {index === 2 ? (
                      <Check className={`w-5 h-5 ${themeColors.textColor} mr-3 flex-shrink-0`} />
                    ) : (
                      <feature.icon className={`w-5 h-5 mr-3 flex-shrink-0 ${cardStyle === 'motorcyclecheck' ? 'text-gray-400' : 'text-gray-600'}`} />
                    )}
                    <span className={cardStyle === 'motorcyclecheck' ? 'text-gray-300' : ''}>{feature.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button 
                className={`w-full text-white transition-all duration-300 ${themeColors.buttonBg}`}
                size="lg"
                onClick={() => handleOpenPopup(option.code)}
              >
                {option.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <PricingPopup 
        isOpen={!!selectedCode}
        onClose={handleClosePopup}
        code={selectedCode || ''}
      />
    </>
  )
}