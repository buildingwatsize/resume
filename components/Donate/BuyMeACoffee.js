import IconBuyMeACoffee from 'assets/icons/buymeacoffee'

const BuyMeACoffee = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <div>{IconBuyMeACoffee}</div>
      <div>
        <div className='text-white'>Buy me a Coffee</div>
        <div className="text-xs font-normal text-white/70">Started from $5</div>
      </div>
    </div>
  )
}

export default BuyMeACoffee