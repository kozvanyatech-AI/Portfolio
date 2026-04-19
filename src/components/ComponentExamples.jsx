/**
 * COMPONENT EXAMPLES
 * 
 * This file demonstrates how to use the reusable components
 * throughout your application. Delete this file when you're
 * comfortable with the component patterns.
 */

import {
  Button,
  Card,
  Badge,
  SectionHeader,
} from './index'

function ComponentExamples() {
  return (
    <div className="container-custom py-20 space-y-20">
      {/* Button Examples */}
      <div>
        <h2 className="mb-6 text-2xl font-bold">Button Examples</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>

        <div className="mt-4 flex flex-wrap gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      {/* Card Examples */}
      <div>
        <h2 className="mb-6 text-2xl font-bold">Card Examples</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="font-bold mb-2">Card Title</h3>
            <p className="text-gray-400">
              This is a basic card component with hover effect.
            </p>
          </Card>

          <Card hover={false}>
            <h3 className="font-bold mb-2">Card No Hover</h3>
            <p className="text-gray-400">
              This card doesn't have hover effects.
            </p>
          </Card>

          <Card className="bg-primary-500/10 border-primary-500/30">
            <h3 className="font-bold mb-2">Custom Card</h3>
            <p className="text-gray-400">
              This card has custom styling applied.
            </p>
          </Card>
        </div>
      </div>

      {/* Badge Examples */}
      <div>
        <h2 className="mb-6 text-2xl font-bold">Badge Examples</h2>
        <div className="flex flex-wrap gap-4">
          <Badge>Primary</Badge>
          <Badge variant="gray">Gray</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
        </div>
      </div>

      {/* SectionHeader Examples */}
      <div>
        <h2 className="mb-6 text-2xl font-bold">SectionHeader Examples</h2>

        <SectionHeader
          subtitle="Features"
          title="What We Offer"
          description="Our comprehensive suite of services designed to help your business grow."
        />

        <SectionHeader
          title="Simple Header"
          className="my-12"
        />
      </div>
    </div>
  )
}

export default ComponentExamples
