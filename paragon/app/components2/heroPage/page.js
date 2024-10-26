import Image from "next/image";

export default function HeroPage() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1">
        <h2 className="pb-3">Paragon Group</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
          consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nostrum voluptate beatae consequuntur molestiae harum alias assumenda
          quam tempore fugit fuga?
        </p>
        <button className="p-2 bg-blue-600 text-white rounded-md mt-5">
          SEE MORE
        </button>
      </div>
      <div>
        <Image
          className="rounded-sm"
          src="/hero-image.jpeg"
          height={300}
          width={500}
          alt="alternate image"
        />
      </div>
    </div>
  );
}
