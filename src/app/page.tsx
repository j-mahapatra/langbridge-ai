import DotBackgroundContainer from '@/components/ui/DotBackgroundContainer';
import Link from 'next/link';

export default function Home() {
  return (
    <DotBackgroundContainer>
      <div className="flex w-full flex-col items-center">
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-8 pb-4">
          <span>Lang</span>
          <span className="text-primary">Bridge</span>
          <span>.AI</span>
        </p>
        <p className="text-xl sm:text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-8 pb-4">
          Bridge the language gap with the power of Artificial Intelligence
        </p>
        <div className="flex justify-center w-full py-8">
          <Link
            href={'/translate'}
            className="bg-primary p-2 rounded-sm hover:bg-blue-600 transition-all"
          >
            Start Translating
          </Link>
        </div>
      </div>
    </DotBackgroundContainer>
  );
}
