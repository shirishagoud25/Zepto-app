import React from 'react'
const yourPleasureEssentials=[{
    id:"1",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-500-500,pr-true,f-webp,q-80/inventory/product/8068804f-f340-4a1f-a3b1-ccefbbff1c53-image_file.png"
},
{
    id:"2",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-679-679,pr-true,f-webp,q-80/inventory/product/979e7cfc-2667-4e63-b863-31879f1f4b32-1S4l0hXZtgbwh6LGc0AhHiC8H4N5CNRuj.jpeg"
},
{
    id:"3",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-400-625,pr-true,f-webp,q-80/inventory/product/33e396f0-76bb-4366-9141-791b82ef0bac-image_file.png"
},
{
    id:"4",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-320-982,pr-true,f-webp,q-80/inventory/product/12989d6c-7073-41c8-aae0-9018b0847e14-181LYabyJUjgHtUwKwZtIr2q058_nkSU4.jpeg"
},
{
    id:"5",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/a41b588a-8301-4571-a4c9-5d3741a48ec8-1ZiCmQjEDpff24jBb8DYSwabxmkrp5SVq.jpeg"
},
{
    id:"6",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-400-400,pr-true,f-webp,q-80/inventory/product/c0e9a596-8140-48b3-b2b7-b35d67c49497-image_file.jpeg"
},
// {
//     id:"7",
//     imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-400-400,pr-true,f-webp,q-80/inventory/product/c0e9a596-8140-48b3-b2b7-b35d67c49497-image_file.jpeg"
// },
{
    id:"8",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-861-992,pr-true,f-webp,q-80/inventory/product/c869eb55-0546-45a8-bd1a-7878e9a9fceb-1Pwqyeocs5yj67RYInLGR-Xfl5ydVfIzo.jpeg"
},
{
    id:"9",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-810-980,pr-true,f-webp,q-80/inventory/product/5a5566c5-ff14-4a03-96ca-cbb276c848df-1YQZxC1f5y0VfkI4GrXM1KHR9idfvmZyd.jpeg"
},
{
    id:"10",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-801-969,pr-true,f-webp,q-80/inventory/product/cf24cfe9-f589-4682-9372-414acc119762-1UV_HqHutrFce9_VcuDfpO1utYlWToayX.jpeg"
},]
 function YourPleasureEssentials() {
  return (
    <div>
        <h2>Brands in Focus</h2>
{
    yourPleasureEssentials.map((x)=>{
        return(
            <img src={x.imagePath} alt="" />
        )
    })
}
    </div>
  )
}
export default YourPleasureEssentials;
