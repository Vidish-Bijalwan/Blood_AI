"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, MapPin, Clock, Calendar, Droplet, Filter, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

export default function FindCenterPage() {
  const [distance, setDistance] = useState([10])

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-pink-300/20 dark:from-yellow-900/20 dark:to-pink-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">Find a Donation Center</h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              Locate the nearest blood donation center and schedule your appointment today.
            </p>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
              <div className="flex items-center flex-1 w-full">
                <MapPin className="text-yellow-500 dark:text-yellow-400 mr-2 flex-shrink-0" />
                <Input
                  placeholder="Enter your location or zip code"
                  className="border-none shadow-none bg-transparent"
                />
              </div>
              <div className="flex items-center flex-1 w-full">
                <Calendar className="text-yellow-500 dark:text-yellow-400 mr-2 flex-shrink-0" />
                <Input placeholder="Select date (optional)" className="border-none shadow-none bg-transparent" />
              </div>
              <div className="flex items-center flex-1 w-full">
                <Droplet className="text-yellow-500 dark:text-yellow-400 mr-2 flex-shrink-0" />
                <Input placeholder="Blood type (optional)" className="border-none shadow-none bg-transparent" />
              </div>
              <Button className="bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white w-full md:w-auto transition-all duration-300 transform hover:scale-105">
                <Search className="mr-2" /> Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Results */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters */}
            <div className="lg:w-1/4">
              <Card className="bg-white dark:bg-gray-800 shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
                    <Filter className="h-5 w-5 mr-2" /> Filters
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">Distance</h3>
                      <div className="space-y-2">
                        <Slider value={distance} onValueChange={setDistance} max={50} step={1} />
                        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                          <span>0 miles</span>
                          <span>{distance[0]} miles</span>
                          <span>50 miles</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">Donation Types</h3>
                      <div className="space-y-2">
                        {["Whole Blood", "Platelets", "Plasma", "Double Red Cells"].map((type) => (
                          <div key={type} className="flex items-center">
                            <Checkbox id={`type-${type}`} />
                            <label htmlFor={`type-${type}`} className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">Availability</h3>
                      <div className="space-y-2">
                        {["Today", "Tomorrow", "This Week", "Weekend", "Next Week"].map((time) => (
                          <div key={time} className="flex items-center">
                            <Checkbox id={`time-${time}`} />
                            <label htmlFor={`time-${time}`} className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                              {time}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">Amenities</h3>
                      <div className="space-y-2">
                        {["Free Parking", "Wheelchair Accessible", "WiFi Available", "Child Friendly"].map(
                          (amenity) => (
                            <div key={amenity} className="flex items-center">
                              <Checkbox id={`amenity-${amenity}`} />
                              <label
                                htmlFor={`amenity-${amenity}`}
                                className="ml-2 text-sm text-gray-600 dark:text-gray-400"
                              >
                                {amenity}
                              </label>
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white">
                      Apply Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map and Results */}
            <div className="lg:w-3/4">
              {/* Map */}
              <div className="h-96 bg-gray-100 dark:bg-gray-700 rounded-lg mb-8 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Interactive map will be displayed here</p>
              </div>

              {/* Results */}
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Donation Centers Near You</h2>

              <div className="space-y-6">
                {[1, 2, 3, 4, 5].map((center) => (
                  <Card
                    key={center}
                    className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white dark:bg-gray-800"
                  >
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 lg:w-1/4">
                          <Image
                            src={`/placeholder.svg?height=200&width=300&text=Center+${center}`}
                            alt={`Donation Center ${center}`}
                            width={300}
                            height={200}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3 lg:w-3/4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                              City Blood Center {center}
                            </h3>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-gray-300 dark:text-gray-600" />
                              <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">(42)</span>
                            </div>
                          </div>

                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            123 Main Street, Cityville, State 12345
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge
                              variant="outline"
                              className="bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800"
                            >
                              2.{center} miles away
                            </Badge>
                            <Badge
                              variant="outline"
                              className="bg-pink-50 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400 border-pink-200 dark:border-pink-800"
                            >
                              Appointments Available
                            </Badge>
                            {center % 2 === 0 && (
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800"
                              >
                                Urgent Need
                              </Badge>
                            )}
                          </div>

                          <div className="flex flex-wrap gap-4 mb-4">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 text-yellow-500 dark:text-yellow-400 mr-1" />
                              <span className="text-sm text-gray-600 dark:text-gray-300">Mon-Fri: 8am-8pm</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 text-yellow-500 dark:text-yellow-400 mr-1" />
                              <span className="text-sm text-gray-600 dark:text-gray-300">Sat: 8am-4pm</span>
                            </div>
                            <div className="flex items-center">
                              <Droplet className="h-4 w-4 text-yellow-500 dark:text-yellow-400 mr-1" />
                              <span className="text-sm text-gray-600 dark:text-gray-300">All blood types needed</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <Button className="bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white">
                              Schedule Appointment
                            </Button>
                            <Button
                              variant="outline"
                              className="border-yellow-400 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/30"
                            >
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <div className="flex space-x-1">
                  <Button variant="outline" size="icon" className="w-8 h-8">
                    <span className="sr-only">Go to previous page</span>
                    <span>‹</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-8 h-8 bg-yellow-50 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-400"
                  >
                    <span className="sr-only">Page 1</span>
                    <span>1</span>
                  </Button>
                  <Button variant="outline" size="icon" className="w-8 h-8">
                    <span className="sr-only">Page 2</span>
                    <span>2</span>
                  </Button>
                  <Button variant="outline" size="icon" className="w-8 h-8">
                    <span className="sr-only">Page 3</span>
                    <span>3</span>
                  </Button>
                  <Button variant="outline" size="icon" className="w-8 h-8">
                    <span className="sr-only">Go to next page</span>
                    <span>›</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-400 to-pink-400 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find a Center Near You?</h2>
          <p className="text-xl mb-8">
            Join our mobile donation alerts to be notified when a blood drive comes to your area.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Input placeholder="Enter your email" className="bg-white/90 border-0 max-w-xs mx-auto sm:mx-0" />
            <Button className="bg-white text-yellow-500 hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105">
              Sign Up for Alerts
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

