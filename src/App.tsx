import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Star, Sparkles, Gift, MessageCircle, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const quotes = [
  "Your smile is my favorite view.",
  "You make my heart do a little happy dance.",
  "I must be dreaming, because you're too perfect to be real.",
  "You're the reason the stars shine brighter.",
  "If I had a flower for every time I thought of you, I could walk through my garden forever.",
]

const memories = [
  { title: "First Convo", description: "The moment I knew you were special", emoji: "✨" },
  { title: "Our First Date", description: "When time stood still.. In my dreams", emoji: "🌹" },
  { title: "Your Laugh", description: "The sound that makes everything better", emoji: "😊" },
  { title: "Dancing", description: "Moving to your own rhythm", emoji: "💃" },
  { title: "Ohh Shit Fuck Man", description: "Your Loving Dialog", emoji: "☠️" },
]

const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    className="absolute"
    initial={{ opacity: 0, y: 100 }}
    animate={{
      opacity: [0, 1, 1, 0],
      y: [100, -20, -40, -100],
      x: [0, 10, -10, 5],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Number.POSITIVE_INFINITY,
      repeatDelay: Math.random() * 3,
    }}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  >
    {children}
  </motion.div>
)

export default function Component() {
  const [currentSection, setCurrentSection] = useState(0)
  const [showMessage, setShowMessage] = useState(false)
  const [heartCount, setHeartCount] = useState(0)

  const sections = ["hero", "quotes", "memories", "message"]

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartCount((prev) => prev + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length)
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      {/* Floating Background Elements */}
      {Array.from({ length: 15 }).map((_, i) => (
        <FloatingElement key={i} delay={i * 0.5}>
          {i % 3 === 0 ? (
            <Heart className="w-6 h-6 text-pink-400 fill-pink-300" />
          ) : i % 3 === 1 ? (
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-300" />
          ) : (
            <Sparkles className="w-5 h-5 text-purple-400" />
          )}
        </FloatingElement>
      ))}

      {/* Hero Section */}
      <AnimatePresence mode="wait">
        {currentSection === 0 && (
          <motion.div
            key="hero"
            className="min-h-screen flex flex-col items-center justify-center text-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-xl opacity-30 animate-pulse" />
              <h1 className="relative text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">
                Hey Beautiful
              </h1>
            </motion.div>

            <motion.div
              className="text-6xl mb-8"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              💖
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              I created something special just for you...
            </motion.p>

            <motion.div
              className="mb-12 text-lg text-gray-600 italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <p>With all my love,</p>
              <p className="font-semibold text-rose-600 text-xl mt-1">Your Secret Admirer 💕</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <Button
                onClick={nextSection}
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Heart className="w-5 h-5 mr-2 fill-current" />
                Open Your Heart
              </Button>
            </motion.div>
          </motion.div>
        )}

        {/* Quotes Section */}
        {currentSection === 1 && (
          <motion.div
            key="quotes"
            className="min-h-screen flex flex-col items-center justify-center p-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-rose-600 mb-12 text-center"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Words from My Heart
            </motion.h2>

            <div className="max-w-4xl grid gap-6 md:grid-cols-2">
              {quotes.map((quote, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: index * 0.3, duration: 0.8 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="perspective-1000"
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="text-3xl mb-4 text-center">💕</div>
                      <p className="text-lg text-gray-700 text-center italic leading-relaxed">"{quote}"</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div className="mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
              <Button
                onClick={nextSection}
                variant="outline"
                className="border-pink-300 text-pink-600 hover:bg-pink-50 px-6 py-3 rounded-full bg-transparent"
              >
                Continue the Journey
                <Sparkles className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        )}

        {/* Memories Section */}
        {currentSection === 2 && (
          <motion.div
            key="memories"
            className="min-h-screen flex flex-col items-center justify-center p-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-purple-600 mb-12 text-center"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Beautiful Moments
            </motion.h2>

            <div className="max-w-6xl grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {memories.map((memory, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
                  whileHover={{ y: -10, rotateZ: 2 }}
                  className="group cursor-pointer"
                >
                  <Card className="bg-gradient-to-br from-white to-pink-50 border-0 shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className="text-6xl mb-4"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {memory.emoji}
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{memory.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{memory.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div className="mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
              <Button
                onClick={nextSection}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full"
              >
                <Camera className="w-4 h-4 mr-2" />
                One More Surprise
              </Button>
            </motion.div>
          </motion.div>
        )}

        {/* Final Message Section */}
        {currentSection === 3 && (
          <motion.div
            key="message"
            className="min-h-screen flex flex-col items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="max-w-4xl text-center"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 rounded-3xl blur-2xl opacity-20"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
                <Card className="relative bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
                  <CardContent className="p-12">
                    <motion.div
                      className="text-8xl mb-8"
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    >
                      💌
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-8">
                      You Are My Everything
                    </h2>

                    <motion.p
                      className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      Every day with you feels like a beautiful dream I never want to wake up from. You bring magic to
                      the ordinary and turn every moment into a treasure.
                    </motion.p>

                    <motion.div
                      className="flex flex-wrap justify-center gap-4 mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.8 }}
                    >
                      {Array.from({ length: (heartCount % 10) + 5 }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Heart className="w-6 h-6 text-red-400 fill-red-300" />
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5, duration: 0.8 }}
                    >
                      <Button
                        onClick={() => setShowMessage(!showMessage)}
                        className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        {showMessage ? "Hide Message" : "Reveal Secret Message"}
                      </Button>
                    </motion.div>

                    <AnimatePresence>
                      {showMessage && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5 }}
                          className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl"
                        >
                          <p className="text-lg text-gray-700 italic mb-4">
                            "I love you more than words can express, more than actions can show, and more than time can
                            measure. You are my today, my tomorrow, and my always. 💕"
                          </p>
                          <div className="text-right">
                            <p className="text-gray-600">Forever yours,</p>
                            <p className="font-semibold text-rose-600 text-lg">Your Secret Admirer </p>
                            <p className="font-semibold text-rose-600 text-lg">Raj 💖</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
              <Button
                onClick={() => setCurrentSection(0)}
                variant="outline"
                className="border-pink-300 text-pink-600 hover:bg-pink-50 px-6 py-3 rounded-full"
              >
                <Gift className="w-4 h-4 mr-2" />
                Start Over
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}