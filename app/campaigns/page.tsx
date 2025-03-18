import Image from "next/image"
import { Calendar, MapPin, Users, Clock, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CampaignsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-pink-300/20 dark:from-yellow-900/20 dark:to-pink-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">Blood Donation Campaigns</h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              Join our community campaigns and help us save lives together.
            </p>
          </div>
        </div>
      </section>

      {/* Campaign Tabs */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="current" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="current">Current</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
            </TabsList>

            <TabsContent value="current" className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-8">Current Campaigns</h2>

              {/* Featured Campaign */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Summer+Blood+Drive"
                      alt="Summer Blood Drive"
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white">Featured</Badge>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Summer Blood Drive 2025</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Help us reach our goal of 10,000 donations this summer. Every drop counts in our mission to save
                      lives.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-yellow-500 dark:text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-800 dark:text-white">June 1 - August 31, 2025</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">3 months duration</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-yellow-500 dark:text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-800 dark:text-white">Multiple Locations</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            150+ participating centers nationwide
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="h-5 w-5 text-yellow-500 dark:text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-800 dark:text-white">4,256 donors so far</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Help us reach our goal of 10,000</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">42.56%</span>
                      </div>
                      <Progress
                        value={42.56}
                        className="h-2 bg-gray-200 dark:bg-gray-700"
                        indicatorClassName="bg-gradient-to-r from-yellow-400 to-pink-400"
                      />
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white transition-all duration-300 transform hover:scale-105">
                        Join Campaign
                      </Button>
                      <Button
                        variant="outline"
                        className="border-yellow-400 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/30"
                      >
                        Learn More
                      </Button>
                      <Button variant="ghost" size="icon" className="ml-auto">
                        <Share2 className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Current Campaigns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    id: 1,
                    title: "Emergency Appeal: Type O",
                    description: "Critical shortage of Type O blood. Your donation can save multiple lives!",
                    date: "May 15 - June 15, 2025",
                    location: "All Centers",
                    donors: 1245,
                    goal: 2000,
                    progress: 62.25,
                    image: "/placeholder.svg?height=200&width=400&text=Type+O+Appeal",
                  },
                  {
                    id: 2,
                    title: "College Campus Drive",
                    description: "Encouraging young donors to start a lifelong habit of giving blood.",
                    date: "May 1 - May 30, 2025",
                    location: "University Campuses",
                    donors: 876,
                    goal: 1500,
                    progress: 58.4,
                    image: "/placeholder.svg?height=200&width=400&text=Campus+Drive",
                  },
                  {
                    id: 3,
                    title: "Corporate Challenge",
                    description: "Companies competing to see who can donate the most blood.",
                    date: "April 15 - June 15, 2025",
                    location: "Corporate Offices",
                    donors: 2134,
                    goal: 5000,
                    progress: 42.68,
                    image: "/placeholder.svg?height=200&width=400&text=Corporate+Challenge",
                  },
                ].map((campaign) => (
                  <Card
                    key={campaign.id}
                    className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white dark:bg-gray-800"
                  >
                    <div className="relative h-48">
                      <Image
                        src={campaign.image || "/placeholder.svg"}
                        alt={campaign.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-gray-800 dark:text-white">{campaign.title}</CardTitle>
                      <CardDescription>{campaign.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-yellow-500 dark:text-yellow-400 mr-2" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{campaign.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-yellow-500 dark:text-yellow-400 mr-2" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{campaign.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-yellow-500 dark:text-yellow-400 mr-2" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {campaign.donors} of {campaign.goal} donors
                          </span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between mb-1">
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Progress</span>
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                            {campaign.progress}%
                          </span>
                        </div>
                        <Progress
                          value={campaign.progress}
                          className="h-1.5 bg-gray-200 dark:bg-gray-700"
                          indicatorClassName="bg-gradient-to-r from-yellow-400 to-pink-400"
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white">
                        Join Campaign
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button
                  variant="outline"
                  className="border-yellow-400 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/30"
                >
                  View All Current Campaigns
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="upcoming" className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-8">Upcoming Campaigns</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    id: 1,
                    title: "Fall Donation Festival",
                    description: "A celebration of giving with music, food, and life-saving donations.",
                    date: "September 15 - October 15, 2025",
                    location: "City Parks",
                    image: "/placeholder.svg?height=200&width=400&text=Fall+Festival",
                  },
                  {
                    id: 2,
                    title: "Holiday Heroes",
                    description: "Be a hero this holiday season by donating blood when it's needed most.",
                    date: "December 1 - December 31, 2025",
                    location: "All Centers",
                    image: "/placeholder.svg?height=200&width=400&text=Holiday+Heroes",
                  },
                  {
                    id: 3,
                    title: "Back to School Drive",
                    description: "Start the school year right by helping others through blood donation.",
                    date: "August 15 - September 15, 2025",
                    location: "School Campuses",
                    image: "/placeholder.svg?height=200&width=400&text=Back+to+School",
                  },
                ].map((campaign) => (
                  <Card
                    key={campaign.id}
                    className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white dark:bg-gray-800"
                  >
                    <div className="relative h-48">
                      <Image
                        src={campaign.image || "/placeholder.svg"}
                        alt={campaign.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-gray-800 dark:text-white">{campaign.title}</CardTitle>
                      <CardDescription>{campaign.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-yellow-500 dark:text-yellow-400 mr-2" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{campaign.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-yellow-500 dark:text-yellow-400 mr-2" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{campaign.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-yellow-500 dark:text-yellow-400 mr-2" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">Coming Soon</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white">
                        Get Notified
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past" className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-8">Past Campaigns</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    id: 1,
                    title: "Winter Blood Drive 2024",
                    description: "Our successful winter campaign that exceeded all expectations.",
                    date: "December 1 - February 28, 2024",
                    location: "All Centers",
                    donors: 12500,
                    goal: 10000,
                    progress: 125,
                    image: "/placeholder.svg?height=200&width=400&text=Winter+Drive+2024",
                  },
                  {
                    id: 2,
                    title: "Valentine's Day: Share Your Heart",
                    description: "A special campaign encouraging couples to donate blood together.",
                    date: "February 1 - February 14, 2024",
                    location: "All Centers",
                    donors: 3200,
                    goal: 3000,
                    progress: 106.67,
                    image: "/placeholder.svg?height=200&width=400&text=Valentine's+Day",
                  },
                  {
                    id: 3,
                    title: "First Responders Tribute",
                    description: "Honoring first responders by donating blood in their name.",
                    date: "September 11 - October 11, 2024",
                    location: "Fire Stations & Police Departments",
                    donors: 5600,
                    goal: 5000,
                    progress: 112,
                    image: "/placeholder.svg?height=200&width=400&text=First+Responders",
                  },
                ].map((campaign) => (
                  <Card
                    key={campaign.id}
                    className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white dark:bg-gray-800"
                  >
                    <div className="relative h-48">
                      <Image
                        src={campaign.image || "/placeholder.svg"}
                        alt={campaign.title}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute top-0 right-0 bg-gradient-to-l from-green-500 to-green-600 text-white px-3 py-1 text-sm font-medium">
                        Completed
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-gray-800 dark:text-white">{campaign.title}</CardTitle>
                      <CardDescription>{campaign.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-yellow-500 dark:text-yellow-400 mr-2" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{campaign.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-yellow-500 dark:text-yellow-400 mr-2" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{campaign.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-yellow-500 dark:text-yellow-400 mr-2" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {campaign.donors} of {campaign.goal} donors
                          </span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between mb-1">
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Final Result</span>
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                            {campaign.progress}%
                          </span>
                        </div>
                        <Progress
                          value={campaign.progress > 100 ? 100 : campaign.progress}
                          className="h-1.5 bg-gray-200 dark:bg-gray-700"
                          indicatorClassName="bg-gradient-to-r from-green-400 to-green-500"
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-yellow-400 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/30"
                      >
                        View Results
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Start Your Own Campaign */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Start Your Own Campaign</h2>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              Want to organize a blood drive at your workplace, school, or community? We can help you set it up!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-400 to-pink-400 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Contact Us</h3>
                <p className="text-gray-600 dark:text-gray-300">Fill out our campaign request form to get started.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-400 to-pink-400 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Plan Together</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We'll work with you to plan the details of your blood drive campaign.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-400 to-pink-400 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Host Your Drive</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We'll provide all the resources you need for a successful blood drive.
                </p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white transition-all duration-300 transform hover:scale-105">
              Start a Campaign
            </Button>
          </div>
        </div>
      </section>

      {/* Campaign Success Stories */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-100 to-pink-100 dark:from-yellow-900/30 dark:to-pink-900/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">
            Campaign Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <Image
                      src="/placeholder.svg?height=200&width=200&text=Tech+Company"
                      alt="Tech Company Campaign"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Tech Company Challenge</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      A leading tech company organized a blood drive that resulted in over 500 donations in just one
                      week.
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-yellow-500 dark:text-yellow-400 hover:text-yellow-600 dark:hover:text-yellow-300"
                    >
                      Read Full Story
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <Image
                      src="/placeholder.svg?height=200&width=200&text=University"
                      alt="University Campaign"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">University Blood Warriors</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Students at a local university created a competition between dorms that collected 1,200 units of
                      blood.
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-yellow-500 dark:text-yellow-400 hover:text-yellow-600 dark:hover:text-yellow-300"
                    >
                      Read Full Story
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-400 to-pink-400 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8">Join one of our campaigns or start your own today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-yellow-500 hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105">
              Join a Campaign
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Own
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

