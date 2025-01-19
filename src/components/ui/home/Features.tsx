import { Wallet, DollarSign, RefreshCw } from 'lucide-react'

const features = [
  {
    name: 'Multi-app wallet',
    description: 'Streamline your transactions with our integrated multi-app wallet.',
    icon: Wallet,
  },
  {
    name: 'Fiat on-ramp',
    description: 'Easy conversion from traditional currency to crypto for donations.',
    icon: DollarSign,
  },
  {
    name: 'In-app swaps',
    description: 'Quickly convert donations into stablecoins or other cryptocurrencies.',
    icon: RefreshCw,
  },
]

const Features = () => {
  return (
    <div className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to receive crypto donations
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform provides all the tools content creators need to easily accept and manage cryptocurrency donations.
          </p>
        </div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Features

