const dash = document.getElementById('dashClick');
const navBarContainer =document.querySelector('.navBarContainer');
const hrightContainer = document.querySelector('.hrightContainer');
const fundContainer = document.querySelector('.fundContainer');
const addFund = document.querySelector('.fundBtn');
const grlist = document.querySelector('.grlist');
const profileOpen = document.querySelector('.profileOpen');
const gruser = document.querySelector('.gruser');
const linestyle = document.getElementById('linestyle');
const donutchart = document.getElementById('donutchart');
dash.addEventListener('click',()=>{
if(navBarContainer.style.display=='none'){
    navBarContainer.style.display='block';

if(screen.width<684)
{
 hrightContainer.style.display='none'
}
if(screen.width<=429)
{
fundContainer.style.display='none'
}
}else{
    navBarContainer.style.display='none';
    hrightContainer.style.display='block';
    fundContainer.style.display='block';
 }
});

addFund.addEventListener('click',()=>{
setTimeout(function(){
grlist.style.display='none';
},3000);
grlist.style.display='block';
})

profileOpen.addEventListener('click',()=>{
grlist.style.display='none';
setTimeout(function(){
gruser.style.display='none';
},3000);
gruser.style.display='block';
})

/********graph*****/
let lineChart = new Chart(linestyle,{
type:'line',
data:{
labels:['Jan','Feb','Mar','Apr','May','Jun'],
datasets:[{
 label:'Total views',
 data:[
    {x:'Jan', y:'40',}
],
 fill:0,
 lineTension:0.7,
 backgroundColor:'#80E2FF',
 borderColor:'#80E2FF',
 borderWidth:1,
 borderCapStyle:'round',
 borderJoinStyle:'round',
 pointBorderColor:'#80E2FF',
 pointBackgroundColor:'white',
 data:[25,15,25,20,25,15],
},
{
    label:'Products sold',
    fill:false,
    lineTension:0.7,
    backgroundColor:'#A3A6B4',
    borderColor:'#A3A6B4',
    borderWidth:1,
    borderCapStyle:'round',
    borderJoinStyle:'round',
    pointBorderColor:'#A3A6B4',
    pointBackgroundColor:'white',
    data:[25,20,20,25,20,30],
   }],
}
});
let doghnut = new Chart(donutchart,{
type: 'doughnut',
data:{
    labels:['France','Italy','Japan','Canada'],
    datasets:[{
       label:'Sales',
        data:[43,25,20,26],
        backgroundColor:[
            '#B0EAFF',
            '#F49FA8',
            '#FFDF94',
            '#B5B3FB',
        ],
        borderColor:[
            '#B0EAFF',
            '#F49FA8',
            '#FFDF94',
            '#B5B3FB',  
        ],
    }],
},
});




    
      
