"use client"

import { useState } from "react"
import Image from "next/image"
import { Trophy, Info, Droplet, Users, Calendar, Share2, Check, Plus, Minus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function PointsPage() {
  const [selectedBadge, setSelectedBadge] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-pink-300/20 dark:from-yellow-900/20 dark:to-pink-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">Your Donation Rewards</h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              Earn points and badges for your life-saving donations and community involvement.
            </p>
          </div>
        </div>
      </section>

      {/* User Stats */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Avatar className="h-24 w-24 border-4 border-yellow-400 dark:border-yellow-600">
                <AvatarImage src="/placeholder.svg?height=100&width=100&text=JD" alt="John Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">John Doe</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Gold Tier Donor</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge className="bg-yellow-500 text-white">5 Donations</Badge>
                  <Badge className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white">3 Campaigns</Badge>
                  <Badge className="bg-blue-500 text-white">2 Referrals</Badge>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white rounded-full p-6 inline-flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold">1,250</span>
                  <span className="text-sm">Points</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Points System */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="overview" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="badges">Badges</TabsTrigger>
              <TabsTrigger value="rewards">Rewards</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card className="bg-white dark:bg-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800 dark:text-white">Your Points Progress</CardTitle>
                  <CardDescription>You're 750 points away from Platinum Tier</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress to Platinum</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">1,250 / 2,000</span>
                    </div>
                    <Progress
                      value={62.5}
                      className="h-2 bg-gray-200 dark:bg-gray-700"
                      indicatorClassName="bg-gradient-to-r from-yellow-400 to-pink-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-gradient-to-br from-white to-yellow-50 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow">
                      <Trophy className="h-10 w-10 text-yellow-500 mx-auto mb-2" />
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">Bronze Tier</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">0 - 500 points</p>
                      <Badge className="mt-2 bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-300">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-white to-yellow-50 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow">
                      <Trophy className="h-10 w-10 text-yellow-500 mx-auto mb-2" />
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">Silver Tier</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">500 - 1,000 points</p>
                      <Badge className="mt-2 bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-300">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-white to-yellow-50 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow">
                      <Trophy className="h-10 w-10 text-yellow-500 mx-auto mb-2" />
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">Gold Tier</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">1,000 - 2,000 points</p>
                      <Badge className="mt-2 bg-yellow-500 text-white">Current</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800 dark:text-white">How to Earn Points</CardTitle>
                  <CardDescription>There are many ways to earn points in our rewards program</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white rounded-full p-2">
                        <Droplet className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 dark:text-white">Blood Donation</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Earn 250 points for each successful blood donation.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white rounded-full p-2">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 dark:text-white">Referrals</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Earn 100 points for each friend who donates blood using your referral.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white rounded-full p-2">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 dark:text-white">Campaign Participation</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Earn 150 points for participating in a blood donation campaign.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white rounded-full p-2">
                        <Share2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 dark:text-white">Social Sharing</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Earn 50 points for sharing your donation experience on social media.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="badges" className="space-y-8">
              <Card className="bg-white dark:bg-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800 dark:text-white">Your Badges</CardTitle>
                  <CardDescription>Badges earned through your donations and activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {[
                      {
                        id: 1,
                        name: "First Time Donor",
                        description: "Completed your first blood donation",
                        icon: "/placeholder.svg?height=80&width=80&text=1st",
                        earned: true,
                      },
                      {
                        id: 2,
                        name: "Regular Donor",
                        description: "Donated blood 3 times",
                        icon: "/placeholder.svg?height=80&width=80&text=3x",
                        earned: true,
                      },
                      {
                        id: 3,
                        name: "Dedicated Donor",
                        description: "Donated blood 5 times",
                        icon: "/placeholder.svg?height=80&width=80&text=5x",
                        earned: true,
                      },
                      {
                        id: 4,
                        name: "Blood Champion",
                        description: "Donated blood 10 times",
                        icon: "/placeholder.svg?height=80&width=80&text=10x",
                        earned: false,
                      },
                      {
                        id: 5,
                        name: "Referral Star",
                        description: "Referred 2 friends who donated",
                        icon: "/placeholder.svg?height=80&width=80&text=★★",
                        earned: true,
                      },
                      {
                        id: 6,
                        name: "Campaign Hero",
                        description: "Participated in 3 campaigns",
                        icon: "/placeholder.svg?height=80&width=80&text=Hero",
                        earned: true,
                      },
                      {
                        id: 7,
                        name: "Social Advocate",
                        description: "Shared 5 posts about donation",
                        icon: "/placeholder.svg?height=80&width=80&text=Share",
                        earned: false,
                      },
                      {
                        id: 8,
                        name: "Platinum Donor",
                        description: "Reached Platinum Tier status",
                        icon: "/placeholder.svg?height=80&width=80&text=Plat",
                        earned: false,
                      },
                    ].map((badge) => (
                      <TooltipProvider key={badge.id}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div
                              className={`text-center p-4 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md ${
                                badge.earned
                                  ? "bg-gradient-to-br from-white to-yellow-50 dark:from-gray-800 dark:to-gray-700"
                                  : "bg-gray-100 dark:bg-gray-700/50 opacity-60"
                              }`}
                              onClick={() => setSelectedBadge(badge)}
                            >
                              <div className="relative">
                                <Image
                                  src={badge.icon || "/placeholder.svg"}
                                  alt={badge.name}
                                  width={80}
                                  height={80}
                                  className="mx-auto"
                                />
                                {badge.earned && (
                                  <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1">
                                    <Check className="h-3 w-3" />
                                  </div>
                                )}
                              </div>
                              <h3 className="mt-2 text-sm font-medium text-gray-800 dark:text-white">{badge.name}</h3>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{badge.description}</p>
                            {!badge.earned && <p className="text-xs text-gray-500">Not yet earned</p>}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {selectedBadge && (
                <Card className="bg-white dark:bg-gray-800 shadow-lg">
                  <CardHeader>
                    <div className="flex justify-between">
                      <CardTitle className="text-gray-800 dark:text-white">{selectedBadge.name}</CardTitle>
                      <Button variant="ghost" size="sm" onClick={() => setSelectedBadge(null)}>
                        &times;
                      </Button>
                    </div>
                    <CardDescription>{selectedBadge.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col md:flex-row items-center gap-6">
                    <Image
                      src={selectedBadge.icon || "/placeholder.svg"}
                      alt={selectedBadge.name}
                      width={120}
                      height={120}
                    />
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {selectedBadge.earned
                          ? `You earned this badge on ${new Date().toLocaleDateString()}. Congratulations!`
                          : "You haven't earned this badge yet. Keep donating to unlock it!"}
                      </p>
                      {selectedBadge.earned && (
                        <Button className="bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white">
                          <Share2 className="mr-2 h-4 w-4" /> Share Achievement
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="rewards" className="space-y-8">
              <Card className="bg-white dark:bg-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800 dark:text-white">Available Rewards</CardTitle>
                  <CardDescription>Redeem your points for these exclusive rewards</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        id: 1,
                        name: "SunflowBlood T-Shirt",
                        description: "Exclusive donor t-shirt with our logo",
                        points: 500,
                        image: "/placeholder.svg?height=100&width=200&text=T-Shirt",
                      },
                      {
                        id: 2,
                        name: "Coffee Mug",
                        description: "Ceramic mug with inspirational quote",
                        points: 350,
                        image: "/placeholder.svg?height=100&width=200&text=Mug",
                      },
                      {
                        id: 3,
                        name: "Movie Tickets",
                        description: "Two tickets to any movie",
                        points: 800,
                        image: "/placeholder.svg?height=100&width=200&text=Movie",
                      },
                      {
                        id: 4,
                        name: "Restaurant Gift Card",
                        description: "$25 gift card to selected restaurants",
                        points: 1000,
                        image: "/placeholder.svg?height=100&width=200&text=Gift+Card",
                      },
                    ].map((reward) => (
                      <div
                        key={reward.id}
                        className="flex bg-gradient-to-br from-white to-yellow-50 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow overflow-hidden"
                      >
                        <div className="w-1/3">
                          <Image
                            src={reward.image || "/placeholder.svg"}
                            alt={reward.name}
                            width={200}
                            height={100}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-2/3 p-4">
                          <h3 className="font-bold text-gray-800 dark:text-white">{reward.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{reward.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-yellow-500 dark:text-yellow-400">
                              {reward.points} points
                            </span>
                            <Button
                              className={`${
                                reward.points <= 1250
                                  ? "bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white"
                                  : "bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400 cursor-not-allowed"
                              }`}
                              disabled={reward.points > 1250}
                            >
                              Redeem
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <Info className="h-4 w-4 inline mr-1" />
                    New rewards are added regularly. Check back often!
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="space-y-8">
              <Card className="bg-white dark:bg-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800 dark:text-white">Points History</CardTitle>
                  <CardDescription>Record of your points earned and redeemed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        id: 1,
                        type: "earned",
                        description: "Blood Donation",
                        points: 250,
                        date: "May 15, 2025",
                      },
                      {
                        id: 2,
                        type: "earned",
                        description: "Campaign Participation: Summer Blood Drive",
                        points: 150,
                        date: "May 10, 2025",
                      },
                      {
                        id: 3,
                        type: "earned",
                        description: "Referral: Jane Smith",
                        points: 100,
                        date: "April 28, 2025",
                      },
                      {
                        id: 4,
                        type: "redeemed",
                        description: "Coffee Mug",
                        points: -350,
                        date: "April 15, 2025",
                      },
                      {
                        id: 5,
                        type: "earned",
                        description: "Blood Donation",
                        points: 250,
                        date: "April 1, 2025",
                      },
                      {
                        id: 6,
                        type: "earned",
                        description: "Social Media Share",
                        points: 50,
                        date: "March 22, 2025",
                      },
                      {
                        id: 7,
                        type: "earned",
                        description: "Blood Donation",
                        points: 250,
                        date: "March 1, 2025",
                      },
                      {
                        id: 8,
                        type: "earned",
                        description: "Referral: Bob Johnson",
                        points: 100,
                        date: "February 15, 2025",
                      },
                    ].map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex items-center">
                          <div
                            className={`rounded-full p-2 mr-4 ${
                              item.type === "earned"
                                ? "bg-green-100 dark:bg-green-900/30 text-green-500 dark:text-green-400"
                                : "bg-red-100 dark:bg-red-900/30 text-red-500 dark:text-red-400"
                            }`}
                          >
                            {item.type === "earned" ? <Plus className="h-4 w-4" /> : <Minus className="h-4 w-4" />}
                          </div>
                          <div>
                            <p className="font-medium text-gray-800 dark:text-white">{item.description}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
                          </div>
                        </div>
                        <div
                          className={`font-bold ${
                            item.type === "earned"
                              ? "text-green-500 dark:text-green-400"
                              : "text-red-500 dark:text-red-400"
                          }`}
                        >
                          {item.type === "earned" ? "+" : ""}
                          {item.points}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    className="border-yellow-400 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/30"
                  >
                    View All History
                  </Button>
                  <Button
                    variant="outline"
                    className="border-yellow-400 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/30"
                  >
                    Download Report
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Next Milestone */}
      <section className="py-12 px-4 bg-gradient-to-r from-yellow-100 to-pink-100 dark:from-yellow-900/30 dark:to-pink-900/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">Your Next Milestone</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 text-center">
                <div className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white rounded-full p-8 inline-flex flex-col items-center justify-center">
                  <Trophy className="h-12 w-12 mb-2" />
                  <span className="text-xl font-bold">Platinum Tier</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">750 points to go!</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Reach Platinum Tier by earning 2,000 total points and unlock exclusive rewards and recognition.
                </p>
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">1,250 / 2,000</span>
                  </div>
                  <Progress
                    value={62.5}
                    className="h-2 bg-gray-200 dark:bg-gray-700"
                    indicatorClassName="bg-gradient-to-r from-yellow-400 to-pink-400"
                  />
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white transition-all duration-300 transform hover:scale-105">
                    Schedule Donation
                  </Button>
                  <Button
                    variant="outline"
                    className="border-yellow-400 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/30"
                  >
                    Refer a Friend
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
          <h2 className="text-3xl font-bold mb-4">Ready to Earn More Points?</h2>
          <p className="text-xl mb-8">Schedule your next donation or refer friends to earn points faster.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-yellow-500 hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105">
              Schedule Donation
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Refer Friends
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

