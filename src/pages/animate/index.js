
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Animate() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/enter-details');
    }, 2000); // Transition after 2 seconds
  }, []);

  return (
    <Layout>
      <div className="bg-gradient-to-b from-gray-200 to-gray-400 w-full h-full" />
    </Layout>
  );
}
