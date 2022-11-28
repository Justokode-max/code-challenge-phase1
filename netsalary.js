//User inputs the basic salary and total benefits
const prompt=require("prompt-sync")({siginit:true});
let basicSalary = prompt("Please enter your monthly basic salary ","basicSalary" );
let totalBenefits=prompt("Please enter your benefits ","benefits");
let disAbility=prompt("Do you have any disability y/n :","disability");
//convert the inputed strings to integers
basicSalary=parseInt(basicSalary);
totalBenefits=parseInt(totalBenefits);
//calculates the Gross pay
const grosspay=basicSalary+totalBenefits;
//calculates the annual salary
let annualSalary=basicSalary*12;
//outputs the Grosspay
console.log("Grosspay="+grosspay);

    
    
        //calculate and logging the NHIF Deductions using an if else statement
   function nhifDeducts(l){
    
        if(grosspay>0 && grosspay<=5999){
            let nhifDeductions= 150;
            console.log('NHIF DEDUCTS='+ nhifDeductions) ;
        }else if(grosspay>=6000 && grosspay<=7999){
            let nhifDeductions= 300;
            console.log('NHIF DEDUCTS='+ nhifDeductions); 
        }else if(grosspay>=8000 && grosspay<=11999){
            let nhifDeductions= 400;
            console.log('NHIF DEDUCTS='+ nhifDeductions); 
        }else if (grosspay>=12000 && grosspay<=14999){
            let nhifDeductions= 500;
            console.log('NHIF DEDUCTS='+ nhifDeductions); 
        }else if(grosspay>=15000 && grosspay<=19999){
            let nhifDeductions= 600;
            console.log('NHIF DEDUCTS='+ nhifDeductions); 
        }else if(grosspay>=20000 && grosspay<=24999){
            let nhifDeductions= 750;
            console.log('NHIF DEDUCTS='+ nhifDeductions) 
        }else if(grosspay>=25000 && grosspay<=29999){
            let nhifDeductions= 850;
            console.log('NHIF DEDUCTS='+ nhifDeductions);
        }else if (grosspay>=30000 && grosspay<=34999){
            let nhifDeductions= 900;
            console.log('NHIF DEDUCTS='+ nhifDeductions);
        }else if(grosspay>=35000 && grosspay<=39999){
            let nhifDeductions= 950;
            console.log('NHIF DEDUCTS='+ nhifDeductions);
        }else if(grosspay>=40000 && grosspay<=44999){
            let nhifDeductions= 1000;
            console.log('NHIF DEDUCTS='+ nhifDeductions);
        }else if(grosspay>=45000 && grosspay<=49999){
            let nhifDeductions= 1100;
            console.log('NHIF DEDUCTS='+ nhifDeductions);
        }else if(grosspay>=50000 && grosspay<=59999){
            let nhifDeductions= 1200;
            console.log('NHIF DEDUCTS='+ nhifDeductions);
        }else if(grosspay>=60000 && grosspay<=69999){
            let nhifDeductions= 1300;
            console.log('NHIF DEDUCTS='+ nhifDeductions);
        }else if (grosspay>=70000 && grosspay<=79999){
            let nhifDeductions= 1400;
            console.log('NHIF DEDUCTS='+ nhifDeductions);
        }else if(grosspay>=80000 && grosspay<=89999){
            let nhifDeductions= 1500;
            console.log('NHIF DEDUCTS='+ nhifDeductions);
        }else if(grosspay>=90000 && grosspay<=99999){
            let nhifDeductions= 1600;
            console.log('NHIF DEDUCTS='+ nhifDeductions);
        }else if(grosspay>=100000){
            let nhifDeductions= 1700;
            console.log('NHIF DEDUCTS='+ nhifDeductions)
        }
   }
   nhifDeducts(grosspay);
        
   
   function grossTax(g){ 
   if(grosspay<=24000){
    let Tax=0;
    console.log("Total tax:"+Tax) 
   }else if (grosspay>=24001 && grosspay<=32333 ){
    let Tax=(0.1*24000)+0.25*(grosspay-24001);
    console.log("Total tax:"+Tax);
   }else if(grosspay>32333){
    let Tax=0.3*(grosspay-32333)+(0.1*24000)+0.25*(grosspay-24001);
    console.log("Total tax:"+Tax);
   }

}
   grossTax(grosspay);
    function totalRelief(tt) {
        let personalRelief=2400;
        let insuranceRelief=0.15 * (nhifDeductions + NHIFContributions) ;
        let housingRelief=9000;
       
        let PensionFund=20000;
        function pensionCalculator(annualSalary){
            let pensionablePay=annualSalary-288000;
            if(pensionablePay>400000){
                let pension=0.1*400000;
                
            }else if(pensionablePay>400000 && pensionablePay<800000){
                let pension=(0.1*400000)+((pensionablePay-400000)*0.15)
    
            }else if(pensionablePay>800000 && pensionablePay<1200000){
                let pension=(0.1*400000)+((pensionablePay-400000)*0.15)+((pensionablePay-800000)*0.2);
            }else if(pensionablePay>1200000 && pensionablePay<1600000){
                let pension=(0.1*400000)+((pensionablePay-400000)*0.15)+((pensionablePay-800000)*0.2)+((pensionablePay-1200000)*0.25);

            }else if(pensionablePay>1600000){
                let pension=(0.1*400000)+((pensionablePay-400000)*0.15)+((pensionablePay-800000)*0.2)+((pensionablePay-1200000)*0.25)+((pensionablePay-1600000)*0.3);
            }

        } 
        function disabilityExemption(){
            if(basicSalary>150000){
                
            }
        }      
        
    }
     
               
              