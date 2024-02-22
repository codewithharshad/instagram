import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'


function About() {
  return (
    <Layout>
      <HeroSection head='Smaira Luxe' para='ABOUT US'/>
      <div className='about'>
      <div class="bg-white py-12">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-5xl lg:text-center flex flex-col justify-center items-center">
      {/* <h2 class="text-base font-semibold leading-7 text-blue-100 bg-blue-600 px-3  uppercase mb-4 lg:mb-8">
        Key Features</h2> */}
      <h1 class="lg:text-7xl text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-center">About
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-450 to-yellow-500">Smaira Luxe</span>
      </h1>
      <p class="mt-6 text-md text-gray-600 max-w-lg text-center">Discover the exceptional features of our insurance
        services designed to streamline processes and provide comprehensive coverage for your needs.</p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center  gold-primary"><svg
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
              </svg></div>Customized Coverage Plans
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">Tailor your insurance coverage to match your unique needs.
            Our customizable plans ensure you only pay for the coverage that matters most to you.</dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center  gold-primary"><svg
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"></path>
              </svg></div>Risk Assessment Expertise
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">Benefit from our cutting-edge risk assessment model,
            providing accurate insights into potential risks and ensuring your coverage aligns with your risk profile.
          </dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center  gold-primary"><svg
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                </path>
              </svg></div>Cost-Efficient Premiums
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">Experience cost-effective insurance solutions. We keep our
            premiums competitive, ensuring you receive optimal coverage without breaking the bank.</dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center  gold-primary"><svg
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">
                </path>
              </svg></div>24/7 Customer Support
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">Our dedicated support team is available around the clock to
            assist you. Whether it's day or night, we're here to address your insurance-related queries promptly.</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
      </div>
    </Layout>
  )
}

export default About