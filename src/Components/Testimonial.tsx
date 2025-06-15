import { Star } from "lucide-react"

export default function Testimonial() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-8">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-rose-900">
                            What Our Guests Say
                        </h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                            Don't just take our word for it. Here's what our guests have to say.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={`https://randomuser.me/api/portraits/men/${item * 10}.jpg`}
                                    alt="Avatar"
                                    width={50}
                                    height={50}
                                    className="rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-semibold text-rose-900">
                                        John Doe
                                    </h3>
                                    <p className="text-sm text-gray-500">New York, USA</p>
                                </div>
                            </div>
                            <div className="flex mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className="h-4 w-4 fill-rose-700 text-rose-800"
                                    />
                                ))}
                            </div>
                            <p className="text-gray-700">
                                "Amazing experience! The place was exactly as described,
                                clean and in a perfect location. Would definitely book
                                again."
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
