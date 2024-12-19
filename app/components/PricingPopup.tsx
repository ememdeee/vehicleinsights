import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import SiteForm from './SiteForm'

interface PricingPopupProps {
  isOpen: boolean
  onClose: () => void
  code: string
}

export function PricingPopup({ isOpen, onClose, code }: PricingPopupProps) {

  console.log(code);
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[825px]">
        <DialogHeader>
          <DialogTitle>Enter your email</DialogTitle>
          <DialogDescription>
            Please provide your email to get your report.
          </DialogDescription>
        </DialogHeader>
        <SiteForm reportTab={false} reportStyle='basic' />
      </DialogContent>
    </Dialog>
  )
}