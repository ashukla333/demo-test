import Layout from "@/components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Play() {
  const router = useRouter();

  return (
    <Layout>
      <div className="text-center">
        <h2 className="text-xl font-bold">Live Satsang</h2>
        <Image
          src="/guru.jpg"
          alt="Guru"
          height={1000}
          width={1000}
          className="rounded-full w-24 h-24 mx-auto"
        />
        <div className="flex items-center justify-center mt-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Play
          </button>
        </div>
      </div>
    </Layout>
  );
}
