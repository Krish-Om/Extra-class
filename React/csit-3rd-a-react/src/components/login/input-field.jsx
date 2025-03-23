import './login.css'

export const Input = ({ label, type, id, placeholder, onClick, refProp }) => {
  return (
    <div className="input-group">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        ref={refProp}
        className="input-field"
      />
    </div>
  )
}

export default Input
