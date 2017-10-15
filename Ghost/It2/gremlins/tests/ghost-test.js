describe('Random testing con gremlins', function () {
  it('No se generan errores en el home', function () {
    browser.url('/')

    browser.timeouts('script', 60000)

    browser.executeAsync(meterScript)

    browser.executeAsync(correrGremlins)
  })

  it('No se generan errores en el admin', function () {
    browser.url('/ghost')

    browser.waitForVisible('input[name="identification"]', 5000);

    let input = $('input[name="identification"]')
    input.setValue('diegorbaquero@gmail.com')

    input = $('input[name="password"]')
    input.setValue('hola1234')

    browser.click('button=Sign in')

    browser.waitForText('Stories', 5000);

    browser.timeouts('script', 60000)

    browser.executeAsync(meterScript)

    browser.executeAsync(correrGremlins)
  })
})

function meterScript (callback) {
  const s = document.createElement('script')
  s.src = 'https://rawgithub.com/marmelab/gremlins.js/master/gremlins.min.js'
  if (s.addEventListener) {
    s.addEventListener('load', callback, false)
  } else if (s.readyState) {
    s.onreadystatechange = callback
  }
  document.body.appendChild(s)
}

function correrGremlins (callback) {
  const horde = gremlins.createHorde()
  horde.unleash()

  setTimeout(() => {
    horde.stop()
    callback()
  }, 50000)
}
