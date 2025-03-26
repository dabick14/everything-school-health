import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  BookOpen,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  FileText,
  Heart,
  Mail,
  MapPin,
  Phone,
  Shield,
  Users,
} from 'lucide-react'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='sticky top-0 z-50 w-full border-b bg-white'>
        <div className='container flex h-16 items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Image
              src='/eshlogo.svg'
              alt='ESH Logo'
              width={100}
              height={40}
              className='h-8 w-auto'
              priority
            />
          </div>
          <nav className='hidden md:flex gap-6'>
            <Link
              href='#services'
              className='text-sm font-medium hover:text-orange-500 transition-colors'
            >
              Services
            </Link>
            <Link
              href='#about'
              className='text-sm font-medium hover:text-orange-500 transition-colors'
            >
              About Us
            </Link>
            <Link
              href='#approach'
              className='text-sm font-medium hover:text-orange-500 transition-colors'
            >
              Our Approach
            </Link>
            <Link
              href='#testimonials'
              className='text-sm font-medium hover:text-orange-500 transition-colors'
            >
              Testimonials
            </Link>
            <Link
              href='#contact'
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
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 items-center'>
              <div className='space-y-4'>
                <div className='inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600'>
                  Trusted by Schools Nationwide
                </div>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  Everything School Health
                </h1>
                <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Supporting students&apos; success through comprehensive and
                  preventive methods.
                </p>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Button className='bg-orange-500 hover:bg-orange-600'>
                    Get Started
                    <ChevronRight className='ml-2 h-4 w-4' />
                  </Button>
                  <Button
                    variant='outline'
                    className='border-orange-500 text-orange-500 hover:bg-orange-50'
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className='flex justify-center'>
                <Image
                  src='/eshfront1.svg?height=550&width=550'
                  width={550}
                  height={550}
                  alt='School Health Consultancy'
                  className='rounded-lg object-cover'
                />
              </div>
            </div>
          </div>
        </section>

        <section id='services' className='w-full py-12 md:py-24 bg-orange-50'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600'>
                  Our Services
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Comprehensive School Health Solutions
                </h2>
                <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  At Everything School Health, we use comprehensive and
                  preventive processes to plan and deliver services that foster
                  students&apos; safety, wellness, and learning. We also ensure
                  compliance with state regulations, ensuring a fully
                  implemented evidence-based school health program coordinated
                  by a qualified expert to meet the required Minimum Package of
                  the School Health and Education Programme (SHEP) of the Ghana
                  Education Service for all basic and secondary schools.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3'>
              <div className='rounded-lg border bg-white p-6 shadow-sm'>
                <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                  <Shield className='h-6 w-6' />
                </div>
                <h3 className='mt-4 text-xl font-bold'>Consulting Services</h3>
                <p className='mt-2 text-gray-500'>
                  We offer school health consultancy services including program
                  evaluation, policy development, and staffing.
                </p>
              </div>
              <div className='rounded-lg border bg-white p-6 shadow-sm'>
                <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                  <Users className='h-6 w-6' />
                </div>
                <h3 className='mt-4 text-xl font-bold'>Training Programs</h3>
                <p className='mt-2 text-gray-500'>
                  Expert training for school communities in medical emergency
                  response. Learn CPR and First Aid. Be ready to save lives.
                </p>
              </div>
              <div className='rounded-lg border bg-white p-6 shadow-sm'>
                <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                  <FileText className='h-6 w-6' />
                </div>
                <h3 className='mt-4 text-xl font-bold'>Staffing Solutions</h3>
                <p className='mt-2 text-gray-500'>
                  We offer qualified school nurses, counselors, and physical
                  therapists, as well as substitute/temporary staff to ensure
                  continuous care.
                </p>
              </div>
              <div className='rounded-lg border bg-white p-6 shadow-sm'>
                <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                  <CheckCircle className='h-6 w-6' />
                </div>
                <h3 className='mt-4 text-xl font-bold'>
                  Athletic Safety Support
                </h3>
                <p className='mt-2 text-gray-500'>
                  Partner with ESH to protect your athletes with expert safety
                  consulting, staffing, and training.
                </p>
              </div>
              <div className='rounded-lg border bg-white p-6 shadow-sm'>
                <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                  <Calendar className='h-6 w-6' />
                </div>
                <h3 className='mt-4 text-xl font-bold'>
                  On-Site Medical Support
                </h3>
                <p className='mt-2 text-gray-500'>
                  On-site medical support for sporting events. Qualified
                  professionals ready to assist.
                </p>
              </div>
              {/* <div className='rounded-lg border bg-white p-6 shadow-sm'>
                <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                  <BookOpen className='h-6 w-6' />
                </div>
                <h3 className='mt-4 text-xl font-bold'>Resource Development</h3>
                <p className='mt-2 text-gray-500'>
                  Create customized health resources and materials for your
                  school community.
                </p>
              </div> */}
            </div>
          </div>
        </section>

        <section id='about' className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 items-center'>
              <div className='flex justify-center'>
                <Image
                  src='/eshfront3.jpg?height=550&width=550'
                  width={550}
                  height={550}
                  alt='About Everything School Health'
                  className='rounded-lg object-cover'
                />
              </div>
              <div className='space-y-4'>
                <div className='inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600'>
                  About Us
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  Who We Are
                </h2>
                <p className='text-gray-500 md:text-xl/relaxed'>
                  Everything School Health (ESH) was founded by a team of
                  healthcare professionals and educators passionate about
                  improving health outcomes in educational settings.
                </p>
                <p className='text-gray-500 md:text-xl/relaxed'>
                  With over 20 years of combined experience, our consultants
                  bring expertise in public health, education, nursing, and
                  policy development to help schools create environments that
                  support the health and wellbeing of all students and staff.
                </p>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Button className='bg-orange-500 hover:bg-orange-600'>
                    Meet Our Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='approach' className='w-full py-12 md:py-24 bg-orange-50'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600'>
                  Our Approach
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  How We Work With Schools
                </h2>
                <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Our collaborative approach ensures that health initiatives are
                  tailored to your school&apos;s unique needs.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl gap-8 py-12'>
              <div className='grid gap-6 md:grid-cols-2 md:gap-12'>
                <div className='flex flex-col gap-2'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                    <div className='text-xl font-bold'>1</div>
                  </div>
                  <h3 className='text-xl font-bold'>Assessment</h3>
                  <p className='text-gray-500'>
                    We begin by conducting a comprehensive assessment of your
                    school&apos;s current health policies, programs, and
                    environment.
                  </p>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                    <div className='text-xl font-bold'>2</div>
                  </div>
                  <h3 className='text-xl font-bold'>Planning</h3>
                  <p className='text-gray-500'>
                    Based on assessment findings, we work with your team to
                    develop a customized action plan that addresses your
                    school&apos;s specific needs and priorities.
                  </p>
                </div>
              </div>
              <div className='grid gap-6 md:grid-cols-2 md:gap-12'>
                <div className='flex flex-col gap-2'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                    <div className='text-xl font-bold'>3</div>
                  </div>
                  <h3 className='text-xl font-bold'>Implementation</h3>
                  <p className='text-gray-500'>
                    We provide guidance and support as you implement new health
                    initiatives, policies, and programs.
                  </p>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
                    <div className='text-xl font-bold'>4</div>
                  </div>
                  <h3 className='text-xl font-bold'>Evaluation & Refinement</h3>
                  <p className='text-gray-500'>
                    We help you evaluate the effectiveness of your health
                    initiatives and make adjustments as needed to ensure ongoing
                    success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='testimonials' className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600'>
                  Testimonials
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  What Schools Say About Us
                </h2>
                <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Hear from the schools we&apos;ve partnered with to improve
                  health and wellbeing.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2'>
              <div className='rounded-lg border bg-white p-6 shadow-sm'>
                <div className='flex items-start gap-4'>
                  <Image
                    src='/placeholder.svg?height=60&width=60'
                    width={60}
                    height={60}
                    alt='Principal'
                    className='rounded-full'
                  />
                  <div>
                    <h3 className='text-lg font-bold'>Sarah Johnson</h3>
                    <p className='text-sm text-gray-500'>
                      Principal, Oakridge Elementary
                    </p>
                  </div>
                </div>
                <p className='mt-4 text-gray-500'>
                  &quot;Working with ESH has transformed our approach to student
                  health. Their comprehensive assessment helped us identify gaps
                  in our policies, and their guidance in developing new programs
                  has been invaluable.&quot;
                </p>
              </div>
              <div className='rounded-lg border bg-white p-6 shadow-sm'>
                <div className='flex items-start gap-4'>
                  <Image
                    src='/placeholder.svg?height=60&width=60'
                    width={60}
                    height={60}
                    alt='School Nurse'
                    className='rounded-full'
                  />
                  <div>
                    <h3 className='text-lg font-bold'>Michael Chen</h3>
                    <p className='text-sm text-gray-500'>
                      School Nurse, Westfield High School
                    </p>
                  </div>
                </div>
                <p className='mt-4 text-gray-500'>
                  "The training ESH provided to our staff was exceptional. They
                  tailored the content to our specific needs and delivered it in
                  an engaging way that resonated with everyone."
                </p>
              </div>
              <div className='rounded-lg border bg-white p-6 shadow-sm'>
                <div className='flex items-start gap-4'>
                  <Image
                    src='/placeholder.svg?height=60&width=60'
                    width={60}
                    height={60}
                    alt='Superintendent'
                    className='rounded-full'
                  />
                  <div>
                    <h3 className='text-lg font-bold'>David Rodriguez</h3>
                    <p className='text-sm text-gray-500'>
                      Superintendent, Riverdale School District
                    </p>
                  </div>
                </div>
                <p className='mt-4 text-gray-500'>
                  &quot;ESH helped us develop a district-wide wellness policy
                  that has had a positive impact on both students and staff.
                  Their expertise and collaborative approach made the process
                  smooth and effective.&quot;
                </p>
              </div>
              <div className='rounded-lg border bg-white p-6 shadow-sm'>
                <div className='flex items-start gap-4'>
                  <Image
                    src='/placeholder.svg?height=60&width=60'
                    width={60}
                    height={60}
                    alt='Health Teacher'
                    className='rounded-full'
                  />
                  <div>
                    <h3 className='text-lg font-bold'>Lisa Thompson</h3>
                    <p className='text-sm text-gray-500'>
                      Health Teacher, Meadowbrook Middle School
                    </p>
                  </div>
                </div>
                <p className='mt-4 text-gray-500'>
                  &quot;The curriculum resources provided by ESH have
                  revolutionized my health classes. Students are more engaged,
                  and I feel more confident in delivering content that is both
                  evidence-based and relevant.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id='contact' className='w-full py-12 md:py-24 bg-orange-50'>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 items-center'>
              <div className='space-y-4'>
                <div className='inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600'>
                  Contact Us
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  Get in Touch
                </h2>
                <p className='text-gray-500 md:text-xl/relaxed'>
                  Ready to improve health and wellbeing at your school? Contact
                  us today to schedule a consultation.
                </p>
                <div className='space-y-4'>
                  <div className='flex items-center gap-2'>
                    <Phone className='h-5 w-5 text-orange-500' />
                    <span className='text-gray-500'>(233) 543-094511</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Mail className='h-5 w-5 text-orange-500' />
                    <span className='text-gray-500'>
                      info@everythingschoolhealth.com
                    </span>
                  </div>
                  {/* <div className='flex items-center gap-2'>
                    <MapPin className='h-5 w-5 text-orange-500' />
                    <span className='text-gray-500'>
                      123 Health Street, Suite 456, Education City
                    </span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Clock className='h-5 w-5 text-orange-500' />
                    <span className='text-gray-500'>
                      Monday - Friday: 8:00 AM - 5:00 PM
                    </span>
                  </div> */}
                </div>
              </div>
              <div className='rounded-lg border bg-white p-6 shadow-sm'>
                <form className='space-y-4'>
                  <div className='grid gap-4 sm:grid-cols-2'>
                    <div className='space-y-2'>
                      <label
                        htmlFor='first-name'
                        className='text-sm font-medium leading-none'
                      >
                        First name
                      </label>
                      <input
                        id='first-name'
                        className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                        placeholder='Enter your first name'
                      />
                    </div>
                    <div className='space-y-2'>
                      <label
                        htmlFor='last-name'
                        className='text-sm font-medium leading-none'
                      >
                        Last name
                      </label>
                      <input
                        id='last-name'
                        className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                        placeholder='Enter your last name'
                      />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <label
                      htmlFor='email'
                      className='text-sm font-medium leading-none'
                    >
                      Email
                    </label>
                    <input
                      id='email'
                      type='email'
                      className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      placeholder='Enter your email'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label
                      htmlFor='school'
                      className='text-sm font-medium leading-none'
                    >
                      School/District
                    </label>
                    <input
                      id='school'
                      className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      placeholder='Enter your school or district name'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label
                      htmlFor='message'
                      className='text-sm font-medium leading-none'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      className='flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      placeholder="Tell us about your school's health needs"
                    />
                  </div>
                  <Button className='w-full bg-orange-500 hover:bg-orange-600'>
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className='w-full py-12 md:py-24 lg:py-32 border-t'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Ready to Transform School Health?
                </h2>
                <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Partner with Everything School Health to create a healthier
                  environment for your students and staff.
                </p>
              </div>
              <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                <Button className='bg-orange-500 hover:bg-orange-600'>
                  Schedule a Consultation
                </Button>
                <Button
                  variant='outline'
                  className='border-orange-500 text-orange-500 hover:bg-orange-50'
                >
                  Download Our Brochure
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='w-full border-t py-6 md:py-0'>
        <div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
          <div className='flex items-center gap-2'>
            <Heart className='h-6 w-6 text-orange-500' />
            <p className='text-sm text-gray-500'>
              © 2025 Everything School Health. All rights reserved.
            </p>
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
