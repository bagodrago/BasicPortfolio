import React from 'react'

const AboutDivider = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 mt-160 sm:mt-0">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Wide screens — vertical curve */}
        <path
          className="hidden xl:block"
          d="M 50,0 C 45,30 55,70 50,100 L 100,100 L 100,0 Z"
          fill="(var(--color-base-content)"
        />
        {/* Narrow screens — horizontal curve */}
        <path
          className="block xl:hidden"
          d="M 0,50 C 30,45 70,55 100,50 L 100,100 L 0,100 Z"
          fill="var(--color-base-content)"
        />
      </svg>
    </div>
  )
}

export default AboutDivider