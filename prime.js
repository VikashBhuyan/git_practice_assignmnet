let num = parseInt(prompt("enter a number"))
let count =0
for(let i=0;i<num;i++)
{
	if(num%i==0)
	{
		count++
	}
}
if(count==0)
{
	console.log("yes")
}
else{
	console.log("no")
}