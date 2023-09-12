import './index.css'

const PlanCard = props => {
  const {activeCard, planDetails} = props
  const {
    subscriptionPlanName,
    planIncludes,
    price,
    subscriptionFor,
    description,
    subscriptionPlanId,
  } = planDetails
  const isSame = subscriptionPlanId === activeCard

  return (
    <div>
      {isSame && (
        <div className="plan-card-details">
          <h1>{subscriptionPlanName}</h1>
          <h5>{subscriptionFor}</h5>
          <p>{description}</p>
          <h3>{price}</h3>
          <p className="offer">Get your first 3 months for 20/mo</p>
          <p>Whats include on{subscriptionPlanName}</p>
          <ul>
            {planIncludes.map(each => (
              <li>{each}</li>
            ))}
          </ul>
          <button type="button" className="try-for-free-btn">
            Try for free
          </button>
        </div>
      )}
    </div>
  )
}
export default PlanCard
