
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Waiting() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => prev + 1);
      if (step === 3) {
        router.push('/play');
      }
    }, 2000); // Each waiting step changes every 2 seconds
    return () => clearInterval(interval);
  }, [step]);

  return (
    <Layout>
      {step === 1 && <p>Waiting for translation...</p>}
      {step === 2 && <div className="w-24 h-24 bg-blue-400 rounded-full" />}
      {step === 3 && <div className="w-full h-full bg-blue-500" />}
    </Layout>
  );
}
