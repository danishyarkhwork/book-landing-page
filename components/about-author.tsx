import Image from "next/image";

const AboutAuthor = () => {
  return (
    <section className="relative bg-white py-12 sm:py-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span>✍🏽</span>
          <h2 className="text-4xl font-bold text-gray-900 f-b-zar">
            ليکوال په اړه
          </h2>

          <div className="flex justify-center items-center">
            <Image
              className="box-content rounded-2 border-2 border-gray-50"
              src={"/images/hussam.svg"}
              width={300}
              height={32}
              alt="Book Image"
            />
          </div>

          <p className="mt-4 text-lg text-gray-600">
            Ali Abdaal, a doctor and entrepreneur, popularizes the science of
            human flourishing and productivity. His work reaches millions
            globally, helping people achieve more while feeling better.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
