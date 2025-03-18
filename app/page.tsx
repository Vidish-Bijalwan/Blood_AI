"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Search,
  MapPin,
  Calendar,
  Droplet,
  Bell,
  Menu,
  User,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

// Carousel data
const carouselItems = [
  {
    id: 1,
    title: "Every Donation Saves Lives",
    description: "Your single donation can save up to 3 lives. Join our community of heroes today.",
    image: "/placeholder.svg?height=600&width=1600&text=Donation+Impact",
    cta: "Donate Now",
    ctaLink: "/donate",
  },
  {
    id: 2,
    title: "Emergency Appeal: Type O Negative",
    description: "Critical shortage of Type O Negative blood. Your donation is urgently needed.",
    image: "/placeholder.svg?height=600&width=1600&text=Emergency+Appeal",
    cta: "Find Centers",
    ctaLink: "/find-center",
  },
  {
    id: 3,
    title: "Join Our Summer Campaign",
    description: "Help us reach our goal of 10,000 donations this summer. Every drop counts.",
    image: "/placeholder.svg?height=600&width=1600&text=Summer+Campaign",
    cta: "Learn More",
    ctaLink: "/campaigns",
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showChat, setShowChat] = useState(false)

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Droplet className="h-8 w-8 text-yellow-500 dark:text-yellow-400" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">SunflowBlood</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/donate"
              className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200 relative group"
            >
              Donate Now
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/find-center"
              className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200 relative group"
            >
              Find Centers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/campaigns"
              className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200 relative group"
            >
              Campaigns
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/stories"
              className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200 relative group"
            >
              Stories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200 relative group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/points">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 relative"
              >
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-pink-400 text-[10px] text-white">
                  5
                </span>
                <Bell className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/profile">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400"
              >
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Carousel Section */}
      <section className="relative h-[600px] overflow-hidden">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/40 to-pink-900/40" />
            <div className="relative h-full flex items-center z-10">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{item.title}</h1>
                  <p className="text-xl mb-8 text-white">{item.description}</p>
                  <Link href={item.ctaLink}>
                    <Button className="bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white transition-all duration-300 transform hover:scale-105">
                      {item.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Our Mission</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            At SunflowBlood, we believe that every drop of blood can bloom into a life-saving opportunity. Our mission
            is to connect donors with those in need, creating a community of heroes who save lives every day.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-yellow-100 to-pink-100 dark:from-yellow-900/30 dark:to-pink-900/30">
        <div className="container mx-auto">
          <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
              Find Donation Centers Near You
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center flex-1 w-full">
                <MapPin className="text-yellow-500 dark:text-yellow-400 mr-2 flex-shrink-0" />
                <Input placeholder="Enter your location" className="border-none shadow-none bg-transparent" />
              </div>
              <div className="flex items-center flex-1 w-full">
                <Calendar className="text-yellow-500 dark:text-yellow-400 mr-2 flex-shrink-0" />
                <Input placeholder="Select date" className="border-none shadow-none bg-transparent" />
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

      {/* Urgent Donation Drives */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">Urgent Donation Drives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "Emergency Appeal: Type O Negative",
                location: "City Hospital Blood Bank",
                description: "Critical shortage of Type O Negative blood. Your donation can save multiple lives!",
                image: "/placeholder.svg?height=200&width=400&text=Type+O+Negative",
              },
              {
                id: 2,
                title: "Platelets Needed: Cancer Patients",
                location: "Memorial Medical Center",
                description: "Cancer patients urgently need platelet donations to continue their treatments.",
                image: "/placeholder.svg?height=200&width=400&text=Platelets+Needed",
              },
              {
                id: 3,
                title: "Disaster Response: Blood Drive",
                location: "Community Center",
                description: "Help us prepare blood supplies for emergency response to recent natural disasters.",
                image: "/placeholder.svg?height=200&width=400&text=Disaster+Response",
              },
            ].map((drive) => (
              <Card
                key={drive.id}
                className="overflow-hidden transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-pink-50 dark:from-gray-800 dark:to-gray-700 shadow-lg hover:shadow-xl"
              >
                <Image
                  src={drive.image || "/placeholder.svg"}
                  alt={drive.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-gray-800 dark:text-white">{drive.title}</CardTitle>
                    <Badge variant="destructive" className="bg-gradient-to-r from-red-500 to-pink-500">
                      Urgent
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{drive.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-200">{drive.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white transition-all duration-300 transform hover:scale-105">
                    Schedule Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/find-center">
              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/30 transition-all duration-300"
              >
                View All Donation Centers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-100 to-pink-100 dark:from-yellow-900/30 dark:to-pink-900/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">Featured Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "A Life Saved: Sarah's Story",
                subtitle: "How one donation made all the difference",
                description: "Sarah's life was saved thanks to a timely blood donation after a severe car accident.",
                image: "/placeholder.svg?height=200&width=400&text=Sarah's+Story",
              },
              {
                id: 2,
                title: "From Recipient to Donor: Michael's Journey",
                subtitle: "Giving back after receiving",
                description:
                  "After receiving blood during cancer treatment, Michael now donates regularly to help others.",
                image: "/placeholder.svg?height=200&width=400&text=Michael's+Journey",
              },
              {
                id: 3,
                title: "The 100-Time Donor: James' Dedication",
                subtitle: "A lifetime of giving",
                description:
                  "James has donated blood over 100 times, potentially saving up to 300 lives throughout his lifetime.",
                image: "/placeholder.svg?height=200&width=400&text=James'+Dedication",
              },
            ].map((story) => (
              <Card
                key={story.id}
                className="overflow-hidden transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl"
              >
                <Image
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-gray-800 dark:text-white">{story.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{story.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-200">{story.description}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full hover:bg-yellow-50 dark:hover:bg-yellow-900/30 transition-colors duration-300"
                  >
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/stories">
              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/30 transition-all duration-300"
              >
                View All Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-400 to-pink-400 flex items-center justify-center">
                <Droplet className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-500 to-pink-500 inline-block text-transparent bg-clip-text">
                25,000+
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300">Donations Collected</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-400 to-pink-400 flex items-center justify-center">
                <User className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-500 to-pink-500 inline-block text-transparent bg-clip-text">
                75,000+
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300">Lives Saved</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-400 to-pink-400 flex items-center justify-center">
                <MapPin className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-500 to-pink-500 inline-block text-transparent bg-clip-text">
                150+
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300">Donation Centers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-400 to-pink-400 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8">Join our community of life-savers today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/donate">
              <Button className="bg-white text-yellow-500 hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105">
                Become a Donor
              </Button>
            </Link>
            <Link href="/find-center">
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                Find a Center
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-gradient-to-r from-yellow-100 to-pink-100 dark:from-yellow-900/30 dark:to-pink-900/30 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white text-center">Stay Updated</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
              Subscribe to our newsletter for updates on campaigns, events, and donation drives.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button className="bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white transition-all duration-300 transform hover:scale-105">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/donate" className="hover:text-yellow-400 transition-colors duration-200">
                    Donate Now
                  </Link>
                </li>
                <li>
                  <Link href="/find-center" className="hover:text-yellow-400 transition-colors duration-200">
                    Find Centers
                  </Link>
                </li>
                <li>
                  <Link href="/campaigns" className="hover:text-yellow-400 transition-colors duration-200">
                    Campaigns
                  </Link>
                </li>
                <li>
                  <Link href="/stories" className="hover:text-yellow-400 transition-colors duration-200">
                    Stories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Learn More</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-yellow-400 transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/points" className="hover:text-yellow-400 transition-colors duration-200">
                    Points System
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-yellow-400 transition-colors duration-200">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-yellow-400 transition-colors duration-200">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">Email: info@sunflowblood.com</p>
              <p className="mb-2">Phone: (123) 456-7890</p>
              <p>Address: 123 Donation St, Bloodville, BL 12345</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4 mb-4">
                <Link href="#" className="hover:text-yellow-400 transition-colors duration-200">
                  Facebook
                </Link>
                <Link href="#" className="hover:text-yellow-400 transition-colors duration-200">
                  Twitter
                </Link>
                <Link href="#" className="hover:text-yellow-400 transition-colors duration-200">
                  Instagram
                </Link>
              </div>
              <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-yellow-400 transition-colors duration-200">
                  App Store
                </Link>
                <Link href="#" className="hover:text-yellow-400 transition-colors duration-200">
                  Google Play
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2025 SunflowBlood. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${showChat ? "scale-100" : "scale-0"}`}>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">Chat Support</h3>
            <button onClick={() => setShowChat(false)} className="text-white hover:text-gray-200">
              &times;
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-lg mb-2 max-w-[80%]">
              <p className="text-sm">Hello! How can I help you today?</p>
            </div>
            <div className="bg-pink-100 dark:bg-pink-900/30 p-2 rounded-lg mb-2 max-w-[80%] ml-auto">
              <p className="text-sm">I'd like to know more about donating blood.</p>
            </div>
            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-lg mb-2 max-w-[80%]">
              <p className="text-sm">Great! I'd be happy to help. What specific information are you looking for?</p>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <Input placeholder="Type your message..." className="flex-1" />
              <Button size="sm" className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white">
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-yellow-400 to-pink-400 text-white p-4 rounded-full shadow-lg transition-all duration-300 ${showChat ? "scale-0" : "scale-100"}`}
        aria-label="Open chat support"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Animated Background Shapes (Sunflower Petals) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-20 h-20 bg-yellow-300/10 dark:bg-yellow-700/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              clipPath:
                "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",
              transform: `rotate(${i * 36}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

