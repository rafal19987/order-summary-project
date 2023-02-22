/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/home-page.scss'

const proceedBtn = document.getElementById('proceedBtn')
const loadingIconFromFontAwasome = `<i class="order__proceed--loading-icon fa-solid fa-circle-notch"></i>`

const setLoading = (e) => {
  e.target.innerHTML = `${loadingIconFromFontAwasome} w trakcie ładowania`
}

proceedBtn.addEventListener('click', (e) => setLoading(e))
