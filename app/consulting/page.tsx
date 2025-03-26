import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  ClipboardCheck,
  FileText,
  Users,
  Building2,
  CheckCircle,
  BarChart3,
  FileSearch,
  FileCog,
  Store,
  UserCog,
  Briefcase,
  GraduationCap,
  Scale,
  Clock,
  Phone,
} from 'lucide-react'

export default function ConsultingPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='sticky top-0 z-50 w-full border-b bg-white'>
        <div className='container flex h-16 items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Link href='/'>
              <Image
                src='/eshlogo.svg'
                alt='ESH Logo'
                width={100}
                height={40}
                className='h-8 w-auto'
                priority
              />
            </Link>
          </div>
          <nav className='hidden md:flex gap-6'>
            <Link
              href='/#services'
              className='text-sm font-medium hover:text-orange-500 transition-colors'
            >
              Services
            </Link>
            <Link
              href='/#about'
              className='text-sm font-medium hover:text-orange-500 transition-colors'
            >
              About Us
            </Link>
            <Link
              href='/#approach'
              className='text-sm font-medium hover:text-orange-500 transition-colors'
            >
              Our Approach
            </Link>
            <Link
              href='/#testimonials'
              className='text-sm font-medium hover:text-orange-500 transition-colors'
            >
              Testimonials
            </Link>
            <Link
              href='/#contact'
              className='text-sm font-medium hover:text-orange-500 transition-colors'
            >
              Contact
            </Link>
          </nav>
          <div className='flex items-center gap-4'>
            <Button
              variant='outline'
              className='hidden md:flex border-orange-500 text-orange-500 hover:bg-orange-50'
            >
              <Phone className='mr-2 h-4 w-4' /> Call Us
            </Button>
            <Button className='bg-orange-500 hover:bg-orange-600'>
              Book Consultation
            </Button>
          </div>
        </div>
      </header>

      <main className='flex-1'>
        {/* Hero Section */}
        <section className='w-full py-12 md:py-24 lg:py-32 bg-orange-50'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center text-center space-y-4'>
              <div className='inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600'>
                Professional Consulting
              </div>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'>
                School Health Consulting Services
              </h1>
              <p className='max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Expert guidance to develop, implement, and evaluate
                comprehensive school health programs that improve student and
                staff wellbeing.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 mt-8'>
                <Button className='bg-orange-500 hover:bg-orange-600'>
                  Schedule a Consultation
                </Button>
                <Button
                  variant='outline'
                  className='border-orange-500 text-orange-500 hover:bg-orange-50'
                >
                  View Our Process
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className='w-full py-12 md:py-24'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
                  Our Consulting Services
                </h2>
                <p className='max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Comprehensive consulting solutions tailored to your
                  school&apos;s unique health program needs.
                </p>
              </div>
            </div>

            {/* Program Evaluations */}
            <div className='mt-16'>
              <div className='flex items-center gap-2 mb-8'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100'>
                  <FileSearch className='h-5 w-5 text-orange-500' />
                </div>
                <h3 className='text-2xl font-bold'>Program Evaluations</h3>
              </div>
              <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                <div className='rounded-lg border bg-white p-6 shadow-sm'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                    <ClipboardCheck className='h-6 w-6' />
                  </div>
                  <h4 className='mt-4 text-xl font-bold'>
                    Compliance Assessment
                  </h4>
                  <p className='mt-2 text-gray-500'>
                    Evaluate your current health programs against federal,
                    state, and local requirements to ensure full compliance.
                  </p>
                </div>
                <div className='rounded-lg border bg-white p-6 shadow-sm'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                    <BarChart3 className='h-6 w-6' />
                  </div>
                  <h4 className='mt-4 text-xl font-bold'>
                    Effectiveness Analysis
                  </h4>
                  <p className='mt-2 text-gray-500'>
                    Measure the impact of your health initiatives through data
                    collection, analysis, and evidence-based evaluation.
                  </p>
                </div>
                <div className='rounded-lg border bg-white p-6 shadow-sm'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                    <CheckCircle className='h-6 w-6' />
                  </div>
                  <h4 className='mt-4 text-xl font-bold'>Gap Identification</h4>
                  <p className='mt-2 text-gray-500'>
                    Identify areas for improvement in your current health
                    programs and develop strategies to address them.
                  </p>
                </div>
              </div>
            </div>

            {/* Policy and Program Development */}
            <div className='mt-16'>
              <div className='flex items-center gap-2 mb-8'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100'>
                  <FileCog className='h-5 w-5 text-orange-500' />
                </div>
                <h3 className='text-2xl font-bold'>
                  Policy & Program Development
                </h3>
              </div>
              <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                <div className='rounded-lg border bg-white p-6 shadow-sm'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                    <FileText className='h-6 w-6' />
                  </div>
                  <h4 className='mt-4 text-xl font-bold'>
                    Health Policy Creation
                  </h4>
                  <p className='mt-2 text-gray-500'>
                    Develop comprehensive health policies that align with best
                    practices and meet regulatory requirements.
                  </p>
                </div>
                <div className='rounded-lg border bg-white p-6 shadow-sm'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                    <GraduationCap className='h-6 w-6' />
                  </div>
                  <h4 className='mt-4 text-xl font-bold'>
                    Curriculum Development
                  </h4>
                  <p className='mt-2 text-gray-500'>
                    Create age-appropriate health education curricula that
                    engage students and promote healthy behaviors.
                  </p>
                </div>
                <div className='rounded-lg border bg-white p-6 shadow-sm'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                    <Building2 className='h-6 w-6' />
                  </div>
                  <h4 className='mt-4 text-xl font-bold'>
                    Wellness Program Design
                  </h4>
                  <p className='mt-2 text-gray-500'>
                    Design comprehensive wellness programs that address
                    physical, mental, and social health needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Vendor Recommendations */}
            <div className='mt-16'>
              <div className='flex items-center gap-2 mb-8'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100'>
                  <Store className='h-5 w-5 text-orange-500' />
                </div>
                <h3 className='text-2xl font-bold'>Vendor Recommendations</h3>
              </div>
              <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                <div className='rounded-lg border bg-white p-6 shadow-sm'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                    <Scale className='h-6 w-6' />
                  </div>
                  <h4 className='mt-4 text-xl font-bold'>Vendor Evaluation</h4>
                  <p className='mt-2 text-gray-500'>
                    Assess potential health service providers based on quality,
                    reliability, and alignment with your school&apos;s needs.
                  </p>
                </div>
                <div className='rounded-lg border bg-white p-6 shadow-sm'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                    <Briefcase className='h-6 w-6' />
                  </div>
                  <h4 className='mt-4 text-xl font-bold'>
                    Contract Negotiation
                  </h4>
                  <p className='mt-2 text-gray-500'>
                    Guidance on negotiating favorable terms with health service
                    providers to maximize value and quality.
                  </p>
                </div>
                <div className='rounded-lg border bg-white p-6 shadow-sm'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                    <Clock className='h-6 w-6' />
                  </div>
                  <h4 className='mt-4 text-xl font-bold'>
                    Implementation Support
                  </h4>
                  <p className='mt-2 text-gray-500'>
                    Assistance with vendor onboarding, service integration, and
                    ongoing relationship management.
                  </p>
                </div>
              </div>
            </div>

            {/* Staffing Guidance */}
            <div className='mt-16'>
              <div className='flex items-center gap-2 mb-8'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100'>
                  <UserCog className='h-5 w-5 text-orange-500' />
                </div>
                <h3 className='text-2xl font-bold'>Staffing Guidance</h3>
              </div>
              <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                <div className='rounded-lg border bg-white p-6 shadow-sm'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                    <Users className='h-6 w-6' />
                  </div>
                  <h4 className='mt-4 text-xl font-bold'>Needs Assessment</h4>
                  <p className='mt-2 text-gray-500'>
                    Determine the optimal health staff composition based on your
                    school&apos;s size, population, and specific health needs.
                  </p>
                </div>
                <div className='rounded-lg border bg-white p-6 shadow-sm'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                    <FileText className='h-6 w-6' />
                  </div>
                  <h4 className='mt-4 text-xl font-bold'>Role Development</h4>
                  <p className='mt-2 text-gray-500'>
                    Create comprehensive job descriptions, qualifications, and
                    performance metrics for health staff positions.
                  </p>
                </div>
                <div className='rounded-lg border bg-white p-6 shadow-sm'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                    <GraduationCap className='h-6 w-6' />
                  </div>
                  <h4 className='mt-4 text-xl font-bold'>
                    Professional Development
                  </h4>
                  <p className='mt-2 text-gray-500'>
                    Design training programs to ensure your health staff stays
                    current with best practices and emerging trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className='w-full py-12 md:py-24 bg-orange-50'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
                  Our Consulting Approach
                </h2>
                <p className='max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  A collaborative, data-driven process tailored to your
                  school&apos;s unique needs.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl gap-8 py-12'>
              <div className='grid gap-6 md:grid-cols-2 md:gap-12'>
                <div className='flex flex-col gap-2'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                    <div className='text-xl font-bold'>1</div>
                  </div>
                  <h3 className='text-xl font-bold'>Initial Assessment</h3>
                  <p className='text-gray-500'>
                    We begin with a comprehensive evaluation of your current
                    health programs, policies, and staffing to identify
                    strengths and areas for improvement.
                  </p>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                    <div className='text-xl font-bold'>2</div>
                  </div>
                  <h3 className='text-xl font-bold'>Strategic Planning</h3>
                  <p className='text-gray-500'>
                    Based on assessment findings, we develop a customized action
                    plan with clear objectives, timelines, and measurable
                    outcomes.
                  </p>
                </div>
              </div>
              <div className='grid gap-6 md:grid-cols-2 md:gap-12'>
                <div className='flex flex-col gap-2'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                    <div className='text-xl font-bold'>3</div>
                  </div>
                  <h3 className='text-xl font-bold'>Implementation Support</h3>
                  <p className='text-gray-500'>
                    We provide guidance and resources as you implement new
                    health initiatives, policies, and programs, ensuring smooth
                    execution.
                  </p>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                    <div className='text-xl font-bold'>4</div>
                  </div>
                  <h3 className='text-xl font-bold'>Evaluation & Refinement</h3>
                  <p className='text-gray-500'>
                    We help you measure the effectiveness of your health
                    initiatives and make data-driven adjustments to ensure
                    ongoing success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Ready to Transform Your School&apos;s Health Programs?
                </h2>
                <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Partner with Everything School Health for expert consulting
                  that delivers measurable results.
                </p>
              </div>
              <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                <Button className='bg-orange-500 hover:bg-orange-600'>
                  Schedule a Consultation
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
                <Button
                  variant='outline'
                  className='border-orange-500 text-orange-500 hover:bg-orange-50'
                >
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className='w-full border-t py-6 md:py-0'>
        <div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
          <div className='flex items-center gap-2'>
            <Image
              src='/eshlogo.svg'
              alt='ESH Logo'
              width={100}
              height={40}
              className='h-6 w-auto'
            />
          </div>
          <nav className='flex gap-4 sm:gap-6'>
            <Link href='#' className='text-sm text-gray-500 hover:underline'>
              Privacy Policy
            </Link>
            <Link href='#' className='text-sm text-gray-500 hover:underline'>
              Terms of Service
            </Link>
            <Link href='#' className='text-sm text-gray-500 hover:underline'>
              Sitemap
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
