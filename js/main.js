
// data content
// object that stores all main content data

const mainContentData = [
{
	image: "images/curved-metal-bars.jpg",
	title: "About TINMUK Advisory",
	text: "A leading financial services firm dedicated to providing expert Tax, Advisory, and Assurance solutions to businesses and individuals.We combine local knowledge and global expertise to deliver results you can trust."
}
];

 //Select template and container
 const template = document.getElementById("template-data")
 const container = document.getElementById("main-content-container")
 
 //looping through data to populate template
 mainContentData.forEach(item=>{
 const clone = template.content.cloneNode(true);
 clone.querySelector("img").src = item.image;
 clone.querySelector("img").alt = item.title;
 clone.querySelector("h2").textContent = item.title;
 clone.querySelector("p").textContent = item.text;
 
 container.appendChild(clone);
 
 });
 
 
 // data/content.js

// Object representing your "Why Choose Us" section
// Simple data object
const mainContentData2 = [
  {
    title: "Why Choose Us",
    image: "images/city.jpg",
    alt: "City skyline",
    listItems: [
      "Experienced team of Chartered Accountants and Advisors",
      "Personalized solutions for every client",
      "Proven track record",
      "Compliance and risk management expertise"
    ]
  }
];



//////////////////////////////////////////////////////

// Get template and container
const template2 = document.getElementById("template-data2");
const container2 = document.getElementById("main-content-container2");

// Loop through data and fill template
mainContentData2.forEach(item => {
  const clone = template2.content.cloneNode(true);
  
  // Fill image and title
  clone.querySelector("img").src = item.image;
  clone.querySelector("img").alt = item.alt;
  clone.querySelector("h2").textContent = item.title;

  // Fill list items
  const ul = clone.querySelector("ul");
  item.listItems.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  });

  // Add to the page
  container2.appendChild(clone);
});

const test1 = document.getElementById("template-data")

console.log(test1)

const test2 = document.querySelectorAll(".test1")
console.log(test2)

////////////////////////notes to read /////////////////
// check notes on map in arrow functions
// arrays
// forEach

// loop adding li items.. for (let i = 0; i <50; i++)
	// liElement.classList.add("test");
//  	liElement.textContent="New-item";
//	fragment.appendChild(lielement);

// menuElement.appendChild(fragment);



////////////////////////////////////////////aside template ////////////////

const asideContent = [
  { 	
    title: "Tax",
    text: "Optimizing strategies",
    image: "images/tax.jpg",
    alt: "Tax advisory image"
  },
  { 	
    title: "Advisory",
    text: "Delivering insights",
    image: "images/advisory.jpg",
    alt: "Advisory image"
  },
  { 	
    title: "Assurance",
    text: "Audits, risk assessments, and financial reporting",
    image: "images/assurance.jpg",
    alt: "Assurance image"
  }
];



const template3 = document.getElementById("aside-template")
const container3 = document.getElementById("aside-container")

asideContent.forEach(item=>{
	const clone = template3.content.cloneNode(true);
	clone.querySelector("h3").textContent = item.title;
	clone.querySelector("p").textContent = item.text;
	clone.querySelector("img").src = item.image;
	clone.querySelector("img").alt = item.alt;
	
	container3.appendChild(clone);
});
