const coutriesElem = document.querySelector(".countries")
const dropDown = document.querySelector(".dropDown");
const dropElem = document.querySelector(".drop");
const region = document.querySelectorAll(".region");
const search = document.querySelector(".search");
const toggle = document.querySelector(".toggle");
const moon = document.querySelector(".moon");


// json file --->
async function getCountry() {
  const url = await fetch("https://restcountries.com/v2/all");
  const res = await url.json();
  console.log(res);
  res.forEach(element => {
    showCountry(element)
  });

}
getCountry();
function showCountry(data) {
  const country = document.createElement("div")
  country.classList.add("country")
  country.innerHTML = `<div class="country-img">
    <img src="${data.flag}" alt="">
    </div>
    <div class="country-info">
                    <h5 class="countryName">${data.name}</h5>
                    <p><strong>Population:</strong>${data.population}</p>
                    <p class="regionName"><strong>Region:</strong>${data.region}</p>
                    <p><strong>Capital:</strong>${data.capital}</p>
                </div>`

  coutriesElem.appendChild(country)
  country.addEventListener("click", () => {
    showCountryDetail(data)
  })
}

dropDown.addEventListener("click", () => {
  dropElem.classList.toggle("showDropDown")
})
const regionName = document.getElementsByClassName("regionName");
const countryName = document.getElementsByClassName("countryName");

region.forEach(element => {
  element.addEventListener("click", () => {
    console.log(element);
    Array.from(regionName).forEach(elem => {
      console.log(elem.innerText);
      if (elem.innerText.includes(element.innerText) || element.innerText == "All") {
        elem.parentElement.parentElement.style.display = "grid"
      } else {
        elem.parentElement.parentElement.style.display = "none"
      }
    });
  })
});


// search bar------->
search.addEventListener("input", () => {
  console.log(search.value.toLowerCase());
  Array.from(countryName).forEach(elem => {
    // console.log(elem.innerText);
    if (elem.innerText.toLowerCase().includes(search.value.toLowerCase())) {
      elem.parentElement.parentElement.style.display = "grid"
    } else {
      elem.parentElement.parentElement.style.display = "none"
    }
  });
})


// dark mode------>
toggle.addEventListener("click",()=> {
  document.body.classList.toggle("dark")
  moon.classList.toggle("fas")
})


const countryModal = document.querySelector(".countryModal");


function showCountryDetail(data) {
  countryModal.classList.toggle("show")

  countryModal.innerHTML = ` <button class="back">Back</button>
  <div class="modal">
      <div class="leftModal">
          <img src="${data.flag}" alt="">
      </div>
      <div class="rightmodal">
          <h1>${data.name}</h1>
         <div class="modalinfo">
          <div class="innerLeft inner ">
              <p><strong>Native Name:</strong>${data.nativeName}</p>
              <p><strong>Population:</strong>${data.population}</p>
              <p><strong>Region:</strong>${data.regin}</p>
              <p><strong>sub-region:</strong>${data.subregin}</p>
          </div>
          <div class="innerRight  inner">
              <p><strong>Cpital:</strong>${data.capital}</p>
              <p><strong>Top Level Domain:</strong>${data.topLevelDomain}</p>
              <p><strong>Currenies:</strong>${data.currencies.map(elem=>elem.name)}</p>
              <p><strong>Languages:</strong>${data.languages.map(elem=>elem.name)}</p>
          </div>
         </div>
      </div>
  </div>`



// back button----->
  const back = document.querySelector(".back")

  back.addEventListener("click", ()=> {
    countryModal.classList.toggle("show")
    // console.log('back button')
    })

}






