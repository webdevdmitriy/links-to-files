data.forEach(item => addLinks(item))

function addLinks(data) {
  console.log(data)
  let div = null
  let ol = null
  const folder = data.dir
  div = document.createElement('div')
  div.classList.add('main__block')
  const h2 = document.createElement('h2')
  h2.classList.add('title')
  h2.textContent = folder
  div.append(h2)
  ol = document.createElement('ol')
  ol.classList.add('list')

  for (let i = 0; i < data.files.length; i++) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.textContent = data.names[i]

    a.setAttribute('href', data.files[i])
    a.setAttribute('target', '_blank')
    li.append(a)
    ol.append(li)
  }

  div.append(ol)
  console.log(document.querySelector('.main__inner'))
  document.querySelector('.main__inner').append(div)
}

const ols = document.querySelectorAll('.title')
ols.forEach(item => {
  item.addEventListener('click', function () {
    if (this.parentNode.querySelector('ol').style.display == 'block') {
      this.parentNode.querySelector('ol').style.display = 'none'
    } else {
      this.parentNode.querySelector('ol').style.display = 'block'
    }
  })
})

const secret = document.querySelectorAll('.secret')
secret.forEach(elem => {
  elem.addEventListener('click', function () {
    if (this.querySelector('img').classList.contains('secret-show')) {
      this.querySelector('img').classList.remove('secret-show')
    } else {
      this.querySelector('img').classList.add('secret-show')
    }
  })
})
