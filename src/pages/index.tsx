import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Coffee, Building2, Mail, CreditCard } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function IndexPage() {
  const navigate = useNavigate()

  const features = [
    {
      icon: <Coffee className="h-8 w-8 text-primary" />,
      title: "Plantillas Frescas como un Café",
      description: "Emails profesionales listos para servir a tus clientes"
    },
    {
      icon: <Building2 className="h-8 w-8 text-primary" />,
      title: "Sabor Inmobiliario",
      description: "Contenido especializado para el sector inmobiliario"
    },
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Servicio Express",
      description: "Envía campañas tan rápido como preparas un café"
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
          Tu Marketing Inmobiliario, Recién Hecho
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Cafetería
          <br />
          Inmobiliaria
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Donde el email marketing inmobiliario se sirve caliente y recién hecho
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <Button size="lg" onClick={() => navigate('/register')}>
            Pedir Ahora <Coffee className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => navigate('/templates')}>
            Ver Menú
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
          <h2 className="text-3xl font-bold">Nuestro Menú de Precios</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Elige tu blend perfecto de marketing inmobiliario
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Café Solo</CardTitle>
              <CardDescription>Para empezar el día</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold">0.05€ / email</div>
                <ul className="space-y-2 text-sm">
                  <li>✓ Plantillas básicas</li>
                  <li>✓ Hasta 1,000 contactos</li>
                  <li>✓ Soporte por email</li>
                </ul>
                <Button className="w-full" onClick={() => navigate('/register')}>
                  Pedir Ahora
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary">
            <CardHeader>
              <CardTitle>Café con Leche</CardTitle>
              <CardDescription>El favorito de la casa</CardDescription>
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
                  Pedir Ahora
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Café Especial</CardTitle>
              <CardDescription>Para los más exigentes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold">Personalizado</div>
                <ul className="space-y-2 text-sm">
                  <li>✓ Plantillas exclusivas</li>
                  <li>✓ Contactos ilimitados</li>
                  <li>✓ Barista personal 24/7</li>
                </ul>
                <Button className="w-full" onClick={() => navigate('/contact')}>
                  Consultar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">¿Listo para servir el mejor marketing inmobiliario?</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-[600px] mx-auto">
          Únete a Cafetería Inmobiliaria y descubre cómo el email marketing puede calentar tus ventas
        </p>
        <Button size="lg" onClick={() => navigate('/register')}>
          Empezar Ahora <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>
    </div>
  )
}