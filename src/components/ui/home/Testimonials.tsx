import Image from 'next/image'

const testimonials = [
  {
    content: "CryptoGive has revolutionized how I receive support from my audience. It's fast, easy, and the fees are minimal!",
    author: {
      name: 'Sarah Johnson',
      role: 'Twitch Streamer',
      imageUrl: '/placeholder.svg?height=400&width=400',
    },
  },
  {
    content: "As an independent artist, every penny counts. CryptoGive's low fees and easy-to-use platform have been a game-changer for me.",
    author: {
      name: 'Michael Chen',
      role: 'Digital Artist',
      imageUrl: '/placeholder.svg?height=400&width=400',
    },
  },
  {
    content: "I love how CryptoGive allows my international fans to support me without worrying about currency conversion fees. It's truly global!",
    author: {
      name: 'Elena Rodriguez',
      role: 'YouTube Content Creator',
      imageUrl: '/placeholder.svg?height=400&width=400',
    },
  },
]

const Testimonials = () => {
  return (
    <section className="py-12 bg-white overflow-hidden md:py-20 lg:py-24" id="testimonials">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by creators worldwide
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            Hear from content creators who have transformed their donation experience with CryptoGive.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.name} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-base text-gray-600">&ldquo;{testimonial.content}&rdquo;</p>
                </div>
                <div className="px-4 py-4 sm:px-6 flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-10 w-10 rounded-full"
                      src={testimonial.author.imageUrl || "/placeholder.svg"}
                      alt=""
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{testimonial.author.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.author.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

