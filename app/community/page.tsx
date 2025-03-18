"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('feed')
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-pink-300/20 dark:from-yellow-900/20 dark:to-pink-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">Blood Donor Community</h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              Connect with fellow donors, share your experiences, and inspire others to join the cause.
            </p>
          </div>
        </div>
      </section>

      {/* Community Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="space-y-6">
                <Card className="bg-white dark:bg-gray-800 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-gray-800 dark:text-white">Your Profile</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">\

