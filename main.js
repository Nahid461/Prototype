function main(){


    this.onSubmit=function(){

        let protoTypeObj=new protoTypeDemo();
        protoTypeObj.fullName="Nahid Fatima";
        console.log(protoTypeObj.fullName);

        protoTypeObj.demo();

        protoTypeObj.demo2();
        console.log(protoTypeObj.fullName);

    }

}

function onSubmitButtonClickEvent(){
     let mainObj=new main();
     mainObj.onSubmit();

}