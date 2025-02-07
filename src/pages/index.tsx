import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Building2, CreditCard } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function IndexPage() {
  const navigate = useNavigate()

  const features = [
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Plantillas Profesionales",
      description: "Plantillas de email diseñadas específicamente para inmobiliarias"
    },
    {
      icon: <Building2 className="h-8 w-8 text-primary" />,
      title: "Gestión de Contactos",
      description: "Organiza y segmenta tu base de datos de clientes potenciales"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: "Pago por Uso",
      description: "Solo pagas por los emails que envías, sin costes fijos"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      {/* Hero Section */}
      <motion.section 
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Badge variant="secondary" className="mb-4">
          Marketing Inmobiliario Simplificado
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Email Marketing
          <br />
          Para Inmobiliarias
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Impulsa tus ventas inmobiliarias con campañas de email marketing profesionales y efectivas
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <Button size="lg" onClick={() => navigate('/register')}>
            Empezar Ahora <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => navigate('/templates')}>
            Ver Plantillas
          </Button>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card>
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Pricing Section */}
      <section className="text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Precios Transparentes</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Paga solo por lo que uses, sin sorpresas
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Plan Básico</CardTitle>
              <CardDescription>Para inmobiliarias pequeñas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold">0.05€ / email</div>
                <ul className="space-y-2 text-sm">
                  <li>✓ Acceso a plantillas básicas</li>
                  <li>✓ Hasta 1,000 contactos</li>
                  <li>✓ Soporte por email</li>
                </ul>
                <Button className="w-full" onClick={() => navigate('/register')}>
                  Comenzar
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Plan Pro</CardTitle>
              <CardDescription>Para inmobiliarias medianas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold">0.03€ / email</div>
                <ul className="space-y-2 text-sm">
                  <li>✓ Todas las plantillas</li>
                  <li>✓ Hasta 10,000 contactos</li>
                  <li>✓ Soporte prioritario</li>
                </ul>
                <Button className="w-full" onClick={() => navigate('/register')}>
                  Comenzar
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Plan Enterprise</CardTitle>
              <CardDescription>Para grandes inmobiliarias</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold">Personalizado</div>
                <ul className="space-y-2 text-sm">
                  <li>✓ Plantillas personalizadas</li>
                  <li>✓ Contactos ilimitados</li>
                  <li>✓ Soporte dedicado 24/7</li>
                </ul>
                <Button className="w-full" onClick={() => navigate('/contact')}>
                  Contactar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}