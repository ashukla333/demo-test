import Layout from "@/components/Layout";


export default function End() {
  return (
    <Layout>
      <div className="text-center">
        <p className="text-xl font-bold">The session has ended.</p>
        <p>Thank you for attending.</p>
        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
          View Details
        </button>
      </div>
    </Layout>
  );
}
