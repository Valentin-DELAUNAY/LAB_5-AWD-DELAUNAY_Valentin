function userForm(){
    let firstname= document.getElementById("firstname").value;
    let lastname= document.getElementById("lastname").value;
    let email= document.getElementById("email").value;
    let address= document.getElementById("address").value;
    let city= document.getElementById("city").value;
    let province= document.getElementById("province").value;
    let membership = document.getElementsByName('membership');
    let membershipChoice;
    let membershipChoic;
    for (let i=0 ; i<membership.length ; i++){
        if (membership[i].checked) {
            membershipChoice = membership[i].value;
        }
        if (membershipChoice=="premium_membership"){
            membershipChoic="Premium";
        }
        if (membershipChoice=="standard_membership"){
            membershipChoic="Standard";
        }
        if (membershipChoice=="basic_membership"){
            membershipChoic="Basic";
        }
    }
    
    if (firstname!=null && lastname!=null && email!=null && address!=null && city!=null && province!=null && membership!=null){
        document.getElementById("output").innerHTML= "<br>Full name: " + firstname + " " + lastname + "<br>Email: "+ email + "<br>Address: " + address + ", "+ city + ", " + province + "<br>Membership: " + membershipChoic + "<br> \n";
    }
}

document.getElementById("calculate").addEventListener("click", myExcelFuns(), false);
function myExcelFuns(){
    let det = document.getElementsByName("result");
    let choice;
    for (let j=0; j<det.length; j++){
        if (det[j].checked){
            choice= det[j].value;
        }
    }
    let numberStr=document.getElementById("numbers").value;
    if (numberStr!=null){
        let numberArr= numberStr.replace(/[\s]{2,}/g, ' ', '');
        numberArr= numberArr.replace(/^[\s]/, '');
        numberArr= numberArr.replace(/[\s]$/, '');
        numberArr= numberArr.split(' ');
        let finalNumericArray=[];
        for (k=0; k<numberArr.length; k++){
            finalNumericArray[k]=parseInt(numberArr[k]);
        }
        if(numberStr!=""){
            let result=0;
            if (choice== "AutoSum"){
                for (let l=0; l<finalNumericArray.length; l++){
                    result= result+ finalNumericArray[l];
                }
                document.getElementById("output").innerHTML="<h3>"+"Your result is display here !"+"</h3>"+"\nThe addition of your numbers is "+ result +".";
            }
            if (choice=="Average"){
                for (let m=0; m<finalNumericArray.length; m++){
                    let addition=0;
                    for (let n=0; n<finalNumericArray.length; n++){
                        addition= addition+ finalNumericArray[n];
                    }
                    result= addition/ finalNumericArray.length;
                }
                document.getElementById("output").innerHTML="<h3>"+"Your result is display here !"+"</h3>"+"\nThe average of your numbers is "+ result +".";
            }
            if (choice=="Max"){
                result= finalNumericArray[0];
                for (let o=0; o<finalNumericArray.length; o++){
                    if(result<finalNumericArray[o]){
                        result=finalNumericArray[o];
                    }
                }
                document.getElementById("output").innerHTML="<h3>"+"Your result is display here !"+"</h3>"+"\nThe maximal number is "+ result +".";
            }
            if (choice=="Min"){
                result= finalNumericArray[0];
                for (let p=0; p<finalNumericArray.length; p++){
                    if(result>finalNumericArray[p]){
                        result=finalNumericArray[p];
                    }
                }
                document.getElementById("output").innerHTML="<h3>"+"Your result is display here !"+"</h3>"+"\nThe minimal number is "+ result +".";
            }
        }
        else{
            document.getElementById("output").innerHTML="<p>"+"Your input is invalid, please fill numbers separated by spaces."+"</p>";
        }
    }
    else{
        document.getElementById("output").innerHTML="You need to enter valid number(s).";
    }
    return false;
}
