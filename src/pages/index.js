import Layout from '@/components/Layout';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { FiArrowDown } from 'react-icons/fi';

export default function Home() {
  const router = useRouter();
  const arrowRef = useRef(null);

  // Automatically navigate when scrolled to the bottom
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          router.push('/animate'); // Navigate when arrow is in view (bottom of the page)
        }
      },
      { threshold: 1.0 } // Trigger only when arrow is fully in view
    );

    if (arrowRef.current) {
      observer.observe(arrowRef.current);
    }

    return () => {
      if (arrowRef.current) {
        observer.unobserve(arrowRef.current);
      }
    };
  }, [router]);

  return (
    <Layout>
      <div className="relative flex flex-col justify-start items-center h-screen text-center bg-gray-900 text-white overflow-hidden">
        {/* Fixed Section for Title and Text */}
        <div className="mt-16">
          <h1 className="text-4xl font-bold">Welcome to the Divine Discourse</h1>
          <p className="text-lg mt-4">By Pujya Gurudevshri</p>
        </div>

        {/* Scrollable content area */}
        <div className="flex-grow overflow-auto mt-16">
          <p className="text-lg">Scroll Down to Continue</p>

          {/* Empty space to simulate scroll */}
          <div style={{ height: '150vh' }}></div>

          {/* Hidden arrow at the bottom to trigger navigation */}
          <div ref={arrowRef} className="opacity-0">
            <FiArrowDown size={50} />
          </div>
        </div>

        {/* Visible bouncing arrow */}
        <div className="absolute bottom-8">
          <FiArrowDown size={50} className="text-orange-500 animate-bounce" />
        </div>
      </div>
    </Layout>
  );
}
