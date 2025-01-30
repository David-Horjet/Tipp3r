import Link from 'next/link'

const CTA = () => {
  return (
    <div className="bg-indigo-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to boost your earnings?</span>
          <span className="block">Start accepting crypto donations today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          Join thousands of content creators who are already benefiting from direct crypto donations. Its free to sign up, and you can start receiving donations in minutes.
        </p>
        <Link
          href="/login"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
        >
          Sign up for free
        </Link>
      </div>
    </div>
  )
}

export default CTA

