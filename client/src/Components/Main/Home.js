import React from 'react'
import bg from "../../assets/bg.jpg";
import bg2 from "../../assets/bg2.jpg";
import donationFact from "../../assets/donationfact.png"
import g1 from "../../assets/donation/g11.jpg"
import g2 from "../../assets/donation/g22.jpg"
import g3 from "../../assets/donation/g44.jpg"
import g4 from "../../assets/donation/g33.jpg"
const Home = () => {
    const temp = [
        { blood: "A+", donate: "A+ AB+", recieve: "A+ A- O+ O-" },
        { blood: "O+", donate: "O+ A+ B+ AB+", recieve: "O+ O-" },
        { blood: "B+", donate: "B+ AB+", recieve: "B+ B- O+ O-" },
        { blood: "AB+", donate: "AB+", recieve: "Everyone" },
        { blood: "A-", donate: "A+ A- AB+ AB-", recieve: "A- O-" },
        { blood: "O-", donate: "Everyone", recieve: "O-" },
        { blood: "B-", donate: "B+ B- AB+ AB-", recieve: "B- O-" },
        { blood: "AB-", donate: "AB+ AB-", recieve: "AB- A- B- O-" }
    ]
    const temp2 = [
        { title: "Registration", img: g1 },
        { title: "Observation", img: g2 },
        { title: "Donation", img: g3 },
        { title: "Save Life", img: g4 },
    ]
    return (
        <div className="dark:text-white-900">
             <img src={bg} alt="" />
          
            <h1 className='font-bold text-center text-blood my-4 text-lg underline'>Information About Donation</h1>
            <div className='flex px-20'>
               
                <div>
                    <table className='w-max' cellPadding={5}>
                        <tr>
                            <td colSpan={3} className="border bg-blood text-white-900 text-center font-bold">Compatible Blood Type Donors</td>
                        </tr>
                        <tr>
                            <th className='border w-max text-lg'>Blood Type</th>
                            <th className='border w-max text-lg'>Donate Blood To</th>
                            <th className='border w-max text-lg'>Receive Blood From</th>
                        </tr>
                        {temp.map((e) => {
                            return (
                                <tr>
                                    <td className='border w-max text-lg'>{e.blood}</td>
                                    <td className='border w-max text-lg'>{e.donate}</td>
                                    <td className='border w-max text-lg'>{e.recieve}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>

                <div>
                    <img src={donationFact} width="90%" alt=""/>
                    <p className='text-center'>
                        <code>After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn, helps in maintaining good health.</code>
                    </p>
                </div>
            </div>
            <p className='text-xl underline font-bold text-blood text-center mt-5 mb-5'>
                Blood Donation Process
            </p>
            <div className='grid gap-x-2 gap-y-10 grid-cols-2 justify-items-center '>
                {temp2.map((e, i) =>
                    <div className='border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none grid grid-cols-2 hover:gap-2 justify-items-center'>
                        <div><img src={e.img} draggable={false} width="100%" alt="" /></div>
                        <div className='m-4'>
                            <h1 className='font-bold text-lg text-midnight dark:text-white-900'>{i + 1} - {e.title}</h1>
                            <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur qwey adipisicing elit. Doloribus, as aliquam corporis dolorem consectetur qui libero, veritatis, nihil alias repellat quam architecto nobis laudantium ipsum nemo nesciunt quisquam est odit ad?</p>
                        </div>
                    </div>
                )}
            </div>
            <br />
            <div className='w-full bg-blood text-white-900 h-8 text-sm text-center font-normal align-middle'>
                <code> BloodBridge  {new Date().getFullYear()} Teamwork by Group-5</code>
            </div>
            
        </div>
    )
}

export default Home