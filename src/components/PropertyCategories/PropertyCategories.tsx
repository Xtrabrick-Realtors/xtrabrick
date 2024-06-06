import React from "react";
import { useRouter } from "next/router";
import CustomHeading from "../CustomHeading/CustomHeading"; // Import the Carousel component
import {
  CategoriesWrapper,
  CategoryItemButton,
  CategoryItemButtonText,
  CategoryItemLocation,
  CategoryItemTitle,
  CategoryItemType,
  CategoryItemWrapper,
  CategoryListWrapper,
} from "./PropertyCategory.styles";
import RightArrow from "../../../public/assets/svg/RightArrow";
import { PROPERTY_CATEGORIES } from "@/constants";
import Image from "next/image";
import Carousel from "../Carousel/Carousel";

const PropertyCategories = () => {
  const router = useRouter();
  return (
    <CategoriesWrapper id={"propertyCategories"}>
      <CustomHeading heading="Find the property of your dreams" />
      <CategoryListWrapper>
        {PROPERTY_CATEGORIES.map((item, index) => (
          <CategoryItemWrapper key={index}>
            <Carousel
              options={{
                loop: true,
              }}
              autoplayOnHover={true}
            >
              {item.images.map((image, imageIndex) => (
                <Image
                  src={image}
                  alt={item.title}
                  layout={"responsive"}
                  objectFit={"cover"}
                  width={406}
                  height={306}
                  loading={"eager"}
                  key={imageIndex}
                />
              ))}
            </Carousel>

            <CategoryItemTitle>{item.title}</CategoryItemTitle>
            <CategoryItemLocation>{item.location}</CategoryItemLocation>
            <CategoryItemType>{item.type}</CategoryItemType>

            {item.ctaTitle && (
              <CategoryItemButton onClick={() => router.push(item.ctaLink)}>
                <CategoryItemButtonText>{item.ctaTitle}</CategoryItemButtonText>
                <RightArrow />
              </CategoryItemButton>
            )}
          </CategoryItemWrapper>
        ))}
      </CategoryListWrapper>
    </CategoriesWrapper>
  );
};

export default PropertyCategories;
