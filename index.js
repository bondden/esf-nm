/**
 * Created by Denis Bondarenko <bond.den@gmail.com> on 2016.04.07
 */ 
"use strict";

const hlp=`
Usage:
node ../esf-nm mod-name
`;

const
	ejs					=require('ejs'),
	isValidJson	=require('is-my-json-valid'),
	fs					=require('fs')
	;
	
let d={};

if(process.argv.length>2){
	
	fs.readFile('d/dft.json',{encoding:'utf8'},(e,r)=>{
		
		if(e){
			console.error(e);
			process.exit(1);
		}
		
		let vld = isValidJson({
		}, {
			verbose: true
		})
		
		if(!vld(r)){
			console.error('not a valid JSON\n'+JSON.stringify(vld.errors,null,'  '));
			process.exit(1);
		}
		
		d=JSON.parse(r);
	
		d.name=process.argv[2];
		console.log(d);
		
	});
	
}else{
	console.log('no args'+hlp);
	process.exit(1);
}