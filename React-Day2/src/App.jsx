import React from 'react'
import Sub_card from './Sub_card'

function App() {
  let data = [
    {
      title: "FREE",
      price: "$0",
      user_type: "Single User",
      storage: "50GB Storage",
      benefits: ["Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain", "Monthly Status Reports"]
    },
    {
      title: "PLUS",
      price: "$9",
      user_type: "5 Users",
      storage: "50GB Storage",
      benefits: ["Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain", "Monthly Status Reports"]
    },
    {
      title: "PRO",
      price: "$49",
      user_type: "Unlimited Users",
      storage: "50GB Storage",
      benefits: ["Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain", "Monthly Status Reports"]
    }

  ]
  return <>
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            data.map((e, i) => {
              return <Sub_card
                title={e.title}
                price={e.price}
                user_type={e.user_type}
                storage={e.storage}
                benefits={e.benefits}
                key = {i}
              />
            })
          }
        </div>
      </div>
    </section>

  </>
}

export default App

