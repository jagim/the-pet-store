export default function FindUsView() {
    return (
        <div className="container mx-auto mt-10 flex flex-col gap-5">
            <h2 className="text-5xl font-bold text-center uppercase">Find us</h2>
            <div className="flex flex-col gap-2 w-2/3 mx-auto mt-5">
                <p className="text-xl">Welcome to <span className="font-medium">The Pet Store!</span>, the ultimate destination for pet care! We are located in the heart of the city, where you will find a wide selection of products and services to meet the needs of your beloved pets.</p>
                <div className="flex gap-2 p-3">
                    <img src="./icons/location.svg" alt="location icon" />
                    <p className="uppercase font-semibold border-l-[3px] pl-2 border-purple-500">Address:</p>
                    <p>742 Evergreen Terrace</p>
                </div>
                <div className="flex gap-2 p-3">
                    <img src="./icons/calendar_clock.svg" alt="opening hours icon" />
                    <p className="uppercase font-semibold border-l-[3px] pl-2 border-purple-500">Opening Hours:</p>
                    <div className="block">
                        <p>Monday to Friday:<span className="font-medium"> 8:00hs - 18:00hs</span></p>
                        <p>Saturday:<span className="font-medium"> 8:00hs - 13:00hs</span></p>
                    </div>
                </div>
                <div className="flex gap-2 p-3">
                    <img src="./icons/phone.svg" alt="phone icon" />
                    <p className="uppercase font-semibold border-l-[3px] pl-2 border-purple-500">Phone:</p>
                    <p className="font-medium">5588-0000</p>
                </div>
                <div className="flex gap-2 p-3">
                    <img src="./icons/mail.svg" alt="email icon" />
                    <p className="uppercase font-semibold border-l-[3px] pl-2 border-purple-500">Email:</p>
                    <p className="font-medium">info@thepetstore.com</p>
                </div>
            </div>
            <div className="max-w-[30rem] mt-5 mx-auto border-[3px] border-black">
                <img src="./map.webp" alt="map shop location" className="" />
            </div>
        </div>
    )
}