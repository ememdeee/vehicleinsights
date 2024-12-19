'use client'
declare function btoa(data: string): string;


import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface PricingPopupProps {
  isOpen: boolean
  onClose: () => void
  code: string
}

export function PricingPopup({ isOpen, onClose, code }: PricingPopupProps) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(`Submitted code: ${code}, Email: ${email}`)

    // Create form data
    const formData = new FormData()
    formData.append('email', email)
    formData.append('cart_plan', code)
    formData.append('vin', 'credit')
    formData.append('phone', '-')
    formData.append('payment_gateway', 'default')

    // Convert FormData to array of {name, value} objects
    const formDataArray = Array.from(formData.entries()).map(([name, value]) => ({ name, value }))

    console.log(formDataArray)

    // Encode form data
    const encodedFormData = btoa(JSON.stringify(formDataArray))

    // Create the URL
    const url = new URL('https://detailedvehiclehistory.com/vin-check/confirm')
    url.searchParams.append('new-data', encodedFormData)

    // Add the ref parameter
    url.searchParams.append('ref', 'testing-site')

    // Redirect
    window.location.href = url.toString()

    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enter your email</DialogTitle>
          <DialogDescription>
            Please provide your email to get your report.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <DialogClose asChild>
              <Button type="button" variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}