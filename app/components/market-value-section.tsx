import { Button } from "@/components/ui/button"
import { DollarSign, TrendingUp, BarChart3, Car } from 'lucide-react'
import { HoverToForm } from "./HoverToForm"

export function MarketValueSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Market Value: Discover What Your Car Is Truly Worth
            </h2>
            <p className="text-xl text-gray-600">
              Curious about your car&apos;s true value? Get a detailed breakdown of its current market worth, powered by accurate and up-to-date pricing insights. Whether you&apos;re selling, trading, or just exploring, we&apos;ll help you make informed and confident decisions every step of the way.
            </p>
            <div className="pt-4">
              <div className="flex space-x-4">
                <HoverToForm>
                  <Button>
                    <DollarSign className="mr-2 h-4 w-4" /> Get Value
                  </Button>
                </HoverToForm>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <TrendingUp className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Real-Time Data</h3>
              <p className="text-gray-600">Our valuations are based on the latest market trends and real-time data.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <BarChart3 className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Comprehensive Analysis</h3>
              <p className="text-gray-600">We consider multiple factors to give you the most accurate valuation possible.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <Car className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Vehicle-Specific</h3>
              <p className="text-gray-600">Our valuations are tailored to your specific make, model, and condition.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <DollarSign className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Maximize Your Value</h3>
              <p className="text-gray-600">Get tips on how to increase your car&apos;s value before selling or trading.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

