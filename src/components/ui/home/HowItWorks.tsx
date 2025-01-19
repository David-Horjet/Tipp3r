import { Wallet, DollarSign, Gift } from 'lucide-react'

const steps = [
  {
    name: 'Create an account',
    description: 'Sign up and set up your creator profile in minutes.',
    icon: Wallet,
  },
  {
    name: 'Share your donation link',
    description: 'Get a unique link to share with your audience for easy donations.',
    icon: DollarSign,
  },
  {
    name: 'Receive crypto donations',
    description: 'Start receiving crypto donations directly from your fans.',
    icon: Gift,
  },
]

const HowItWorks = () => {
  return (
    <div className="py-20 bg-gray-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Start accepting crypto donations in 3 easy steps
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform makes it simple for content creators to start receiving cryptocurrency donations from their audience.
          </p>
        </div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {steps.map((step, index) => (
              <div key={step.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <step.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {index + 1}. {step.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{step.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks

