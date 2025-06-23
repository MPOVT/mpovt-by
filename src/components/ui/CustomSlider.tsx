
import React from "react";
import { cn } from "@/lib/utils";

interface CustomSliderProps {
  value: number[];
  onValueChange: (value: number[]) => void;
  max?: number;
  min?: number;
  step?: number;
  className?: string;
}

export const CustomSlider: React.FC<CustomSliderProps> = ({
  value,
  onValueChange,
  max = 100,
  min = 0,
  step = 1,
  className
}) => {
  const percentage = ((value[0] - min) / (max - min)) * 100;

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    onValueChange([newValue]);
  };

  return (
    <div className={cn("relative w-full", className)}>
      {/* Track */}
      <div className="relative h-2 w-full">
        <div className="absolute inset-0 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-white/30 dark:border-white/10">
          {/* Fill */}
          <div 
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-primary to-orange-400 transition-all duration-300 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
        
        {/* Thumb */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-2 border-primary shadow-lg cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:shadow-xl hover:shadow-primary/50"
          style={{ left: `${percentage}%`, transform: `translate(-50%, -50%)` }}
        />
      </div>
      
      {/* Hidden input */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[0]}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  );
};
