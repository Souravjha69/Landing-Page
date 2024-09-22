import aboutImage from "../assets/about.webp"
function About() {
    return (
        <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
            <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4">
                About
            </h2>
            <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
                <div className="mb-8 lg:mb-0">
                    <img src={aboutImage} alt="About VastuSpaze" className="w-full h-auto" />
                </div>
                <p className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8">
                    At VastuSpaze, we beleive in transforming houses into dream homes. With a passion for design and a commitment to quality, our team of skilled professionals
                    Whether you're looking to renovate a single room or undertake a complete home transformation, Gomes Building has the expertise to handle projects of any scale. Our client-first approach ensures that your preferences and needs are at the forefront of every decision we make. We prioritize communication and transparency, so you are always in the loop about the progress of your project.
                </p>
            </div>
        </section>
    )
}
export default About;