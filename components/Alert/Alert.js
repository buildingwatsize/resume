const Alert = ({ icon, title, content, action }) => {
  return (
    <div className="mt-3 text-center">
      <div>{icon}</div>
      <h3 className="text-lg leading-6 font-medium text-white">{title}</h3>
      <div className="mt-2 px-7 py-3">
        <p className="text-sm text-white text-opacity-80">
          {content}
        </p>
      </div>
      <div>{action}</div>
    </div>
  )
}

export default Alert