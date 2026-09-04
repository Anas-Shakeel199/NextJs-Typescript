// basic types 

let age: number
age = 25;

let city: string
city = "lahore"

let isOnline: boolean
isOnline = true

let StudentsFirstName: string[]
StudentsFirstName = ["Anas","kamil","hamza"]

let user: [string, number]
user = ["name",88]

enum role {
    admin, user, guest
}

// array 
let scores: number[]
scores = [23,45,67,89,43]

let names: Array<string> = ["ali","rana"]

// basic functions
function add(a: number, b: number): number{
return a + b
}
add(78,89)

function greet(name:string, prefix: string = "hi"): string {
    return `${prefix}, ${name}`
}
greet("anas")

// type inference

let a = 88 

// type aliases
type anas = number | string
let an: anas
an = 89
an = "string bhi aya gi "

type status = "success" | "error" | "pending"

let bb:status
bb = "error"

type user = {
    name:string,
    age:number
}

let userAnas:user
userAnas = {
    name: "chaudhry Anas",
    age: 23
}

type post = {
    description:string,
    image?:string,
    likes:number
}

let obj:post = {
    description:"meet the sweet",
    image: "/image/mesges.png",
    likes: 88
}

// interface 
// object ki types bannah ka lia use kert han or ya bas object ka lia he use hota han ya variables ka lia ni hota 
interface newPost {
    title:string,
    des:string,
    image?:string,
    price:number,
    rating:number,
    postPass:boolean
}

let userPost:newPost = {
    title: "this is my post",
    des: "very old post",
    image: "/image.png",
    price: 89,
    rating:4.5,
    postPass: false
} 

// difference b/t types and interface 
//  types aik variable jo type ka union han or ager do types ko cobine kerna hn toh hum & ka use kerta hn or interface ma extend ka use kert han 

// genarics

function hello<T>(a:T,b:T) {
    
}
hello<number>(89,88)

interface use<T> {
    name:string,
    age:T
}
let ayush:use<number> = {
    name:"anas",
    age:21
}

// global types
let match:client;