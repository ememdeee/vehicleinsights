import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface VinLocationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const VinLocationPopup: React.FC<VinLocationPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-2" onClick={onClose}>
      <div className="bg-white rounded-lg p-4 max-w-4xl w-full relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <h2 className="text-xl font-bold mb-4 text-black">VIN Location</h2>
        <Image
          src="/how-to-find-the-vin-number.jpg"
          alt="VIN Location"
          width={400}
          height={300}
          layout="responsive"
        />
        <p className="mt-4 text-sm text-gray-600">
          The Vehicle Identification Number (VIN) can typically be found on the driver&apos;s side dashboard, visible through the windshield, or on the driver&apos;s side door jamb.
        </p>
      </div>
    </div>
  );
};

export default VinLocationPopup;

