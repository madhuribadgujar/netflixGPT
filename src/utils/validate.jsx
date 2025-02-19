const chkValidData = (email, password, fullName = null) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  )

  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    )
  if (fullName) {
    const resName =
      /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
        fullName
      )
    if (!resName) return 'Name not valid'
  }

  if (!isEmailValid) return 'Email id not valid'

  if (!isPasswordValid) return 'Password not valid'

  return null
}
export default chkValidData
