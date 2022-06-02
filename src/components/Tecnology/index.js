import TagsTecnology from "../TagsTecnology";

export default function Tecnology() {
  return (
    <>
      <section id="tecnologys">
        <div className="relative max-w-7xl mx-auto pt-16 pb-10  px-4 sm:py-1.52 sm:px-6 lg:px-8">
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl  hover:text-royalblue ease-in duration-300 ">
              <span className="border-b-2 border-transparent hover:border-b-2 hover:border-royalblue duration-400">
                My Tecnologys
              </span>
            </h2>
          </div>
          <p className="mt-4 text-gray-600 xl:mt-6 ">
            Some technologies that I somehow had contact during my career.
          </p>
        </div>
        <div className="flex-col  max-w-7xl mx-auto px-4 sm:py-1.52 sm:px-6 lg:px-8  ">
          <div className="flex pb-5 pspace-x-8 ">
            <TagsTecnology name="HTML" color="bg-gray-400" />
            <TagsTecnology name="CSS" color="bg-gray-400" />
            <TagsTecnology name="JavaScript" color="bg-gray-400" />
            <TagsTecnology name="Typescript" color="bg-gray-400" />
            <TagsTecnology name="PHP" color="bg-gray-400" />
          </div>
          <div className="flex pb-5 space-x- py-1 ">
            <TagsTecnology name="Laravel" color="bg-gray-400" />
            <TagsTecnology name="Vue.JS" color="bg-gray-400" />
            <TagsTecnology name="Angular" color="bg-gray-400" />
          </div>
          <div className="flex py-1 ">
            <TagsTecnology name="MVC" color="bg-gray-400" />
            <TagsTecnology name="Clean Code" color="bg-gray-400" />
            <TagsTecnology name="TDD" color="bg-gray-400" />
            <TagsTecnology name="Scrum" color="bg-gray-400" />
          </div>
        </div>
      </section>
    </>
  );
}
