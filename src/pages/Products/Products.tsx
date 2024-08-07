import React from "react";
import { Hero, ProductPanel, Quote } from "../../components";
import { productImage } from "../../assets/Images";
import { useProduct } from "../../hooks";
import { useEffect, useState, useCallback } from "react";
import { ProductProps, ProductSection } from "../../types";
import { getLocalStorageItem, setLocalStorageItem } from "../../utils";
import { Product } from "./Product/Product";

const MemoProducts: React.FC = () => {
  const { data, error, loading } = useProduct(
    "https://script.googleusercontent.com/a/macros/imperiorailing.com/echo?user_content_key=Ay_XW6emxmiwQ7Lncs10OYWdnFeTW0upS6uckktFqOCWvYse7Um3IucncElvDr3F6e1U0oIbcefbm_KsKRb7lGfzRJKfhSKKOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKC1zka5stJV6CJ8rbxa1V-UsEmAp_psx4LPWV2VVapqoanwc9S-o8wsibsbmz75VIWJ6s0UnHNjn57l_O834N2gmbbRpWFxXoNaVLQCjst0OCroO14vipAt9G3wLhldpT5hqak0MdSxiw&lib=McNTorF1LzcGC_6h_0B7S9zQVEnUvMwCs"
  );
  const [productSections, setProductSections] = useState<ProductSection[]>([]);
  const [problem, setProblem] = useState<boolean>(false);

  const dataBuilder = useCallback((data: ProductProps[]): ProductSection[] => {
    const headers = [...new Set(data.map((item) => item["Product Category"]))];
    return headers.map((header) => ({
      header,
      products: data.filter((item) => item["Product Category"] === header),
    }));
  }, []);

  useEffect(() => {
    const localData = getLocalStorageItem<ProductProps[]>("ProductData");
    if (localData) {
      const sections = dataBuilder(localData);
      setProductSections(sections);
    } else if (data) {
      const sections = dataBuilder(data);
      setProductSections(sections);

      if (loading || error) {
        setProblem(true);
      } else {
        setProblem(false);
      }
    }
    if (JSON.stringify(localData) !== JSON.stringify(data) && data.length > 0) {
      setLocalStorageItem<ProductProps[]>("ProductData", data);
    }
  }, [data, error, loading, dataBuilder]);

  if (problem) {
    return (
      <div>
        <Hero
          img={productImage}
          altText="Hero image for product"
          header="Our Products"
          subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
          curve
        />
        {/* <main>
          <section className=" pb-24">
            <div className="pt-5 phone:pt-12 laptop:pt-24 px-4 phone:px-8 tablet:px-16 laptop:px-24 xl:px-32 2xl:px-44">
              <h1 className=" px-5 text-[2.25rem] phone:text-[2.5rem] tablet:text-[2.75rem] laptop:text-5xl text-[--third] font-normal">
                Base
              </h1>
              <div className="grid gap-10 xl:gap-20 py-2 phone:py-4 tablet:py-8 laptop:py-16 grid-cols-2 xl:grid-cols-4 justify-items-center">
                <div className=" max-w-60 max-h-64 h-64 flex flex-col items-center rounded-xl overflow-hidden group shadow-sm hover:shadow-none cursor-pointer transition-700 outline-none">
                  <div className=" relative overflow-hidden w-full h-full">
                    <div className=" absolute h-full p-5 text-white bg-gradient-to-r from-black to-black z-10 flex flex-col justify-center opacity-0 group-hover:opacity-70 transition-700 ">
                      <img
                        src="https://i.postimg.cc/8PwYtjPT/IMPERIO-A50-BLACK.jpg"
                        alt="A50 Image"
                        title="A50 Image"
                        className="w-full h-full object-cover group-hover:scale-x-[-1] transition-700"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className=" max-w-64 max-h-72 h-72 flex flex-col items-center rounded-xl overflow-hidden group shadow-sm hover:shadow-none cursor-pointer transition-700 outline-none">
                  <div className=" relative overflow-hidden w-full h-full">
                    <div className=" absolute h-full p-5 text-white bg-gradient-to-r from-black to-black z-10 flex flex-col justify-center opacity-0 group-hover:opacity-70 transition-700 ">
                      <img
                        src="https://i.postimg.cc/8PwYtjPT/IMPERIO-A50-BLACK.jpg"
                        alt="A50 Image"
                        title="A50 Image"
                        className="w-full h-full object-cover group-hover:scale-x-[-1] transition-700"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className=" max-w-64 max-h-72 h-72 flex flex-col items-center rounded-xl overflow-hidden group shadow-sm hover:shadow-none cursor-pointer transition-700 outline-none">
                  <div className=" relative overflow-hidden w-full h-full">
                    <div className=" absolute h-full p-5 text-white bg-gradient-to-r from-black to-black z-10 flex flex-col justify-center opacity-0 group-hover:opacity-70 transition-700 ">
                      <img
                        src="https://i.postimg.cc/8PwYtjPT/IMPERIO-A50-BLACK.jpg"
                        alt="A50 Image"
                        title="A50 Image"
                        className="w-full h-full object-cover group-hover:scale-x-[-1] transition-700"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className=" max-w-64 max-h-72 h-72 flex flex-col items-center rounded-xl overflow-hidden group shadow-sm hover:shadow-none cursor-pointer transition-700 outline-none">
                  <div className=" relative overflow-hidden w-full h-full">
                    <div className=" absolute h-full p-5 text-white bg-gradient-to-r from-black to-black z-10 flex flex-col justify-center opacity-0 group-hover:opacity-70 transition-700 ">
                      <img
                        src="https://i.postimg.cc/8PwYtjPT/IMPERIO-A50-BLACK.jpg"
                        alt="A50 Image"
                        title="A50 Image"
                        className="w-full h-full object-cover group-hover:scale-x-[-1] transition-700"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main> */}
      </div>
    );
  }

  return (
    <main>
      <title>Products - Imperio Railing Systems</title>
      <Hero
        img={productImage}
        altText="Hero image for product"
        header="Our Products"
        subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
        curve
      />
      <section className="pb-24">
        {productSections.map((section, index) => (
          <ProductPanel
            key={index}
            header={section.header}
            productDetail={section.products}
          />
        ))}
      </section>
      <Quote />
    </main>
  );
};
export const Products = React.memo(MemoProducts);
export { Product };
