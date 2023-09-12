import {Component} from 'react'
import Header from '../Header'
import PlanCard from '../PlanCard'
import PlanItem from '../PlanItem'
import './index.css'

const subscriptionPlans = [
  {planName: 'Basic', planId: 'BASIC'},
  {planName: 'Shopify', planId: 'SHOPIFY'},
  {planName: 'Advanced', planId: 'ADVANCED'},
]

const subscriptionPlanDetails = [
  {
    subscriptionPlanName: 'Basic',
    subscriptionFor: 'FOR INDIVIDUALS & SMALL BUSINESS',
    price: '1,994/-',
    description:
      'Everything you need to create your store, ship,products, and process payments',
    planIncludes: [
      'Basic reports',
      'Up to 1,000 inventory locations, 2 staff accounts ',
    ],
    subscriptionPlanId: 'BASIC',
  },
  {
    subscriptionPlanName: 'Shopify',
    subscriptionFor: 'FOR SMALL BUSINESS',
    price: '7,447/-',
    description:
      'Level up your business with professional reporting and more staff accounts',
    planIncludes: [
      'Professional reports',
      'Up to 1,000 inventory locations, 5 staff accounts ',
    ],
    subscriptionPlanId: 'SHOPIFY',
  },
  {
    subscriptionPlanName: 'Advanced',
    subscriptionFor: 'FOR MEDIUM TO LARGE BUSINESS',
    price: '30,164/-',
    description:
      'Get the best of shopify with custom reporting and our lowest transaction fees',
    planIncludes: [
      'Custom report builder',
      'Up to 1,000 inventory locations, 15 staff accounts ',
    ],
    subscriptionPlanId: 'ADVANCED',
  },
]

class Home extends Component {
  state = {selectedPlanId: 'BASIC'}

  onChangeSubscriptionPlan = planId => {
    this.setState({selectedPlanId: planId})
  }

  render() {
    const {selectedPlanId} = this.state
    console.log(selectedPlanId)
    return (
      <div>
        <Header />
        <div>
          <button type="button">Pay Monthly</button>
          <button type="button">Pay Yearly(save 25%)</button>
        </div>
        <div className="plan-btns-cont">
          {subscriptionPlans.map(each => (
            <PlanItem
              planDetails={each}
              onChangeSubscriptionPlan={this.onChangeSubscriptionPlan}
            />
          ))}
        </div>
        <ul className="subscription-plans-cont-sm-device">
          {subscriptionPlanDetails.map(eachItem => (
            <PlanCard activeCard={selectedPlanId} planDetails={eachItem} />
          ))}
        </ul>
        <ul className="subscription-plans-cont-lg-device">
          {subscriptionPlanDetails.map(eachItem => (
            <li className="plan-card">
              <h1>{eachItem.subscriptionPlanName}</h1>
              <h5>{eachItem.subscriptionFor}</h5>
              <p>{eachItem.description}</p>
              <p>{eachItem.price}</p>
              <p className="offer">Get your first 3 months for 20/mo</p>
              <p>Whats include on{eachItem.subscriptionPlanName}</p>
              <ul>
                {eachItem.planIncludes.map(each => (
                  <li>{each}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
