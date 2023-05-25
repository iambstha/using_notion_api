const datasEl = document.querySelector('#datas')
const loadingEl = document.querySelector('#loading')
let loading = false

const getDatasFromBackend = async () => {
  loading = true
  const res = await fetch('http://localhost:5000/videos')
  const data = await res.json()
  loading = false
  return data
}

const addDatasToDom = async () => {
  const datas = await getDatasFromBackend()


  if (!loading) {
    loadingEl.innerHTML = ''
  }

  datas.forEach((data) => {
    console.log(data)
    const div = document.createElement('div')
    div.className = 'data'
    div.innerHTML = `
      <h3>${data.title}</h3>
      <ul>
        <li><strong>Release Date: </strong> ${data.date}</li>
        <li><strong>Description: </strong> ${data.description}</li>
      </ul>
      <div class="tags">${data.tags}</div>
    `
    datasEl.appendChild(div)
  })
}

addDatasToDom()
