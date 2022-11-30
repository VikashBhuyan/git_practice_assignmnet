let num = parseInt(prompt("enter a number"))
for(let i=0;i<num;i++)
{
	if(num%i!=0)
	{
		count = -1
	}
}
if(count++)
{
	console.log("yes")
}