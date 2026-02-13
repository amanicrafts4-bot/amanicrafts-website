"use client";

import { CldUploadWidget } from 'next-cloudinary';
import { Button } from '@/components/ui/button'; // Or your custom button
import { ImagePlus, Trash } from 'lucide-react';
import Image from 'next/image';

interface ImageUploadProps {
  value: string[];
  onChange: (url: string) => void;
  onRemove: (url: string) => void;
}

export default function ImageUpload({ value, onChange, onRemove }: ImageUploadProps) {
  const onUpload = (result: any) => {
    // result.info.secure_url is the permanent link to the image
    onChange(result.info.secure_url);
  };

  return (
    <div className="space-y-4 w-full">
      <div className="flex items-center gap-4 flex-wrap">
        {value.map((url) => (
          <div key={url} className="relative w-[150px] h-[150px] rounded-2xl overflow-hidden shadow-sm border">
            <div className="z-10 absolute top-2 right-2">
              <button
                type="button"
                onClick={() => onRemove(url)}
                className="bg-red-500 text-white p-1.5 rounded-lg hover:bg-red-600 transition-colors"
              >
                <Trash size={16} />
              </button>
            </div>
            <Image fill className="object-cover" alt="Product image" src={url} />
          </div>
        ))}
      </div>

      <CldUploadWidget 
        onSuccess={onUpload} 
        uploadPreset="your_unsigned_preset_name"
        options={{ maxFiles: 5 }} // Restrict to 5 images per product
      >
        {({ open }) => {
          return (
            <button
              type="button"
              onClick={() => open()}
              className="flex items-center justify-center gap-2 border-2 border-dashed border-slate-200 w-full py-10 rounded-2xl hover:bg-slate-50 transition-all text-slate-500 font-medium"
            >
              <ImagePlus size={20} />
              Upload Images (Drag & Drop)
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}
