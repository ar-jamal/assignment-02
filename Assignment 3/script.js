let Mobile = {
    android_china: {
        oppo: ["oppo 1", "oppo 2", "oppo 3"],
        realme: ["realme 1", 'realme 2', 'realme 3'],
        vivO: ["vivo 1", "vivo 2", "vivo 3"]
    },
    apple: {
        iphone_07: ["apple 1", "apple 2", "apple 3"],
        iphone_10: ["apple 4", "apple 5", "apple 6"],
        iphone_12: ["apple 7", "apple 8", "apple 9"]


    },
    android_branded: {
        samsung: ["samsung 1", "samsung 2", "samsung 3"],
        nokia: ["nokia 1", "nokia 2", "nokia 3"],
        googlePhone: ["googlePhone 1", "googlePhone 2", "googlePhone 3"],
        sony: ["sony 1", "sony 2", "sony 3"]

    }
}



window.addEventListener('load', function () {
    const types = document.getElementById('types')
    const brand = document.getElementById('brand')
    const details = document.getElementById('details')

    // console.log(types)
    // console.log(brand)
    // console.log(details)
    types.style.display = 'none'
    brand.style.display = 'none'
    details.style.display = 'none'

    types.onchange = function (e) {
        let value = e.target.value
        if (value) {
            loadOptions(brand, Object.keys(Mobile[value]), 'Select Brand')
        } else {
            brand.style.display = 'none'
        }
    }

    brand.onchange = function (e) {
        let parent = types.value;
        let value = e.target.value

        if (value) {
            const arr = Mobile[parent][value] ?? []
            details.style.display = 'block'
            details.innerText = ''
            arr.forEach(value => {
                const div = document.createElement('div')
                div.innerText = value
                details.appendChild(div)
            })
            // console.log()
        } else {
            details.innerText = ''
            details.style.display = 'none'
        }
    }


    loadOptions(types, Object.keys(Mobile), 'Select Phone type')

    function loadOptions(element, options, title) {
        element.style.display = 'inline-block'
        element.innerHTML = ''
        let optionEl = document.createElement('option')
        optionEl.innerText = title
        optionEl.value = ''
        element.appendChild(optionEl)
        options.forEach(option => {
            let optionEl = document.createElement('option')
            optionEl.innerText = option
            // optionEl.value = option
            element.appendChild(optionEl)
        });
    }
})

const options = Object.keys(Mobile)
const childOptions = []

function clickOption() {
    let optionDiv = document.getElementById('parent')
}
