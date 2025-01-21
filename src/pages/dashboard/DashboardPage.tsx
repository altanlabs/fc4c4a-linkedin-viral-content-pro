import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function DashboardPage() {
  const [link, setLink] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (link) {
      setSubmitted(true)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {!submitted ? (
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold">Create LinkedIn Post</h1>
          <Input 
            placeholder="Enter URL or YouTube link..." 
            value={link} 
            onChange={(e) => setLink(e.target.value)}
            className="max-w-md mx-auto"
          />
          <Button size="lg" onClick={handleSubmit}>
            Generate Post
          </Button>
        </motion.div>
      ) : (
        <motion.div 
          className="grid gap-8 md:grid-cols-2"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <Card>
            <CardContent>
              <h2 className="text-2xl font-bold">Post Preview</h2>
              <p>Your content will be generated here based on the link provided.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="text-2xl font-bold">Edit & Customize</h2>
              <p>Use tools to edit and enhance your post.</p>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
