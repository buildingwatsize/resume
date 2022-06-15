import IconPromptpay from 'assets/icons/pp'

const PromptPay = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <div>{IconPromptpay}</div>
      <div>
        <div className='text-white'>Promptpay</div>
        <div className="text-xs font-normal text-white/70">Started from ฿0.01</div>
      </div>
    </div>
  )
}

export default PromptPay