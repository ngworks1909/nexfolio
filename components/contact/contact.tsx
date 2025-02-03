import dynamic from "next/dynamic"
import { Suspense } from "react"
import { LoadingDots } from "./loading-dots"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const DynamicContactForm = dynamic(() => import("./contact-form"), {
  ssr: false,
})

export default function ContactPage() {
  return (
    <section id="contact" className="py-12 md:py-24 lg:py-32 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <Card className="w-full">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<LoadingDots />}>
                <DynamicContactForm />
              </Suspense>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
