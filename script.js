
function getData(){
    return fetch("data.json")
    .then(response => response.json())
    .then(data=>{
        return data;
    })
}
let tabs=document.querySelector("#nav-tabs");
tabs.addEventListener('click',(e)=>{
    if(e.target.tagName === 'BUTTON'){

        const currentButton = e.target;
        console.log(currentButton)
        
        if(currentButton.textContent === 'Daily'){
            getData().then(data => showData(data));

        }
        else if(currentButton.textContent === "Weekly"){
            getData().then(data => showDataWeekly(data));

        }
        else if(currentButton.textContent === "Monthly"){
            getData().then(data => showDataMonthly(data));

        }
        const activeButton = tabs.querySelector('.active');
        console.log(activeButton)
        if(activeButton){
            activeButton.classList.remove('active');
        }
        currentButton.classList.add('active');
    }
})

function showData(datatitles){
    let container=document.querySelector('.main-content');
    let dataHTML="";
    datatitles.forEach(data=>{
        dataHTML+=`
        <div class="${data.title.toLowerCase()}-card">
            <div class="background-image-${data.title.toLowerCase()}">
            </div>
            <div class="details">
                <div class="title">
                    <span>${data.title}</span>
                    <span class="material-icons">more_horiz</span>
                </div>
                <div class="timings">
                    <span class="current-time">${data.timeframes.daily.current}</span> <br> 
                    <span class="prev-time">Last Week: ${data.timeframes.daily.previous}</span>
                </div>
            </div>
        </div>
        `
    })

    container.innerHTML=dataHTML;
}

function showDataWeekly(datatitles){
    let container=document.querySelector('.main-content');
    let dataHTML="";
    datatitles.forEach(data=>{
        dataHTML+=`
        <div class="${data.title.toLowerCase()}-card">
            <div class="background-image-${data.title.toLowerCase()}">
            </div>
            <div class="details">
                <div class="title">
                    <span>${data.title}</span>
                    <span class="material-icons">more_horiz</span>
                </div>
                <div class="timings">
                    <span class="current-time">${data.timeframes.weekly.current}</span> <br> 
                    <span class="prev-time">Last Week: ${data.timeframes.weekly.previous}</span>
                </div>
            </div>
        </div>
        `
    })

    container.innerHTML=dataHTML;
}


function showDataMonthly(datatitles){
    let container=document.querySelector('.main-content');
    let dataHTML="";
    datatitles.forEach(data=>{
        dataHTML+=`
        <div class="${data.title.toLowerCase()}-card">
            <div class="background-image-${data.title.toLowerCase()}">
            </div>
            <div class="details">
                <div class="title">
                    <span>${data.title}</span>
                    <span class="material-icons">more_horiz</span>
                </div>
                <div class="timings">
                    <span class="current-time">${data.timeframes.monthly.current}</span> <br> 
                    <span class="prev-time">Last Week: ${data.timeframes.monthly.previous}</span>
                </div>
            </div>
        </div>
        `
    })

    container.innerHTML=dataHTML;
}

getData().then(data => showDataWeekly(data));


