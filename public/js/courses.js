const courseCreateForm = document.querySelector('#course-create'),
    bigPoster = courseCreateForm.querySelector('#big-poster'),
    smallPoster = courseCreateForm.querySelector('#small-poster'),
    authorImg = courseCreateForm.querySelector('#author-img'),
    authorName = courseCreateForm.querySelector('#author'),
    courseName = courseCreateForm.querySelector('#title'),
    courseDescription = courseCreateForm.querySelector('#description'),
    courseDuration = courseCreateForm.querySelector('#duration'),
    lessonsCount = courseCreateForm.querySelector('#lectures'),
    studentCount = courseCreateForm.querySelector('#students'),
    courseLevel = courseCreateForm.querySelector('#level'),
    courseLanguage = courseCreateForm.querySelector('#language'),
    oldPrice = courseCreateForm.querySelector('#old_price'),
    newPrice = courseCreateForm.querySelector('#new_price'),
    addPartBtn = courseCreateForm.querySelector('[data-add-part]'),
    courseParts = courseCreateForm.querySelector('.course-parts')

addPartBtn.addEventListener('click', e => {
    let coursePart = document.createElement('div')
    coursePart.classList.add('row')
    coursePart.setAttribute('data-part', '')
    coursePart.innerHTML = `
        <div class="col-md-12" data-part-name>
            <label>Bo'lim nomi</label>
            <input class="form-control" type="text">
        </div>
        <div class="col-md-9" data-theme>
            <label>Mavzu nomi</label>
            <input class="form-control" type="text">
        </div>
        <div class="col-md-3">
            <label>Davomiyligi(2 soat 23 minut)</label>
            <input class="form-control" type="text">
        </div>
        <div class="col-md-12 pt-3">
            <button class="btn btn-info w-100" type="button" data-add-theme>Mavzu qo'shish</button>
        </div>
    `
    courseParts.append(coursePart)
    addTheme()
})

function addTheme() {
    const addThemeButtons = document.querySelectorAll('[data-add-theme]')

    addThemeButtons.forEach(el => {
        el.addEventListener('click', e => {
            let parent = e.currentTarget.parentElement.parentElement

            let col9 = document.createElement('div')
            col9.classList.add('col-md-9')
            col9.setAttribute('data-theme', '')
            col9.innerHTML = `
                <label>Mavzu nomi</label>
                <input class="form-control" type="text">
            `

            let col3 = document.createElement('div')
            col3.classList.add('col-md-3')
            col3.innerHTML = `
                <label>Davomiyligi(2 soat 23 minut)</label>
                <input class="form-control" type="text">
            `

            parent.insertBefore(col9, e.currentTarget.parentElement)
            parent.insertBefore(col3, e.currentTarget.parentElement)
        })
    })
}

courseCreateForm.addEventListener('submit', async e => {
    e.preventDefault()

    let formData = new FormData()

    formData.append('big_poster', bigPoster.files[0])
    formData.append('small_poster', smallPoster.files[0])
    formData.append('author_img', authorImg.value)
    formData.append('author', authorName.value)
    formData.append('title', courseName.value)
    formData.append('description', courseDescription.value)
    formData.append('duration', courseDuration.value)
    formData.append('lectures', lessonsCount.value)
    formData.append('students', studentCount.value)
    formData.append('level', courseLevel.value)
    formData.append('language', courseLanguage.value)
    formData.append('old_price', oldPrice.value)
    formData.append('new_price', newPrice.value)

    let list = []
    let parts = document.querySelectorAll('[data-part]')

    parts.forEach(part => {
        let partTitle = part.querySelector('[data-part-name]').children[1].value

        let lessons = []

        part.querySelectorAll('[data-theme]').forEach(el => {
            let theme = el.children[1].value
            let duration = el.nextElementSibling.children[1].value
            lessons.push({
                theme, duration
            })
        })

        list.push({
            part_title: partTitle,
            lessons
        })
    })

    formData.append('list', JSON.stringify(list))

    let response = await fetch('/admin/course-create', {
        method: 'POST',
        body: formData
    })

    response = await response.json()
    console.log(response)
})

const courseRemoveBtns = document.querySelectorAll('[data-remove-course]')
courseRemoveBtns.forEach(el => {
    el.addEventListener('click', async e => {
        const id = e.currentTarget.id

        let response = await fetch('/admin/course-remove/' + id)
        response = await response.json()
        if (response.ok) {
            window.location.reload()
        }
    })
})