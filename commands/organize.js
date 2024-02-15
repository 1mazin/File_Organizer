let fs=require("fs")
let path=require("path")
function sendFiles(srcFilePath,dest,category ){
    let categoryPath=path.join(dest,category);
    if(!fs.existsSync(categoryPath)){
        fs.mkdirSync(categoryPath);
    }
    let fileName=path.basename(srcFilePath);
    let destFilePath=path.join(categoryPath,fileName);
    fs.copyFileSync(srcFilePath,destFilePath)
    fs.unlinkSync(srcFilePath)
    console.log(fileName,"copied to ",category)
}
function organizeFn(dirPath){
    // 1.input->directory path given
    let destPath;
    if(dirPath==undefined){
     destPath=process.cwd()
     return;
    }
    else{
     
     let doesExist=fs.existsSync(dirPath)
     if(doesExist){
         // 2.create ->organized_files->directory
         //create
         destPath=path.join(dirPath,"organized_Files");
         if(!fs.existsSync(destPath)){
             fs.mkdirSync(destPath)
         }
         
     }
     else{
         console.log("Kindly Enetr correct Path")
         return;  
     }
    }
    organizeHelper(dirPath,destPath);
    
    // 3.identify category of all the files precsent in that directory folder.
    // 4. copy /cut files to that organized directory inside of any of category folder    
     
 
 
 
 
 
 
 
 
 
 
 
 
 
 }
 
 function organizeHelper(src,dest){
      // 3.identify category of all the files precsent in that directory folder.
      let childNames=fs.readdirSync(src);
      console.log(childNames.length)
      for(let i=0;i<childNames.length;i++){
         let childAddress=path.join(src,childNames[i]);
         let isFile=fs.lstatSync(childAddress).isFile();
       
         if(isFile){
             let category=getCategory(childNames[i])
             console.log(childNames[i],"belongs to -->",category);
             sendFiles(childAddress,dest,category);
         }
      }
      console.log(childNames)
 }
 function getCategory(name){
    let ext= path.extname(name);
    ext=ext.slice(1);
    for(let type in types){
        let ctypeArr=types[type];
        for(let i=0;i<ctypeArr.length;i++){
            if(ext==ctypeArr[i]){
                return type;
            }
        }
    }
    return "others";


}
module.exports={
    organizeKey:organizeFn
}