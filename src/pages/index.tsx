import { motion } from "framer-motion"
import { ArrowRight, Component, Palette, Zap } from "lucide-react"
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
          Willkommen zu Ihrer neuen App
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Erstellen Sie schöne Schnittstellen
          <br />
          Mit Altan AI
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
         Beginnen Sie mit dem Chatten, um diese App zu bearbeiten.
        </p>
        <Button size="lg" className="mt-4" onClick={() => navigate('/dashboard')}>
          Beispiel-Dashboard anzeigen <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.section>

      {/* Features Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-3"
      >
        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Component className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Wiederverwendbare Komponenten</h3>
              <p className="text-muted-foreground">
                Vorgefertigte Komponenten, die Sie einfach anpassen und in Ihre Projekte integrieren können.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Anpassbares Design</h3>
              <p className="text-muted-foreground">
                Passen Sie das Aussehen und die Haptik mit unserem flexiblen Themensystem einfach an.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Schnelle Entwicklung</h3>
              <p className="text-muted-foreground">
                Beschleunigen Sie Ihren Entwicklungsprozess mit unseren einsatzbereiten Komponenten.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Components Preview Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Entdecken Sie unsere Komponenten
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Entdecken Sie unsere umfangreiche Bibliothek von Komponenten, die Ihnen helfen, bessere Schnittstellen zu erstellen.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Add component previews here */}
          {/* You can showcase some of your most important components */}
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
            Bereit, loszulegen?
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Beginnen Sie mit dem Aufbau Ihres nächsten Projekts mit unserer modernen Komponentenbibliothek.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button size="lg" variant="default">
              Einige CTA
            </Button>
            <Button size="lg" variant="outline">
              Haupt-CTA
            </Button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}
