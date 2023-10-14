/*            *
                                            Name of the challenge      : Async and Await                      *
                                            Challenge No               : 28                                                          *
                                            Developed for              : VHITECH Training Program         *
                                                Maintenance History                                                    *
                                            Developer                  : Premkumar T                                                      *
                                            Creation date              : 11/10/2023     Ticket No:               *
**/



//Screen Declaration
setInterval(() => {
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString()
    document.getElementById('currentTime').innerText = new Date().toLocaleTimeString('en-in')
}, 1000)

//DOM declaration
const setCountries = document.getElementById('country')
const setCapital = document.getElementById('capital')

//Constant declaration
const API = 'https://restcountries.com/v3.1/all'

//Error declaration

//Main functions

const fetchdata = (async () => {
    try {
        const response = await fetch(API)
        let data = await response.json()
        let sortedData = data.sort((a, b) => a.name.common.localeCompare(b.name.common))
        for (const key in sortedData) {
            const option = document.createElement('option')
            option.value = key
            option.textContent = sortedData[key].name.common
            setCountries.appendChild(option)
            setCountries.addEventListener('change', async () => {
                setCapital.innerHTML = '';
                for (const key in sortedData) {
                    if (setCountries.value == key) {
                        const capitals = data[key].capital
                        for (const index of capitals) {
                            const option = document.createElement('option')
                            option.value = index
                            option.textContent = index
                            setCapital.appendChild(option)
                        }
                    }
                }
            })
        }
    } catch (error) {
        console.log(error);
    }
})()



