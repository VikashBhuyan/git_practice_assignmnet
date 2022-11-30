let str = prompt("enter num")
let count =0
for(let i=0;i<str.length;i++)
{
	if(str[i]==str[i])
	{
		count = -1
	}
}
if(count==-1)
{
	console.log("Not Palindrome"));
}
else{
	console.log("Palindrome")
}
