import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import underline from '../../assets/home/underline.png'
import './Other.scss'

function Privacy() {
  return (
    <Layout>
      <div className="return container m-auto pb-10">
        <div className="heading-content">
        <h3 className='bilbo-font text-primary'>Faq</h3>
            <h4 className='rale-font'>Privacy Policy</h4>
            <img src={underline} alt="" />
        </div>
      <ul class="max-w-2xl mx-auto mt-20 divide-y  shadow shadow-yellow-600 rounded-xl">
    <li>
        <details class="group">
            <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                    </path>
                </svg>
                <span>Refunds​ and Return</span>
            </summary>

            <article class="px-4 pb-4">
                <p>
                We’re sorry, but as a small business, we are unable to offer returns at this time due to the associated expenses. We recommend reviewing our product descriptions and specifications carefully before making your purchase to ensure it meets your expectations.


                </p>
            </article>
        </details>
    </li>
    <li>
        <details class="group">
            <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                    </path>
                </svg>
                <span>Need help?</span>
            </summary>

            <article class="px-4 pb-4">
                <p>
                Contact us at support@smairajewels.shop or DM on instagram for questions related to any services / products.

</p>
            </article>
        </details>
    </li>

</ul>
      </div>
    </Layout>
  )
}

export default Privacy