let pd={
    pname: "dinga",
    page :"2",
    address:['bangalore','karnataka'],
    details:function (){
        console.log(`the name is ${this.pname}`)
    },
    spouse:{
        sname:"dingi",
        sage:"1"
    }
}
console.log(pd.pname)
console.log(pd.address[0])
console.log(pd.details())
console.log(pd.spouse.sname)

//2.object
function person(empname,empage,empdetails){
    this.empname=empname
    this.empage=empage
    this.empdetails=empdetails
}