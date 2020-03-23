// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const hC = [
    {
        date: '22MAR2020',
        title: 'Lambda Times',
        temp: '0°'
    }
];


const createHeader = (date, title, temp) => {
    const header = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const headerTemp = document.createElement('span');

    header.appendChild(headerDate);
    // header.appendChild(date);
    header.appendChild(headerTitle);
    header.appendChild(headerTemp);
    
    header.classList.add('header');
    headerDate.classList.add('date');
    headerTitle.classList.add('headerTitle');
    headerTemp.classList.add('temp');
    
    headerDate.textContent = date
    headerTitle.textContent = title
    headerTemp.textContent = temp
    
    return header;
    
    
}
const headerC = document.querySelector('.header-container');
hC.forEach(hC =>{
    headerC.appendChild(createHeader(hC.date, hC.title, hC.temp))
});