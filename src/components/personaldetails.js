import React from 'react'
const forms = ({formData, setFormdata}) => {
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormdata({...formData, name: e.target.value})}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormdata({...formData, email: e.target.value})}
        />
      </div>
    </div>
  )
}
export default forms
