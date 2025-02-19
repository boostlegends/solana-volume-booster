
import { motion } from "framer-motion";
import { Layers, LineChart, Shield, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="container px-6 pt-32 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="px-3 py-1 text-sm font-medium bg-black text-white rounded-full inline-block mb-6">
            Premium Solana Services
          </span>
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Increase Your Token's Trading Activity
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional volume boosting services to enhance your token's presence on Solana
          </p>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://boostlegends.com/solana-volume-booster"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-black rounded-lg hover:bg-gray-900 transition-colors"
          >
            Get Started
          </motion.a>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="container px-6 py-24 bg-white rounded-3xl my-12">
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full inline-block mb-6">
            Benefits
          </span>
          <h2 className="text-4xl font-bold mb-4">Why Choose Our Service</h2>
          <p className="text-xl text-gray-600">
            Experience the advantages of professional volume management
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              <benefit.icon className="w-12 h-12 mb-6 text-black" />
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-6 py-24">
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full inline-block mb-6">
            Features
          </span>
          <h2 className="text-4xl font-bold mb-4">Premium Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive solutions for your token's success
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <ul className="space-y-4">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5" />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Boost Your Volume?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join successful projects that have enhanced their market presence
          </p>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://boostlegends.com/solana-volume-booster"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-black rounded-lg hover:bg-gray-900 transition-colors"
          >
            Get Started Now
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

const benefits = [
  {
    title: "Enhanced Trading Activity",
    description: "Increase your token's daily trading volume and market presence",
    icon: LineChart,
  },
  {
    title: "Market Confidence",
    description: "Build trust through consistent and strategic trading patterns",
    icon: Shield,
  },
  {
    title: "Professional Service",
    description: "Expert market makers and 24/7 monitoring of your token",
    icon: Users,
  },
  {
    title: "Strategic Implementation",
    description: "Carefully planned execution to maximize impact and stability",
    icon: Layers,
  },
];

const features = [
  {
    title: "Volume Management",
    points: [
      "Professional market making services",
      "Strategic volume implementation",
      "Real-time monitoring and adjustments",
      "Performance tracking and reporting",
    ],
  },
  {
    title: "Quality Assurance",
    points: [
      "24/7 system monitoring",
      "Risk management protocols",
      "Compliant trading practices",
      "Regular performance reviews",
    ],
  },
];

export default Index;
