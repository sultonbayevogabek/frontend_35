const teacherCreateForm = document.querySelector('#teacher-create'),
    teacherImg = teacherCreateForm.querySelector('#img'),
    teacherName = teacherCreateForm.querySelector('#name'),
    teacherTelegram = teacherCreateForm.querySelector('#telegram'),
    teacherInstagram = teacherCreateForm.querySelector('#instagram'),
    teacherFacebook = teacherCreateForm.querySelector('#facebook'),
    teacherCourse = teacherCreateForm.querySelector('#count')

teacherCreateForm.addEventListener('submit', async e => {
    e.preventDefault()

    let formData = new FormData()

    formData.append('img', teacherImg.files[0])
    formData.append('name', teacherName.value)
    formData.append('telegram', teacherTelegram.value)
    formData.append('instagram', teacherInstagram.value)
    formData.append('facebook', teacherFacebook.value)
    formData.append('count', teacherCourse.value)

    let response = await fetch('/admin/teacher', {
        method: 'POST',
        body: formData
    })

    response = await response.json()

    if (response.ok) {
        window.location.reload()
    }
})

const teacherRemoveBtns = document.querySelectorAll('[data-remove-teacher]')

teacherRemoveBtns.forEach(el => {
    el.addEventListener('click', async e => {
        const id = e.target.id

        let response = await fetch('/admin/teacher-remove', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                id: id
            })
        })
        response = await response.json()

        if (response.ok) {
            window.location.reload()
        }
    })
})