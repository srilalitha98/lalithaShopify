const PlanItem = props => {
  const {planDetails, onChangeSubscriptionPlan} = props
  const {planName, planId} = planDetails
  const onClickPlanItem = () => {
    onChangeSubscriptionPlan(planId)
  }
  return (
    <li type="button" className="plan-item" onClick={onClickPlanItem}>
      {planName}
    </li>
  )
}
export default PlanItem
