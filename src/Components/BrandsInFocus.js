import React from 'react'
const brandsInFocus=[{
    id:"1",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-384,ar-384-564,pr-true,f-webp,q-80/inventory/banner/3ec2dd74-6bdf-4458-8276-e8a5e28b715e-GROUPED_HORIZONTAL-Centrum.png"
},
{
    id:"2",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-384,ar-384-564,pr-true,f-webp,q-80/inventory/banner/110bc13b-167a-4c87-9961-7f623edcbda2-Grouped_Smell-Great.png"
},
{
    id:"3",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-384,ar-384-564,pr-true,f-webp,q-80/inventory/banner/35070384-6e7b-48de-9818-982646a2413c-Grouped_Stepping-Up-Your-Step-Count.png"
},
{
    id:"4",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-384,ar-384-564,pr-true,f-webp,q-80/inventory/banner/cd07c889-d910-4f83-926f-82308d209119-Grouped_Glam-up.png"
},]

export default function BrandsInFocus() {
  return (
    <div style={{justifyContent:'space-between',flexWrap:'wrap',}}>
        <h2>Brand in Focus</h2>
        {
         brandsInFocus.map((x)=>{
            return(
                <img src={x.imagePath} alt="" />
            )
         })   
        }
    </div>
  )
}
