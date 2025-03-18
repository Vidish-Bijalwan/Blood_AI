import Image from "next/image"
import { Calendar, Clock, MapPin, Droplet, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-pink-300/20 dark:from-yellow-900/20 dark:to-pink-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">Donate Blood, Save Lives</h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              Your donation can save up to three lives. Learn about the process and schedule your appointment today.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Process */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white text-center">The Donation Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Registration",
                description: "Complete a registration form and show identification.",
                icon: "clipboard",
              },
              {
                step: 2,
                title: "Health Screening",
                description: "Brief health check including temperature, pulse, and blood pressure.",
                icon: "heart",
              },
              {
                step: 3,
                title: "Donation",
                description: "The actual donation takes only 8-10 minutes.",
                icon: "droplet",
              },
              {
                step: 4,
                title: "Refreshments",
                description: "Enjoy refreshments and rest for 15 minutes before leaving.",
                icon: "coffee",
              },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-400 to-pink-400 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-100 to-pink-100 dark:from-yellow-900/30 dark:to-pink-900/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">Eligibility Criteria</h2>

          <div className="max-w-4xl mx-auto">
            <Accordion
              type="single"
              collapsible
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-6 py-4 text-gray-800 dark:text-white hover:bg-yellow-50 dark:hover:bg-yellow-900/10">
                  Age Requirements
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600 dark:text-gray-300">
                  <p>
                    You must be at least 17 years old to donate blood. Some states allow 16-year-olds to donate with
                    parental consent.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="px-6 py-4 text-gray-800 dark:text-white hover:bg-yellow-50 dark:hover:bg-yellow-900/10">
                  Weight Requirements
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600 dark:text-gray-300">
                  <p>You must weigh at least 110 pounds to be eligible to donate blood.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="px-6 py-4 text-gray-800 dark:text-white hover:bg-yellow-50 dark:hover:bg-yellow-900/10">
                  Health Status
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600 dark:text-gray-300">
                  <p>
                    You should be in good general health and feeling well on the day of donation. You cannot donate if
                    you have a cold, flu, or other illness.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="px-6 py-4 text-gray-800 dark:text-white hover:bg-yellow-50 dark:hover:bg-yellow-900/10">
                  Waiting Periods
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600 dark:text-gray-300">
                  <p>
                    You must wait at least 56 days between whole blood donations. For other types of donations, the
                    waiting period may vary.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="px-6 py-4 text-gray-800 dark:text-white hover:bg-yellow-50 dark:hover:bg-yellow-900/10">
                  Travel Restrictions
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600 dark:text-gray-300">
                  <p>
                    Travel to certain countries may temporarily disqualify you from donating blood. This is to prevent
                    the spread of diseases like malaria.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">Preparation Tips</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-white to-yellow-50 dark:from-gray-800 dark:to-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-white">Before Donation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Get a good night's sleep before your donation.",
                    "Eat a healthy meal before your appointment.",
                    "Drink plenty of water to stay hydrated.",
                    "Wear comfortable clothing with sleeves that can be rolled up.",
                    "Bring a list of medications you're taking.",
                  ].map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 dark:text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-200">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-pink-50 dark:from-gray-800 dark:to-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-white">After Donation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Rest for at least 15 minutes after donating.",
                    "Drink extra fluids for the next 48 hours.",
                    "Avoid strenuous physical activity for the rest of the day.",
                    "Keep the bandage on for at least 4 hours.",
                    "If you feel dizzy, lie down with your feet elevated.",
                  ].map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-pink-500 dark:text-pink-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-200">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Appointment */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-100 to-pink-100 dark:from-yellow-900/30 dark:to-pink-900/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">
            Schedule Your Appointment
          </h2>

          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <Tabs defaultValue="location" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="location">Location</TabsTrigger>
                <TabsTrigger value="date">Date & Time</TabsTrigger>
                <TabsTrigger value="info">Your Information</TabsTrigger>
              </TabsList>

              <TabsContent value="location" className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Find a Donation Center</h3>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex items-center flex-1">
                    <MapPin className="text-yellow-500 dark:text-yellow-400 mr-2 flex-shrink-0" />
                    <Input placeholder="Enter your location or zip code" />
                  </div>
                  <Button className="bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white">
                    Search
                  </Button>
                </div>

                <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg mb-6 flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">Interactive map will be displayed here</p>
                </div>

                <div className="space-y-4">
                  {[1, 2, 3].map((center) => (
                    <Card key={center} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3">
                            <Image
                              src={`/placeholder.svg?height=200&width=300&text=Center+${center}`}
                              alt={`Donation Center ${center}`}
                              width={300}
                              height={200}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-6 md:w-2/3">
                            <h4 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">
                              City Blood Center {center}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                              123 Main Street, Cityville, State 12345
                            </p>
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
                            <Button className="bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white">
                              Select This Center
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="date" className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Select Date & Time</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium mb-4 text-gray-800 dark:text-white">Choose a Date</h4>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 h-64 flex items-center justify-center">
                      <p className="text-gray-500 dark:text-gray-400">Calendar will be displayed here</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4 text-gray-800 dark:text-white">Available Time Slots</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"].map(
                        (time) => (
                          <Button
                            key={time}
                            variant="outline"
                            className="justify-start hover:bg-yellow-50 dark:hover:bg-yellow-900/30"
                          >
                            {time}
                          </Button>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="info" className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        First Name
                      </label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Last Name
                      </label>
                      <Input placeholder="Enter your last name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                      <Input type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                      <Input placeholder="Enter your phone number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Blood Type (if known)
                      </label>
                      <Input placeholder="Enter your blood type" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Have you donated before?
                      </label>
                      <div className="flex space-x-4 mt-2">
                        <label className="flex items-center">
                          <input type="radio" name="donated_before" className="mr-2" />
                          <span>Yes</span>
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="donated_before" className="mr-2" />
                          <span>No</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white">
                    Schedule Appointment
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto">
            <Accordion
              type="single"
              collapsible
              className="bg-gradient-to-br from-white to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              {[
                {
                  question: "How long does a blood donation take?",
                  answer:
                    "The entire process takes about an hour, though the actual donation only takes 8-10 minutes. This includes registration, health screening, donation, and refreshments.",
                },
                {
                  question: "How often can I donate blood?",
                  answer:
                    "You can donate whole blood every 56 days (8 weeks). If you donate platelets, you can donate every 7 days, up to 24 times a year.",
                },
                {
                  question: "Does donating blood hurt?",
                  answer:
                    "Most people feel only a slight pinch when the needle is inserted. The actual donation process is typically painless.",
                },
                {
                  question: "How much blood is taken during a donation?",
                  answer:
                    "A typical whole blood donation is about one pint (about 500 ml), which is about 10% of the blood in your body.",
                },
                {
                  question: "Can I donate if I'm taking medication?",
                  answer:
                    "Many medications do not prevent you from donating blood. However, some medications may require a waiting period. It's best to bring a list of your medications to your appointment.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="px-6 py-4 text-gray-800 dark:text-white hover:bg-yellow-50 dark:hover:bg-yellow-900/10">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-400 to-pink-400 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Save Lives?</h2>
          <p className="text-xl mb-8">Schedule your donation appointment today.</p>
          <Button className="bg-white text-yellow-500 hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105">
            Schedule Now
          </Button>
        </div>
      </section>
    </div>
  )
}

