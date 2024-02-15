#!/usr/bin/env node
let inputArr=process.argv.slice(2);
const { dir } = require("console");
let fs=require("fs")
let path=require("path")
//node main.js tree "directoryPath
//node main.js organize "directoryPath"
//node main.js help
let command =inputArr[0];
let helpObj=require("./commands/help")
let treeObj=require("./commands/tree")
let organizeObj=require("./commands/organize")
let utility={}
let types={
    media: ["mp4", "mkv","png","jpg"],
    archives: ['zip', '72', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ["exe", 'dmg', "pkg", "deb"]
    }
module.exports=utility;

switch(command){
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("please Input Right command")
}

