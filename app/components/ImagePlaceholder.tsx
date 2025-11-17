"use client";

import Image from "next/image";
import { useState } from "react";

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

const ImagePlaceholder = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  priority = false,
}: ImagePlaceholderProps) => {
  const [hasError, setHasError] = useState(false);

  // If image doesn't exist or has error, show a placeholder
  if (!src.startsWith("/") && !src.startsWith("http") || hasError) {
    return (
      <div
        className={`bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center ${className}`}
        style={{ width: width, height: height }}
      >
        <div className="text-center p-4">
          <svg className="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-gray-500 text-sm block">{alt}</span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => setHasError(true)}
      unoptimized={true}
    />
  );
};

export default ImagePlaceholder;
