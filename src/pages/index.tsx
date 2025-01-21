import { motion } from "framer-motion"
import { ArrowRight, Link, Youtube, RefreshCw, TrendingUp } from "lucide-react"
import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function IndexPage() {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      {/* Hero Section */}
      <motion.section 
        className="text-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Badge variant="secondary" className="mb-4">
          LinkedIn Content Creation Tool
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Simplify Your LinkedIn Posts
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Transform URLs, YouTube links, and more into engaging LinkedIn content.
        </p>
        <Button size="lg" className="mt-4" onClick={() => navigate('/dashboard')}>
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.section>

      {/* Features Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-4"
      >
        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Link className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Create from URLs</h3>
              <p className="text-muted-foreground">
                Transform URLs from blogs, articles, or other online resources into LinkedIn posts quickly and effortlessly.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Youtube className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Paste in YouTube Links</h3>
              <p className="text-muted-foreground">
                Generate tailored LinkedIn posts by pasting YouTube video links and allowing the tool to craft engaging content.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Regenerate Sections</h3>
              <p className="text-muted-foreground">
                Instantly rewrite or adjust parts of your LinkedIn posts using various styles such as numbered lists, personal experiences, or insights.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Viral Post Styles</h3>
              <p className="text-muted-foreground">
                Leverage AI trained on thousands of high-performing LinkedIn posts to create sensational and impactful content with pre-designed hooks, insights, and body structures.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Ready to Enhance Your LinkedIn Presence?
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Start using our tool to make LinkedIn posting more efficient and impactful for professionals.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button size="lg" variant="default">
              Try Now
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}
