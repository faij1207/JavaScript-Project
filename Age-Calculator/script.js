const dob = document.getElementById('dob');
dob.max = new Date().toISOString().split("T")[0];

const result = document.getElementById('result');

function calculateAge() {
    const birthDate = new Date(dob.value);
    const today = new Date();

    let y3 = today.getFullYear() - birthDate.getFullYear();
    let m3 = today.getMonth() - birthDate.getMonth();
    let d3 = today.getDate() - birthDate.getDate();

    if (d3 < 0) {
        m3--;
        const daysInMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        d3 += daysInMonth;
    }

    if (m3 < 0) {
        y3--;
        m3 += 12;
    }

    result.innerHTML = `Your Age is <span>${y3}</span> Years, <span>${m3}</span> Months and <span>${d3}</span> Days`;
}


//  let dob = document.getElementById('dob');
//         dob.max=new Date().toISOString().split("T")[0];

//         let result = document.getElementById('result');

//         function calculateAge() {
//             let birthDate = new Date(dob.value);

//             let d1=birthDate.getDate();
//             let m1=birthDate.getMonth()+1;
//             let y1=birthDate.getFullYear();

//             let today = new Date();

//             let d2=today.getDate();
//             let m2=today.getMonth()+1;
//             let y2=today.getFullYear();

//             let d3 ,m3 ,y3;

//             y3=y2-y1;

//             if(m2>=m1){
//                 m3=m2-m1;
//             }else{
//                 y3--;
//                 m3=12+m2-m1;
//             }

//             if(d2>=d1){
//                 d3=d2-d1;
//             }else{
//                 m3--;
//                 let days;
//                 if(m2==1 || m2==3 || m2==5 || m2==7 || m2==8 || m2==10 || m2==12){
//                     days=31;
//                 }else if(m2==4 || m2==6 || m2==9 || m2==11){
//                     days=30;
//                 }else{
//                     if((y2%4==0 && y2%100!=0) || y2%400==0){
//                         days=29;
//                     }else{
//                         days=28;
//                     }
//                 }
//                 d3=days+d2-d1;
//             }
//             result.innerHTML=`Your Age is <span> ${y3} </span> Years,<span> ${m3} </span> Months and <span> ${d3} </span> Days`;
//         }