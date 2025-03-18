import Image from "next/image"
import { Heart, Share2, MessageSquare, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-pink-300/20 dark:from-yellow-900/20 dark:to-pink-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">Stories of Hope</h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              Read inspiring stories from donors and recipients whose lives have been touched by blood donation.
            </p>
          </div>
        </div>
      </section>

      {/* Stories Tabs */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="recipients">Recipients</TabsTrigger>
              <TabsTrigger value="donors">Donors</TabsTrigger>
            </TabsList>

            <TabsContent value="featured" className="space-y-8">
              {/* Featured Story */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Sarah's+Story"
                      alt="Sarah's Story"
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white">Featured</Badge>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                      A Second Chance at Life: Sarah's Story
                    </h3>
                    <div className="flex items-center mb-4">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src="/placeholder.svg?height=50&width=50&text=S" alt="Sarah" />
                        <AvatarFallback>S</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-gray-800 dark:text-white">Sarah Johnson</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Blood Recipient</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      After a severe car accident left me needing multiple blood transfusions, I wouldn't be here today
                      if it weren't for generous blood donors. Their selfless act gave me a second chance at life.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Now, I'm dedicated to raising awareness about the importance of blood donation. Every three
                      months, I organize a blood drive in my community to help ensure others have the same chance I did.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white transition-all duration-300 transform hover:scale-105">
                        Read Full Story
                      </Button>
                      <Button variant="ghost" size="icon" className="ml-auto">
                        <Share2 className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* More Featured Stories */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    id: 1,
                    title: "From Recipient to Donor: Michael's Journey",
                    preview:
                      "After receiving blood during cancer treatment, Michael now donates regularly to help others.",
                    author: "Michael Chen",
                    type: "Recipient & Donor",
                    image: "/placeholder.svg?height=200&width=400&text=Michael's+Journey",
                  },
                  {
                    id: 2,
                    title: "The 100-Time Donor: James' Dedication",
                    preview:
                      "James has donated blood over 100 times, potentially saving up to 300 lives throughout his lifetime.",
                    author: "James Wilson",
                    type: "Donor",
                    image: "/placeholder.svg?height=200&width=400&text=James'+Dedication",
                  },
                  {
                    id: 3,
                    title: "A Mother's Gratitude",
                    preview: "When Emma's newborn needed a transfusion, blood donors made all the difference.",
                    author: "Emma Rodriguez",
                    type: "Parent of Recipient",
                    image: "/placeholder.svg?height=200&width=400&text=Mother's+Gratitude",
                  },
                ].map((story) => (
                  <Card
                    key={story.id}
                    className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white dark:bg-gray-800"
                  >
                    <div className="relative h-48">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-gray-800 dark:text-white">{story.title}</CardTitle>
                      <CardDescription>
                        <div className="flex items-center mt-2">
                          <Avatar className="h-6 w-6 mr-2">
                            <AvatarImage
                              src={`/placeholder.svg?height=50&width=50&text=${story.author.charAt(0)}`}
                              alt={story.author}
                            />
                            <AvatarFallback>{story.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-xs font-medium">{story.author}</p>
                            <p className="text-xs">{story.type}</p>
                          </div>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">{story.preview}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button
                        variant="link"
                        className="p-0 h-auto text-yellow-500 dark:text-yellow-400 hover:text-yellow-600 dark:hover:text-yellow-300"
                      >
                        Read More
                      </Button>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Heart className="h-4 w-4 text-pink-500" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Share2 className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recipients" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    id: 1,
                    title: "Surviving Leukemia",
                    preview: "How blood donations helped me through my battle with leukemia.",
                    author: "David Thompson",
                    type: "Cancer Survivor",
                    image: "/placeholder.svg?height=200&width=400&text=Leukemia+Survivor",
                  },
                  {
                    id: 2,
                    title: "My Heart Surgery Story",
                    preview: "Blood donors made my open heart surgery possible and saved my life.",
                    author: "Patricia Garcia",
                    type: "Heart Patient",
                    image: "/placeholder.svg?height=200&width=400&text=Heart+Surgery",
                  },
                  {
                    id: 3,
                    title: "Born Too Soon",
                    preview: "Our premature twins needed multiple transfusions in their first weeks of life.",
                    author: "Robert & Lisa Kim",
                    type: "Parents",
                    image: "/placeholder.svg?height=200&width=400&text=Premature+Twins",
                  },
                  {
                    id: 4,
                    title: "After the Accident",
                    preview: "I needed 12 units of blood after a motorcycle accident. Donors saved my life.",
                    author: "Tyler Jackson",
                    type: "Accident Survivor",
                    image: "/placeholder.svg?height=200&width=400&text=Accident+Survivor",
                  },
                  {
                    id: 5,
                    title: "Fighting Sickle Cell",
                    preview: "Regular blood transfusions help me manage my sickle cell disease.",
                    author: "Aisha Williams",
                    type: "Sickle Cell Patient",
                    image: "/placeholder.svg?height=200&width=400&text=Sickle+Cell",
                  },
                  {
                    id: 6,
                    title: "A Mother's Miracle",
                    preview: "Blood donors saved both me and my baby during a complicated childbirth.",
                    author: "Maria Sanchez",
                    type: "Mother",
                    image: "/placeholder.svg?height=200&width=400&text=Childbirth+Story",
                  },
                ].map((story) => (
                  <Card
                    key={story.id}
                    className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white dark:bg-gray-800"
                  >
                    <div className="relative h-48">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-gray-800 dark:text-white">{story.title}</CardTitle>
                      <CardDescription>
                        <div className="flex items-center mt-2">
                          <Avatar className="h-6 w-6 mr-2">
                            <AvatarImage
                              src={`/placeholder.svg?height=50&width=50&text=${story.author.charAt(0)}`}
                              alt={story.author}
                            />
                            <AvatarFallback>{story.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-xs font-medium">{story.author}</p>
                            <p className="text-xs">{story.type}</p>
                          </div>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">{story.preview}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button
                        variant="link"
                        className="p-0 h-auto text-yellow-500 dark:text-yellow-400 hover:text-yellow-600 dark:hover:text-yellow-300"
                      >
                        Read More
                      </Button>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Heart className="h-4 w-4 text-pink-500" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Share2 className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="donors" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    id: 1,
                    title: "Why I Donate Every 8 Weeks",
                    preview: "I've made blood donation a regular part of my life for over 20 years.",
                    author: "Richard Brown",
                    type: "Regular Donor",
                    image: "/placeholder.svg?height=200&width=400&text=Regular+Donor",
                  },
                  {
                    id: 2,
                    title: "Donating in Memory",
                    preview: "I donate blood in memory of my sister who lost her battle with cancer.",
                    author: "Jennifer Lee",
                    type: "Memorial Donor",
                    image: "/placeholder.svg?height=200&width=400&text=Memorial+Donor",
                  },
                  {
                    id: 3,
                    title: "First-Time Donor Experience",
                    preview: "What I wish I knew before my first blood donation and why I'll keep donating.",
                    author: "Alex Martinez",
                    type: "New Donor",
                    image: "/placeholder.svg?height=200&width=400&text=First+Time+Donor",
                  },
                  {
                    id: 4,
                    title: "Donating Platelets: My Experience",
                    preview: "Why I choose to donate platelets and what the process is like.",
                    author: "Samantha Wright",
                    type: "Platelet Donor",
                    image: "/placeholder.svg?height=200&width=400&text=Platelet+Donor",
                  },
                  {
                    id: 5,
                    title: "Our Company Blood Drive",
                    preview: "How our small business organized a successful blood drive.",
                    author: "Thomas Clark",
                    type: "Business Owner",
                    image: "/placeholder.svg?height=200&width=400&text=Company+Drive",
                  },
                  {
                    id: 6,
                    title: "Rare Blood Type Donor",
                    preview: "As someone with a rare blood type, I know how important my donations are.",
                    author: "Olivia Johnson",
                    type: "Rare Type Donor",
                    image: "/placeholder.svg?height=200&width=400&text=Rare+Blood+Type",
                  },
                ].map((story) => (
                  <Card
                    key={story.id}
                    className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white dark:bg-gray-800"
                  >
                    <div className="relative h-48">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-gray-800 dark:text-white">{story.title}</CardTitle>
                      <CardDescription>
                        <div className="flex items-center mt-2">
                          <Avatar className="h-6 w-6 mr-2">
                            <AvatarImage
                              src={`/placeholder.svg?height=50&width=50&text=${story.author.charAt(0)}`}
                              alt={story.author}
                            />
                            <AvatarFallback>{story.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-xs font-medium">{story.author}</p>
                            <p className="text-xs">{story.type}</p>
                          </div>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">{story.preview}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button
                        variant="link"
                        className="p-0 h-auto text-yellow-500 dark:text-yellow-400 hover:text-yellow-600 dark:hover:text-yellow-300"
                      >
                        Read More
                      </Button>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Heart className="h-4 w-4 text-pink-500" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Share2 className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Share Your Story</h2>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              Have you been touched by blood donation? We'd love to hear your story and share it with our community.
            </p>
            <Button className="bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white transition-all duration-300 transform hover:scale-105">
              Submit Your Story
            </Button>
          </div>
        </div>
      </section>

      {/* Community Comments */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-100 to-pink-100 dark:from-yellow-900/30 dark:to-pink-900/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">Community Comments</h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                id: 1,
                author: "Rebecca White",
                avatar: "/placeholder.svg?height=50&width=50&text=RW",
                comment: "These stories are so inspiring! I just scheduled my first donation for next week.",
                time: "2 hours ago",
                likes: 24,
              },
              {
                id: 2,
                author: "John Miller",
                avatar: "/placeholder.svg?height=50&width=50&text=JM",
                comment:
                  "Sarah's story touched my heart. I've been donating for years and it's stories like these that remind me why it's so important.",
                time: "5 hours ago",
                likes: 42,
              },
              {
                id: 3,
                author: "Sophia Lee",
                avatar: "/placeholder.svg?height=50&width=50&text=SL",
                comment:
                  "As a nurse, I see the impact of blood donations every day. Thank you to all donors out there!",
                time: "1 day ago",
                likes: 67,
              },
            ].map((comment) => (
              <Card key={comment.id} className="bg-white dark:bg-gray-800 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src={comment.avatar} alt={comment.author} />
                      <AvatarFallback>
                        {comment.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-gray-800 dark:text-white">{comment.author}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{comment.time}</p>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Share2 className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                        </Button>
                      </div>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">{comment.comment}</p>
                      <div className="mt-4 flex items-center space-x-4">
                        <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-600 dark:text-gray-400">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          <span>{comment.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-600 dark:text-gray-400">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          <span>Reply</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-white dark:bg-gray-800 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarFallback>You</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <textarea
                      className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-yellow-600 bg-transparent text-gray-800 dark:text-white"
                      placeholder="Share your thoughts..."
                      rows={3}
                    ></textarea>
                    <div className="mt-2 flex justify-end">
                      <Button className="bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white">
                        Post Comment
                      </Button>
                    </div>
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
          <h2 className="text-3xl font-bold mb-4">Inspired by These Stories?</h2>
          <p className="text-xl mb-8">Become a donor today and help write the next success story.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-yellow-500 hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105">
              Become a Donor
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Share Your Story
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

