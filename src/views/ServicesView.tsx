export default function ServicesView() {
    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-5xl font-bold text-center uppercase">Our Services</h2>
            <div className="flex flex-col gap-2 w-2/3 mx-auto mt-5 text-xl">
                <p>Whether it's a pamper day, a play date, a sleepover, a training class, or a visit to the vet, we provide the best in services for your pet, with passionate, highly trained professionals.</p>
                <p>From our pet hotel and dog day camp as an alternative to pet sitting, to our dog training and grooming as an alternative to DIY, our services are conveniently located inside our stores.</p>
            </div>
            <div className="mx-auto mt-5 p-5 flex gap-10 w-fit rounded-xl shadow-xl">
                <div className="border-[3px] border-purple-500 rounded-lg p-2 hover:scale-110 shadow-lg">
                    <div className="w-[7rem] border-[3px] border-black rounded-full">
                        <img src="./grooming.svg" alt="grooming logo" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mt-1">Grooming</h3>
                </div>
                <div className="border-[3px] border-purple-500 rounded-lg p-2 hover:scale-110 shadow-lg">
                    <div className="w-[7rem] border-[3px] border-black rounded-full">
                        <img src="./hotel.svg" alt="hotel logo" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mt-1">Hotel</h3>
                </div>
                <div className="border-[3px] border-purple-500 rounded-lg p-2 hover:scale-110 shadow-lg">
                    <div className="w-[7rem] border-[3px] border-black rounded-full">
                        <img src="./training.svg" alt="training logo" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mt-1">Training</h3>
                </div>
                <div className="border-[3px] border-purple-500 rounded-lg p-2 hover:scale-110 shadow-lg">
                    <div className="w-[7rem] border-[3px] border-black rounded-full">
                        <img src="./vet.svg" alt="vet cares logo" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mt-1">Vet Cares</h3>
                </div>
            </div>
            <div className="my-10 grid grid-cols-4 gap-5">
                <div className="border-[3px] border-purple-500 rounded-lg shadow-xl">
                    <h3 className="text-xl font-semibold p-2 text-center underline">Grooming:</h3>
                    <p className="p-3 leading-7">Our team of dog groomers is dedicated to providing high-quality grooming service that will leave your pet looking and feeling amazing. Whether it's a stylish haircut, a relaxing bath, or a simple brushing, we'll make sure your furry friend looks radiant.</p>
                </div>
                <div className="border-[3px] border-purple-500 rounded-lg shadow-xl">
                    <h3 className="text-xl font-semibold p-2 text-center underline">Pet Hotel</h3>
                    <p className="p-3 leading-7">Do you need a safe and comfortable place to leave your pet while you're out of town? Do not look any further! Our pet hotel offers impeccable facilities and a dedicated team who will ensure your furry friend receives all the care and attention they need while you're away.</p>
                </div>
                <div className="border-[3px] border-purple-500 rounded-lg shadow-xl">
                    <h3 className="text-xl font-semibold p-2 text-center underline">Personalized training:</h3>
                    <p className="p-3 leading-7">All dogs, regardless of breed or age, can benefit from proper training. Our animal behavior experts offer customized training programs to address your pet's specific needs, whether they are learning basic commands, correcting unwanted behaviors, or working on advanced skills.</p>
                </div>
                <div className="border-[3px] border-purple-500 rounded-lg shadow-xl">
                    <h3 className="text-xl font-semibold p-2 text-center underline">Veterinary Cares</h3>
                    <p className="p-3 leading-7">The health and well-being of your pet is our top priority. That's why we have a team of highly qualified veterinarians equipped to provide comprehensive and compassionate medical care. From regular checkups and vaccinations to medical treatments and surgeries, we are here to care for your furry friend at every stage of his life.</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-2/3 mx-auto mt-5 bg-orange-200 p-5 rounded-xl">
                <p className="text-xl font-medium">At our pet store, we are committed to providing exceptional services that meet all the needs of your beloved pets. Come and discover everything we have to offer!</p>
            </div>
        </div>
    )
}
