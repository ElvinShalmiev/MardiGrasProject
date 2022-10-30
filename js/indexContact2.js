function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    // alert("You have entered an invalid email address!")
    return (false)
}


const form_submit = () => {
    const email = document.querySelector('#form-email-1')
    const name = document.querySelector('#form-name-1')
    const subject = document.querySelector('#form-subject-1')
    const message = document.querySelector('#form-message-1')

    // console.log('Hello')
    const goodEmail = ValidateEmail(email.value)
    const goodName = name.value.length != 0
    const goodSubject = subject.value.length != 0
    const goodMessage = message.value.length != 0

    if (goodEmail && goodName && goodSubject && goodMessage) {
        alert('The Data is correct')
    }
    else {
        alert("You have entered an invalid email address or unfilled spaces!")
    }
}
