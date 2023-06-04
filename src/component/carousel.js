import * as React from "react";

const products = [ 
  {
    id: 1,
    name: "Title",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 2,
    name: "Title",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 3,
    name: "Title",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 4,
    name: "Title",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 5,
    name: "Title",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 6,
    name: "Title",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 7,
    name: "Title",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
];

function carousel() {
  return (
    <div class="flex flex-col bg-white m-auto p-auto">
      <h1 class="flex py-3 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-black-200">
        Section Title
      </h1>
      <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div class="left-0 py-6 flex flex-nowrap  ">
          {products.map((product) => (
            <a href={product.href}>
              <div
                href={product.href}
                class="inline-block px-3 transform 
          transition duration-300 hover:scale-105"
              >
                <div class=" group w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className=" object-fill h-[22rem] w-full "
                  ></img>
                  <div className="inline-block pl-3">{product.name}</div>
                  <span
                    className="inline-block float-right transition transform translate-y-16 ease-in-out 
          group-hover:visible  
            bg-gray-100 
            duration-500
          group-hover:translate-y-0          ring-transparent
          ring ring-4
          rounded-full

          "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      color="gray"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class=" rounded-full  w-6 h-6"
                    >
                      <path
                        className="center"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
export default carousel;
