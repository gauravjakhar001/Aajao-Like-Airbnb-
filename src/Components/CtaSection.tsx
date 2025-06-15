export default function CtaSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-rose-900 to-rose-800">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                            Ready to Find Your Perfect Stay?
                        </h2>
                        <p className="mx-auto max-w-[700px] text-purple-100 md:text-xl">
                            Join thousands of happy travelers who have found their ideal accommodations with aajao.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 min-[400px]:flex-row">
                        <button className="bg-white text-rose-800 hover:bg-gray-200 px-8 py-3 text-lg font-semibold transition-all">
                            Sign Up Now
                        </button>
                        <button className="border border-purple-200 text-white hover:bg-rose-700 px-8 py-3 text-lg font-semibold transition-all">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
