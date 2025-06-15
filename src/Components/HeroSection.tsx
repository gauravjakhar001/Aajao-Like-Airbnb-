import { Search, MapPin, Calendar, Users } from "lucide-react"

export default function HeroSection() {
    return (
        <section className="w-full bg-rose-900 md:py-16 lg:py-20">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-6 text-center text-white">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                            Find Your Perfect Stay
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-200 opacity-90 md:text-xl">
                            Discover amazing places to stay around the world with aajao.
                        </p>
                    </div>
                    <div className="w-full max-w-3xl mx-auto mt-8">
                        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div className="flex items-center space-x-3 border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-4">
                                    <MapPin className="h-5 w-5 text-rose-900" />
                                    <input
                                        type="text"
                                        placeholder="Where are you going?"
                                        className="w-full border-0 focus:outline-none text-gray-700"
                                    />
                                </div>
                                <div className="flex items-center space-x-3 border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-4">
                                    <Calendar className="h-5 w-5 text-rose-900" />
                                    <input
                                        type="text"
                                        placeholder="Check in"
                                        className="w-full border-0 focus:outline-none text-gray-700"
                                    />
                                </div>
                                <div className="flex items-center space-x-3 border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-4">
                                    <Calendar className="h-5 w-5 text-rose-900" />
                                    <input
                                        type="text"
                                        placeholder="Check out"
                                        className="w-full border-0 focus:outline-none text-gray-700"
                                    />
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Users className="h-5 w-5 text-rose-900" />
                                    <input
                                        type="text"
                                        placeholder="Guests"
                                        className="w-full border-0 focus:outline-none text-gray-700"
                                    />
                                </div>
                            </div>
                            <div className="mt-6 flex justify-center">
                                <button className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-900 to-rose-600 text-white font-semibold rounded-lg hover:from-rose-800 hover:to-rose-600">
                                    <Search className="h-4 w-4" /> Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
