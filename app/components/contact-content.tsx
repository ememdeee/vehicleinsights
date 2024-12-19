'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, Send } from 'lucide-react'
import Link from 'next/link'
import FAQAccordionBoxed from './FAQAccordionBoxed'

export function ContactContent() {
  const [inquiryType, setInquiryType] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false) // New state to track form submission

  const faqs = [
    {
      question: "How do I get a vehicle history report?",
      answer: "To get a vehicle history report, you can use our online service. Simply enter the vehicle identification number (VIN) on our website, and you'll receive a comprehensive report detailing the vehicle's history, including accidents, ownership changes, and maintenance records."
    },
    {
      question: "What information is included in a window sticker?",
      answer: "A window sticker, also known as a Monroney label, typically includes information such as the vehicle's make, model, year, standard features, optional equipment, fuel economy ratings, pricing details (MSRP), and safety ratings. It provides a comprehensive overview of the vehicle's specifications and value."
    },
    {
      question: "How accurate is the information in your reports?",
      answer: "We strive to provide the most accurate information possible in our reports. Our data is sourced from various reliable databases, including government records, insurance companies, and auto auctions. However, we recommend using our reports as one of several tools in your decision-making process, as some information may not be immediately updated in all databases."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, we offer a satisfaction guarantee. If you're not satisfied with your report, you can request a refund within 30 days of your purchase. Please contact our customer support team with your order details, and they will assist you with the refund process."
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // Prevent default form submission
    setFormSubmitted(true) // Update state to show success message
    setTimeout(() => setFormSubmitted(false), 3000) // Optional: Hide message after 3 seconds
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">
            Contact Us
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            Get in Touch with 
          </h1>
          <p className="text-lg text-gray-600">
            We&apos;re here to help with any questions about our vehicle history reports or window sticker services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
                <Select value={inquiryType} onValueChange={setInquiryType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Inquiry Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="report">Vehicle History Report</SelectItem>
                    <SelectItem value="sticker">Window Sticker</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Your Message" rows={5} required />
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
              {formSubmitted && (
                <p className="mt-4 text-green-600 text-center font-medium">
                  Form submitted successfully!
                </p>
              )}
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>{process.env.NEXT_PUBLIC_WEBSITE_PHONE}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>{process.env.NEXT_PUBLIC_WEBSITE_EMAIL}</span>
                </div>
                {/* <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>123 Auto Lane, Car City, VH 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>Mon-Fri: 9am-6pm EST</span>
                </div> */}
              </CardContent>
            </Card>

            <FAQAccordionBoxed faqs={faqs} />
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our customer support team is available 24/7 to help you with any urgent inquiries.
          </p>
          <Link href={'https://direct.lc.chat/17516280/'}>
            <Button size="lg" variant="outline">
              Start Live Chat
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}