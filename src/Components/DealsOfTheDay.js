import React from 'react'
const dealsOfTheDay=[{id:"1",
imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1022,pr-true,f-webp,q-80/inventory/product/2e256ec1-4f92-4d71-b952-41f8188b9dfd-tmp/6d2288ae-a5f3-4af0-89e6-c419ea40d387.jpeg",
Name:"Watermelon Kiran",
quantity:"1 pc (Approx. 2 - 3 kg)",
price1:"₹93",
price2:"₹77",
offer1:"17%off",
button:"add"},
{id:"2",
imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-4008-4008,pr-true,f-webp,q-80/inventory/product/f8a73d5c-53b5-4d8e-9c80-50c66f4f43ca-shutterstock_486923446.jpg",
Name:"Tender Coconut (Nariyal)/Kobbari Bondam",
quantity:"3pc",
price1:"₹210",
price2:"₹162",offer1:"15%off",
button:"add"},
{id:"4",
imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-4520-3613,pr-true,f-webp,q-80/inventory/product/cc9e44cc-06af-49f0-b8cd-b5ef0d73a0f0-shutterstock_1978892732.jpg",
Name:"Papaya Lady Red/Poppadi Pandu/Boppas Pandu Semi Ripe",
quantity:"1 pc (Approx. 700g - 1.2 kg)",
price1:"₹90",
price2:"₹74",offer1:"16%off",
button:"add"},
{id:"5",
imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-640-480,pr-true,f-webp,q-80/inventory/product/3e8dfc9a-0152-4a4b-8e1e-465d39c183f6-Photo.jpeg",
Name:"Raw Mango",
quantity:"1 kg",
price1:"₹177",
price2:"₹146",offer1:"18%off",
button:"add"},
{id:"6",
imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-679-602,pr-true,f-webp,q-80/inventory/product/a9ebd0f1-127d-49b6-9fba-0d0762e09c20-/tmp/20230202-0613511.jpeg",
Name:"Pomegranate (Economy)",
quantity:"2 pcs (Approx. 400g - 500g)",
price1:"₹177",
price2:"₹145",offer1:"16%off",
button:"add"},
{id:"7",
imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/d193005a-7236-4fe3-b356-f653cbde0a89-Photo.jpeg",
Name:"Grapes Bengalore Blue",
quantity:"1kg",
price1:"₹250",
price2:"₹180",offer1:"10%off",
button:"add"},
{id:"8",
imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-500-500,pr-true,f-webp,q-80/inventory/product/7e617310-bd53-4643-8cd2-66229cd7e259-f624d7ea-cb1d-4bc6-be9c-679c38450678.jpeg",
Name:"Apple Red Delicious",
quantity:"5pcs",
price1:"₹350",
price2:"₹280",offer1:"15%off",
button:"add"},
{id:"9",
imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-276-183,pr-true,f-webp,q-80/inventory/product/1f370306-7c75-470e-bc7c-2940ce727ef5-282ef09d-737c-4807-97db-a447296810fe.jpeg",
Name:"Apple Royal Gala",
quantity:"5pcs",
price1:"₹350",
price2:"₹290",offer1:"18%off",
button:"add"},
{id:"10",
imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-480-480,pr-true,f-webp,q-80/inventory/product/37629218-5c48-4d1f-a0f2-ccc6aef434ce-Photo.jpeg",
Name:"Apple Royal Gala",
quantity:"5pcs",
price1:"₹350",
price2:"₹280",offer1:"19%off",
button:"add"},
]
export default function DealsOfTheDay() {
  return (
    <div style={{display:'flex',flexWrap:'wrap'}}>
        <h2>Summer fruits</h2>
        {
            dealsOfTheDay.map((x)=>{return(<div>
                <img src={x.imagePath} alt="" />
                <h4>{x.quantity}</h4>
                <del>{x.price1}</del>
                <h4>{x.price2}</h4>
                <button>{x.offer1}</button>
                <button>{x.button}</button>
                

                </div>)
            })
        }
    </div>
  )
};