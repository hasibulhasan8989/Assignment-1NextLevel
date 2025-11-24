 -----------------Question 2------------------

keyof হলো typeScript এর একটি অপারেটর | এটি অবজেক্ট টাইপ থেকে এর key গুলো কে ইউনিয়ন আকারে দেয়  | এর মানে এটি দ্বারা আমরা একটি অবজেক্ট টাইপ এর key গুলো কে সঠিক ভাবে বের করে নিয়ে আসতে পারি পুনরায় টাইপ করা ছাড়া  .

Example :

type Person={
    name:"Hasibul Hasan";
    age:45;
    address:"Dhaka,Bangladesh"
}

type PersonKey=keyof Person;  ===> "name"|"age"|"address"




----------------- Question 5----------------

অনেকগুলো  টাইপ একসাথে থাকে কিন্তু তারভিতর যেকোনো একটা হলেই  typescript একসেপ্ট করবে | যেমন আমরা যদি একটা টাইপ ডিফাইন করি হয় সেইটা স্ট্রিং হবে অথবা নম্বর তাহলে আমরা ইউনিয়ন ব্যাবহার করবো |বিষয়টা  এইভাবে চিন্তা করতে পারি অনেকগুলো অপসন তার মধ্যে একটা হতে হবে |

Example :

const getNameOrId=(input: string|number)=>{
   console.log(input)
}
এইখানে string|number  দুইটার যেকোনো একটা হলেই হবে 





intersection হলো অনেকগুলো টাইপ এর সমষ্টি |বা বলা যেতে পারে অনেকগুলো টাইপ মিলে মাত্র একটি টাইপ | 

type Person={
    name:string
}

type Teacher={
    ID:number
}

const seniorTeacher:Person & Teacher={
    name:"Hasibul Hasn",
    ID:181
}

এইখানে Person & Teacher মানে বুজানো হয়েসে এই দুইটা টাইপ  থাকতে হবে |অর্থাৎ seniorTeacher হতে হলে name & id দুইটাই লাগবে 














