import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function DashboardPage() {
  const [link, setLink] = useState("")
  const [type, setType] = useState("Blog Post")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (link || type) {
      setSubmitted(true)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 bg-white text-black">
      {!submitted ? (
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold">Create Content</h1>
          <Select onValueChange={setType} defaultValue={type}>
            <SelectTrigger className="max-w-md mx-auto">
              <SelectValue placeholder="Select content type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Blog Post">Blog Post</SelectItem>
              <SelectItem value="LinkedIn Post">LinkedIn Post</SelectItem>
              <SelectItem value="YouTube Link">YouTube Link</SelectItem>
              <SelectItem value="Custom Topic">Custom Topic</SelectItem>
            </SelectContent>
          </Select>
          <Input 
            placeholder="Enter URL, YouTube link, or topic..." 
            value={link} 
            onChange={(e) => setLink(e.target.value)}
            className="max-w-md mx-auto"
          />
          <Button size="lg" onClick={handleSubmit}>
            Generate Content
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
              <h2 className="text-2xl font-bold">Content Preview</h2>
              <p>Your content will be generated here based on the input provided.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="text-2xl font-bold">Edit & Customize</h2>
              <p>Use tools to edit and enhance your content.</p>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
