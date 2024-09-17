import InputBox from '@/components/input-box/InputBox';
import OutputBox from '@/components/output-box/OutputBox';
import DotBackgroundContainer from '@/components/ui/DotBackgroundContainer';
import React from 'react';

export default function Translate() {
  return (
    <DotBackgroundContainer>
      <div className="grid w-full h-full p-5 sm:p-16 grid-rows-2 sm:grid-rows-1 grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 place-items-center">
        <div className="row-span-1 w-full h-full flex justify-center items-center">
          <InputBox />
        </div>
        <div className="row-span-1 w-full h-full flex justify-center items-center">
          <OutputBox />
        </div>
      </div>
    </DotBackgroundContainer>
  );
}
