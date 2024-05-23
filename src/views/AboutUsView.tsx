export default function AboutUsView() {
    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-5xl font-bold text-center uppercase">Know about us</h2>
            <div className="flex flex-col gap-2 w-2/3 mx-auto mt-5">
                <p className="text-wrap">At <span className="font-medium">The Pet Store</span>, we believe in the power of the connection between humans and animals. We are more than just a pet store, we are a place where stories of love and companionship between humans and animals begin and flourish.</p>
                <p className="text-wrap">Since we opened our doors, we have been committed to offering our customers not only high-quality products, but also a unique and personalized experience. We take pride in not only providing the best food, toys and accessories for your pets, but also providing guidance and support to our customers every step of the way.</p>
                <div className="flex my-10 items-center justify-evenly">
                    <p className="p-3 max-w-72 text-wrap">Our team is made up of passionate and dedicated animal lovers. We are here to listen to your needs, answer your questions and offer you solutions that perfectly suit you and your pet. Whether you're looking for the healthiest food for your dog, the funniest toy for your cat, or just want to share stories about your pets, we're here for you.</p>
                    <img src="https://escuelaclinica.com/wp-content/uploads/CSA163.jpg" alt="vet professionals" className="w-1/2 object-cover" />
                </div>
                <p className="text-wrap">At <span className="font-medium">The Pet Store</span>, we also care deeply about animal welfare and are committed to working with ethical and responsible suppliers. We strive to promote pet adoption and work closely with local shelters to help find loving homes for animals in need.</p>
                <p className="text-wrap">We are honored to be part of the community of animal lovers and are grateful for the trust our customers place in us. We hope to continue to be your trusted destination for all your pets' needs and witness the happiness and love you share with them.</p>
            </div>
        </div>
    )
}