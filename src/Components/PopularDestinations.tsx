import { ChevronRight, Heart, Star } from "lucide-react"

export default function PopularDestinations() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-22">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-rose-900">
                            Popular Destinations
                        </h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                            Explore our most booked destinations and find your next adventure.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {/* Villa 1 */}
                    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                        <div className="absolute right-3 top-3 z-10">
                            <button
                                className="rounded-full bg-white/80 text-rose-700 hover:bg-white hover:text-rose-900 p-2"
                                aria-label="Add to favorites"
                            >
                                <Heart className="h-5 w-5" />
                            </button>
                        </div>
                        <a href="#" className="block">
                            <img
                                src="https://fhahoreca.com/wp-content/uploads/2024/02/Outdoor-Spaces-and-Views.jpg"
                                alt="Luxury Villa 1"
                                className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="p-4 bg-white">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-rose-900">Luxury Villa 1</h3>
                                    <div className="flex items-center">
                                        <Star className="h-4 w-4 fill-rose-700 text-rose-800" />
                                        <span className="ml-1 text-sm font-medium">4.9</span>
                                    </div>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">Miami, USA</p>
                                <p className="mt-2 font-medium text-rose-900">
                                    $150 <span className="text-sm font-normal text-gray-500">/ night</span>
                                </p>
                            </div>
                        </a>
                    </div>

                    {/* Villa 2 */}
                    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                        <div className="absolute right-3 top-3 z-10">
                            <button
                                className="rounded-full bg-white/80 text-rose-700 hover:bg-white hover:text-rose-900 p-2"
                                aria-label="Add to favorites"
                            >
                                <Heart className="h-5 w-5" />
                            </button>
                        </div>
                        <a href="#" className="block">
                            <img
                                src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-22382,resizemode-75,msid-111780102/news/international/world-news/india-has-the-worlds-second-most-expensive-house-check-the-of-the-top-10-costliest-homes.jpg"
                                // src="https://media.istockphoto.com/id/511119416/photo/indian-landmark-gadi-sagar-in-rajasthan.jpg?s=612x612&w=0&k=20&c=dO7TbXh3sd6_QmgcF_nYi6ynyIAvPI5STavwzCDyWTI="
                                alt="Luxury Villa 2"
                                className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="p-4 bg-white">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-rose-900">Luxury Villa 2</h3>
                                    <div className="flex items-center">
                                        <Star className="h-4 w-4 fill-rose-700 text-rose-800" />
                                        <span className="ml-1 text-sm font-medium">4.8</span>
                                    </div>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">Los Angeles, USA</p>
                                <p className="mt-2 font-medium text-rose-900">
                                    $130 <span className="text-sm font-normal text-gray-500">/ night</span>
                                </p>
                            </div>
                        </a>
                    </div>

                    {/* Villa 3 */}
                    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                        <div className="absolute right-3 top-3 z-10">
                            <button
                                className="rounded-full bg-white/80 text-rose-900 hover:bg-white hover:text-rose-900 p-2"
                                aria-label="Add to favorites"
                            >
                                <Heart className="h-5 w-5" />
                            </button>
                        </div>
                        <a href="#" className="block">
                            <img
                                src="https://do84cgvgcm805.cloudfront.net/article/883/1200/1e9dc479e8ef397eaec27b86bd55ac00d5295edc2516ac0766a3e6809a7b4274.jpg"
                                // src="https://plus.unsplash.com/premium_photo-1661930618375-aafabc2bf3e7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWElMjB0b3VyaXNtfGVufDB8fDB8fHww"
                                alt="Luxury Villa 3"
                                className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="p-4 bg-white">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-rose-900">Luxury Villa 3</h3>
                                    <div className="flex items-center">
                                        <Star className="h-4 w-4 fill-rose-700 text-rose-800" />
                                        <span className="ml-1 text-sm font-medium">4.7</span>
                                    </div>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">Paris, France</p>
                                <p className="mt-2 font-medium text-rose-900">
                                    $200 <span className="text-sm font-normal text-gray-500">/ night</span>
                                </p>
                            </div>
                        </a>
                    </div>

                    {/* Villa 4 */}
                    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                        <div className="absolute right-3 top-3 z-10">
                            <button
                                className="rounded-full bg-white/80 text-rose-900 hover:bg-white hover:text-rose-900 p-2"
                                aria-label="Add to favorites"
                            >
                                <Heart className="h-5 w-5" />
                            </button>
                        </div>
                        <a href="#" className="block">
                            <img
                                src="https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fm.sothebysrealty.com%2F1050i215%2F8pvjppnnnqk7mcakkqq6skcr32i215&option=N&h=472&permitphotoenlargement=false"
                                // src="https://www.treebo.com/blog/wp-content/uploads/2017/12/Beach-destinations-in-India_1.jpg"
                                alt="Luxury Villa 4"
                                className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="p-4 bg-white">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-rose-900">Luxury Villa 4</h3>
                                    <div className="flex items-center">
                                        <Star className="h-4 w-4 fill-rose-700 text-rose-800" />
                                        <span className="ml-1 text-sm font-medium">5.0</span>
                                    </div>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">Santorini, Greece</p>
                                <p className="mt-2 font-medium text-rose-900">
                                    $180 <span className="text-sm font-normal text-gray-500">/ night</span>
                                </p>
                            </div>
                        </a>
                    </div>

                    {/* Villa 5 */}
                    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                        <div className="absolute right-3 top-3 z-10">
                            <button
                                className="rounded-full bg-white/80 text-rose-900 hover:bg-white hover:text-rose-900 p-2"
                                aria-label="Add to favorites"
                            >
                                <Heart className="h-5 w-5" />
                            </button>
                        </div>
                        <a href="#" className="block">
                            <img
                                src="https://www.luxuryvillasstay.com/wp-content/uploads/2023/05/luxury1.jpg"
                                alt="Luxury Villa 5"
                                className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="p-4 bg-white">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-rose-900">Luxury Villa 5</h3>
                                    <div className="flex items-center">
                                        <Star className="h-4 w-4 fill-rose-700 text-rose-800" />
                                        <span className="ml-1 text-sm font-medium">4.9</span>
                                    </div>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">Bora Bora, French Polynesia</p>
                                <p className="mt-2 font-medium text-rose-900">
                                    $250 <span className="text-sm font-normal text-gray-500">/ night</span>
                                </p>
                            </div>
                        </a>
                    </div>

                    {/* Villa 6 */}
                    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                        <div className="absolute right-3 top-3 z-10">
                            <button
                                className="rounded-full bg-white/80 text-rose-700 hover:bg-white hover:text-rose-900 p-2"
                                aria-label="Add to favorites"
                            >
                                <Heart className="h-5 w-5" />
                            </button>
                        </div>
                        <a href="#" className="block">
                            <img
                                src="https://www.luxurymykonos.villas/wp-content/uploads/2018/12/luxury-mykonos-villas.jpg"
                                alt="Luxury Villa 6"
                                className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="p-4 bg-white">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-rose-900">Luxury Villa 6</h3>
                                    <div className="flex items-center">
                                        <Star className="h-4 w-4 fill-rose-700 text-rose-800" />
                                        <span className="ml-1 text-sm font-medium">4.7</span>
                                    </div>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">Tokyo, Japan</p>
                                <p className="mt-2 font-medium text-rose-900">
                                    $210 <span className="text-sm font-normal text-gray-500">/ night</span>
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <a
                        href="#"
                        className="inline-flex items-center border border-rose-200 text-rose-700 hover:bg-rose-50 px-4 py-2 rounded-md font-medium"
                    >
                        View All Listings <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    )
}
