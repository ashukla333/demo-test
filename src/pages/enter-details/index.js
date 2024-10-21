// src/pages/enter-details.js
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';


export default function EnterDetails() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission (redirect or show message)
  };

  return (
    <Layout>
      <motion.div
        className="flex flex-col items-center justify-center w-full h-full p-6 bg-gradient-to-b from-gray-900 to-blue-700"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Top Section */}
        <div className="text-center">
          <h2 className="text-white text-xl font-bold">
            The Translation That <br /> Transforms & Transcends
          </h2>
          <p className="mt-4 text-gray-300">Enter Your Details</p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 w-full max-w-md p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg space-y-4"
        >
          <div className="space-y-3">
            <div>
              <input
                {...register("fullName", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Full Name"
              />
              {errors.fullName && <span className="text-red-500 text-sm">Full Name is required</span>}
            </div>

            <div className="flex items-center space-x-2">
              <select
                {...register("countryCode", { required: true })}
                className="px-4 py-2 border border-gray-300 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
              </select>
              <input
                {...register("mobileNumber", { required: true })}
                className="flex-1 px-4 py-2 border border-gray-300 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Mobile Number"
              />
              {errors.mobileNumber && <span className="text-red-500 text-sm">Mobile Number is required</span>}
            </div>

            <div>
              <input
                {...register("email", { required: true })}
                type="email"
                className="w-full px-4 py-2 border border-gray-300 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Email ID"
              />
              {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
            </div>

            <div>
              <input
                {...register("city", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="City"
              />
              {errors.city && <span className="text-red-500 text-sm">City is required</span>}
            </div>
          </div>

          {/* Language Dropdown */}
          <div className="mt-4">
            <select
              {...register("language", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Hindi">Hindi</option>
            </select>
            {errors.language && <span className="text-red-500 text-sm">Language is required</span>}
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>

        {/* Rotating Circle Animation */}
        <motion.div
          className="w-20 h-20 mt-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        />
      </motion.div>
    </Layout>
  );
}
